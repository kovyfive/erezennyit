import { 
  EngineType, 
  TransmissionType, 
  TechnicalSpecs, 
  NOT_AVAILABLE, 
  MISSING,
  EngineVariant, 
  Features,
  Package,
  CarModel,
  DiscountTarget,
  CarVariant
} from './model';

/**
 * Factory function to make creation of engine variants easier
 */
export function createEngineVariant(
  listedEngineName: string,
  engineType: EngineType | typeof NOT_AVAILABLE,
  transmissionType: TransmissionType | typeof NOT_AVAILABLE,
  basePrice: number,
  technicalSpecs: Partial<TechnicalSpecs> = {},
  discountedPrice?: number,
): EngineVariant {
  return {
    listedEngineName,
    engineType,
    transmissionType,
    basePrice,
    discountedPrice,
    technicalSpecs: {
      engineDisplacement: technicalSpecs.engineDisplacement || NOT_AVAILABLE,
      horsepower: technicalSpecs.horsepower || NOT_AVAILABLE,
      consumption: technicalSpecs.consumption || NOT_AVAILABLE,
      acceleration0to100: technicalSpecs.acceleration0to100 || NOT_AVAILABLE,
      topSpeed: technicalSpecs.topSpeed || NOT_AVAILABLE,
      fuelTankCapacity: technicalSpecs.fuelTankCapacity || NOT_AVAILABLE,
      cargoVolumeSeatsUp: technicalSpecs.cargoVolumeSeatsUp || NOT_AVAILABLE,
      range: technicalSpecs.range || NOT_AVAILABLE,
      speakerCount: technicalSpecs.speakerCount || NOT_AVAILABLE,
    }
  };
}

/**
 * Factory function to make creation of default features easier
 */
export function createDefaultFeatures(): Features {
  return {
    safety: {
      laneKeepAssist: MISSING,
      cruiseControl: MISSING,
      smartCruiseControl: MISSING,
      smartCruiseControlWithStopAndGo: MISSING,
      blindSpotCollisionAvoidanceAssist: MISSING,
      isofix: MISSING,
      frontIsofix: MISSING,
    },
    parkingAssistance: {
      reversingRadar: MISSING,
      frontParkingSensor: MISSING,
      rearParkingSensor: MISSING,
      parkingCameras: MISSING,
      parkingCameras360View: MISSING,
      semiOrFullAutomaticParkingAssistant: MISSING,
      electricParkingBrake: MISSING,
    },
    convenience: {
      keylessStart: MISSING,
      wirelessPhoneCharger: MISSING,
      powerTailgate: MISSING,
      powerTailgateWithFootSensor: MISSING,
      frontPowerWindows: MISSING,
      rearPowerWindows: MISSING,
      powerFoldingMirrors: MISSING,
      heatedSideMirrors: MISSING,
      heatedFrontSeats: MISSING,
      heatedRearSeats: MISSING,
      dualZoneAC: MISSING,
      rainSensingWipers: MISSING,
      headUpDisplay: MISSING,
    },
    entertainment: {
      premiumSpeaker: MISSING,
      wiredCarPlayAndroidAuto: MISSING,
      wirelessCarPlayAndroidAuto: MISSING,
    },
    interiorExterior: {
      spareTire: MISSING,
      metalPedals: MISSING,
      paddleShifters: MISSING,
      velourFloorMats: MISSING,
      rubberMats: MISSING,
      tintedRearWindows: MISSING,
      roofRails: MISSING,
      slidingCenterConsole: MISSING,
      leatherSeats: MISSING,
    }
  };
}

/**
 * Helper function to convert camelCase to property name
 */
export function camelToProperty(camel: string): string {
  return camel.replace(/([A-Z])/g, match => {
    return match.toLowerCase();
  });
}

/**
 * Create a new instance of CarModel
 */
export function createCarModel(
  manufacturer: string,
  modelName: string,
  discountTarget: DiscountTarget = DiscountTarget.NONE,
  variants: CarVariant[] = []
): CarModel {
  return new CarModelImpl(manufacturer, modelName, discountTarget, variants);
}

/**
 * Implementation of CarModel class
 */
export class CarModelImpl implements CarModel {
  manufacturer: string;
  modelName: string;
  discountTarget: DiscountTarget;
  variants: CarVariant[];

  constructor(
    manufacturer: string,
    modelName: string,
    discountTarget: DiscountTarget = DiscountTarget.NONE,
    variants: CarVariant[] = []
  ) {
    this.manufacturer = manufacturer;
    this.modelName = modelName;
    this.discountTarget = discountTarget;
    this.variants = variants;
  }

  /**
   * Calculate price based on variant, engine, and selected features
   * @param variantName - Name of the car variant
   * @param engineName - Listed engine name
   * @param selectedFeatures - Array of feature names that user is interested in
   * @returns Object containing the base and discounted price (if available)
   */
  calculatePrice(
    variantName: string,
    engineName: string,
    selectedFeatures: string[] = []
  ): { basePrice: number; discountedPrice?: number; requiredPackages: Package[] } {
    // Find the variant
    const variant = this.variants.find(v => v.variantName === variantName);
    if (!variant) {
      throw new Error(`Variant ${variantName} not found`);
    }

    // Find the engine variant
    const engineVariant = variant.engineVariants.find(e => e.listedEngineName === engineName);
    if (!engineVariant) {
      throw new Error(`Engine ${engineName} not found in variant ${variantName}`);
    }

    // Start with the base price
    let basePrice = engineVariant.basePrice;
    const requiredPackages: Package[] = [];

    // Check if any selected features require packages
    const allFeatureCategories = [
      variant.features.safety,
      variant.features.parkingAssistance,
      variant.features.convenience,
      variant.features.entertainment,
      variant.features.interiorExterior
    ];

    // Check each feature category for packages needed
    for (const category of allFeatureCategories) {
      for (const [key, value] of Object.entries(category)) {
        // If the feature is in the selected list and requires a package
        const normalizedKey = camelToProperty(key);
        if (selectedFeatures.includes(normalizedKey) || selectedFeatures.includes(key)) {
          // If the feature is not available, return max value
          if (value === MISSING) {
            return {
              basePrice: Number.MAX_VALUE,
              requiredPackages: []
            };
          }
          
          // If the feature requires a package (string value with package name)
          if (typeof value === 'string' && value !== NOT_AVAILABLE) {
            const packageNeeded = variant.packages.find(pkg => pkg.name === value);
            if (packageNeeded && !requiredPackages.some(pkg => pkg.name === packageNeeded.name)) {
              requiredPackages.push(packageNeeded);
              basePrice += packageNeeded.price;
            }
          }
        }
      }
    }

    // Check for leather seat options
    for (const feature of selectedFeatures) {
      // Look for leather seat package options
      if (feature === 'leatherSeats') {
        // Check if the car has leather seat packages available
        if (variant.leatherSeatPackages && variant.leatherSeatPackages.length > 0) {
          // Add the first/default leather package (could be made more specific in the future)
          const leatherPackage = variant.leatherSeatPackages[0];
          if (!requiredPackages.some(pkg => pkg.name === leatherPackage.name)) {
            requiredPackages.push(leatherPackage);
            basePrice += leatherPackage.price;
          }
        }
      }
      
      // Check for custom color options
      if (feature.startsWith('color:')) {
        const colorName = feature.replace('color:', '');
        const customColor = variant.customColorPrices.find(color => color.name === colorName);
        if (customColor) {
          // Create a pseudo-package for the color for display in UI
          const colorPackage: Package = {
            name: `Color: ${customColor.name}`,
            price: customColor.price
          };
          requiredPackages.push(colorPackage);
          basePrice += customColor.price;
        }
      }
    }

    // Return the final price
    return {
      basePrice,
      discountedPrice: engineVariant.discountedPrice,
      requiredPackages
    };
  }
}
