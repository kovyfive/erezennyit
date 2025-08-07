
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
    { name: 'Hófehér', price: 0 },
    { name: 'Platina gyöngy', price: 300000 },
    { name: 'Palladium ezüst', price: 200000 },
    { name: 'Szürke metál', price: 200000 },
    { name: 'Krómezüst', price: 300000 },
    { name: 'Éjfekete', price: 200000 },
    { name: 'Barnászöld', price: 200000 },
    { name: 'Sötétkék mica', price: 200000 },
    { name: 'Boróka metál', price: 200000 },
    { name: 'Érzéki vörös', price: 300000 },
];

const grSportColors = [
    { name: 'GR SPORT Krómezüst/Fekete tető', price: 0 },
    { name: 'GR SPORT Higanyszürke/Fekete tető', price: 0 },
    { name: 'GR SPORT Passion/Fekete tető', price: 0 },
    { name: 'GR SPORT Fehér/Fekete tető', price: 0 },
    { name: 'GR SPORT Pure/Fekete tető', price: 0 },
    { name: 'GR SPORT Prémium ezüst/Fekete tető', price: 0 },
    { name: 'GR SPORT Szürke metál/Fekete tető', price: 0 },
    { name: 'GR SPORT Boróka metál/Fekete tető', price: 0 },
    { name: 'Racing green/Fekete tető', price: 0 },
]

const activeVariant: CarVariant = {
  variantName: 'Active',
  engineVariants: [
    createEngineVariant(
      '1.8 l Hybrid 140',
      EngineType.FULL_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      13040000,
      {
        horsepower: 140,
        engineDisplacement: 1798,
        consumption: 4.5,
        acceleration0to100: 9.1,
        topSpeed: 180,
        cargoVolumeSeatsUp: 596,
        fuelTankCapacity: 43,
        range: 956,
        speakerCount: 6,
      },
      12040000
    ),
  ],
  features: {
    ...createDefaultFeatures(),
    safety: {
        ...createDefaultFeatures().safety,
        laneKeepAssist: true,
        cruiseControl: true,
        isofix: true,
    },
    parkingAssistance: {
        ...createDefaultFeatures().parkingAssistance,
    },
    convenience: {
        ...createDefaultFeatures().convenience,
        frontPowerWindows: true,
        rearPowerWindows: true,
    },
    entertainment: {
        ...createDefaultFeatures().entertainment,
        wiredCarPlayAndroidAuto: true,
    },
    interiorExterior: {
        ...createDefaultFeatures().interiorExterior,
        roofRails: true,
    }
  },
  customColorPrices: colors,
  packages: [],
  leatherSeatPackages: []
};

const comfortVariant: CarVariant = {
    variantName: 'Comfort',
    engineVariants: [
      createEngineVariant(
        '1.8 l Hybrid 140',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        13210000,
        {
          horsepower: 140,
          engineDisplacement: 1798,
          consumption: 4.5,
          acceleration0to100: 9.1,
          topSpeed: 180,
          cargoVolumeSeatsUp: 596,
          fuelTankCapacity: 43,
          range: 956,
          speakerCount: 6,
        },
        12210000
      ),
      createEngineVariant(
        '2.0 l Hybrid 196',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        14005000,
        {
          horsepower: 196,
          engineDisplacement: 1987,
          consumption: 4.5,
          acceleration0to100: 7.4,
          topSpeed: 180,
          cargoVolumeSeatsUp: 581,
          fuelTankCapacity: 43,
          range: 956,
          speakerCount: 6,
        },
        13005000
      ),
    ],
    features: {
      ...activeVariant.features,
      convenience: {
          ...activeVariant.features.convenience,
          dualZoneAC: true,
      },
      entertainment: {
          ...activeVariant.features.entertainment,
          wirelessCarPlayAndroidAuto: true,
      }
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };

  const comfortTechVariant: CarVariant = {
    variantName: 'Comfort Tech',
    engineVariants: [
      createEngineVariant(
        '1.8 l Hybrid 140',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        13955000,
        {
          horsepower: 140,
          engineDisplacement: 1798,
          consumption: 4.5,
          acceleration0to100: 9.1,
          topSpeed: 180,
          cargoVolumeSeatsUp: 596,
          fuelTankCapacity: 43,
          range: 956,
          speakerCount: 6,
        },
        12955000
      ),
      createEngineVariant(
        '2.0 l Hybrid 196',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        14750000,
        {
          horsepower: 196,
          engineDisplacement: 1987,
          consumption: 4.5,
          acceleration0to100: 7.4,
          topSpeed: 180,
          cargoVolumeSeatsUp: 581,
          fuelTankCapacity: 43,
          range: 956,
          speakerCount: 6,
        },
        13750000
      ),
    ],
    features: {
      ...comfortVariant.features,
      parkingAssistance: {
          ...comfortVariant.features.parkingAssistance,
          frontParkingSensor: true,
          rearParkingSensor: true,
      },
      convenience: {
            ...comfortVariant.features.convenience,
            keylessStart: true,
            heatedFrontSeats: true,
            wirelessPhoneCharger: true,
      }
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };

  const comfortStyleVariant: CarVariant = {
    variantName: 'Comfort Style',
    engineVariants: [
      createEngineVariant(
        '1.8 l Hybrid 140',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        14745000,
        {
          horsepower: 140,
          engineDisplacement: 1798,
          consumption: 4.5,
          acceleration0to100: 9.1,
          topSpeed: 180,
          cargoVolumeSeatsUp: 596,
          fuelTankCapacity: 43,
          range: 956,
          speakerCount: 6,
        },
        13745000
      ),
      createEngineVariant(
        '2.0 l Hybrid 196',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        15540000,
        {
          horsepower: 196,
          engineDisplacement: 1987,
          consumption: 4.5,
          acceleration0to100: 7.4,
          topSpeed: 180,
          cargoVolumeSeatsUp: 581,
          fuelTankCapacity: 43,
          range: 956,
          speakerCount: 6,
        },
        14540000
      ),
    ],
    features: {
      ...comfortTechVariant.features,
      convenience: {
          ...comfortTechVariant.features.convenience,
          powerTailgate: true,
      },
      interiorExterior: {
          ...comfortTechVariant.features.interiorExterior,
          tintedRearWindows: true,
      }
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };

  const grSportVariant: CarVariant = {
    variantName: 'GR Sport',
    engineVariants: [
      createEngineVariant(
        '1.8 l Hybrid 140',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        15355000,
        {
          horsepower: 140,
          engineDisplacement: 1798,
          consumption: 4.5,
          acceleration0to100: 9.1,
          topSpeed: 180,
          cargoVolumeSeatsUp: 596,
          fuelTankCapacity: 43,
          range: 956,
          speakerCount: 6,
        },
        14355000
      ),
      createEngineVariant(
        '2.0 l Hybrid 196',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        16150000,
        {
          horsepower: 196,
          engineDisplacement: 1987,
          consumption: 4.5,
          acceleration0to100: 7.4,
          topSpeed: 180,
          cargoVolumeSeatsUp: 581,
          fuelTankCapacity: 43,
          range: 956,
          speakerCount: 6,
        },
        15150000
      ),
    ],
    features: {
      ...comfortStyleVariant.features,
    },
    customColorPrices: grSportColors,
    packages: [],
    leatherSeatPackages: []
  };

  const grSportDynamicVariant: CarVariant = {
    variantName: 'GR Sport Dynamic',
    engineVariants: [
      createEngineVariant(
        '1.8 l Hybrid 140',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        15560000,
        {
          horsepower: 140,
          engineDisplacement: 1798,
          consumption: 4.5,
          acceleration0to100: 9.1,
          topSpeed: 180,
          cargoVolumeSeatsUp: 596,
          fuelTankCapacity: 43,
          range: 956,
          speakerCount: 6,
        },
        14560000
      ),
      createEngineVariant(
        '2.0 l Hybrid 196',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        16355000,
        {
          horsepower: 196,
          engineDisplacement: 1987,
          consumption: 4.5,
          acceleration0to100: 7.4,
          topSpeed: 180,
          cargoVolumeSeatsUp: 581,
          fuelTankCapacity: 43,
          range: 956,
          speakerCount: 6,
        },
        15355000
      ),
    ],
    features: {
      ...grSportVariant.features,
      safety: {
          ...grSportVariant.features.safety,
          blindSpotCollisionAvoidanceAssist: true,
      }
    },
    customColorPrices: grSportColors,
    packages: [],
    leatherSeatPackages: []
  };

  const grSportDynamicJblVariant: CarVariant = {
    variantName: 'GR Sport Dynamic JBL',
    engineVariants: [
      createEngineVariant(
        '1.8 l Hybrid 140',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        16045000,
        {
          horsepower: 140,
          engineDisplacement: 1798,
          consumption: 4.5,
          acceleration0to100: 9.1,
          topSpeed: 180,
          cargoVolumeSeatsUp: 596,
          fuelTankCapacity: 43,
          range: 956,
          speakerCount: 8,
        },
        15045000
      ),
      createEngineVariant(
        '2.0 l Hybrid 196',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        16840000,
        {
          horsepower: 196,
          engineDisplacement: 1987,
          consumption: 4.5,
          acceleration0to100: 7.4,
          topSpeed: 180,
          cargoVolumeSeatsUp: 581,
          fuelTankCapacity: 43,
          range: 956,
          speakerCount: 8,
        },
        15840000
      ),
    ],
    features: {
      ...grSportDynamicVariant.features,
      convenience: {
          ...grSportDynamicVariant.features.convenience,
          headUpDisplay: true,
      },
      entertainment: {
          ...grSportDynamicVariant.features.entertainment,
          premiumSpeaker: true,
      }
    },
    customColorPrices: grSportColors,
    packages: [],
    leatherSeatPackages: []
  };

  const executiveJblVariant: CarVariant = {
    variantName: 'Executive JBL',
    engineVariants: [
      createEngineVariant(
        '1.8 l Hybrid 140',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        16405000,
        {
          horsepower: 140,
          engineDisplacement: 1798,
          consumption: 4.5,
          acceleration0to100: 9.1,
          topSpeed: 180,
          cargoVolumeSeatsUp: 596,
          fuelTankCapacity: 43,
          range: 956,
          speakerCount: 8,
        },
        15405000
      ),
      createEngineVariant(
        '2.0 l Hybrid 196',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        17200000,
        {
          horsepower: 196,
          engineDisplacement: 1987,
          consumption: 4.5,
          acceleration0to100: 7.4,
          topSpeed: 180,
          cargoVolumeSeatsUp: 581,
          fuelTankCapacity: 43,
          range: 956,
          speakerCount: 8,
        },
        16200000
      ),
    ],
    features: {
      ...grSportDynamicJblVariant.features,
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };


const modelName = createCarModel(
  'Toyota',
  'Corolla Touring Sports',
  DiscountTarget.PRIVATE,
  [
    activeVariant,
    comfortVariant,
    comfortTechVariant,
    comfortStyleVariant,
    grSportVariant,
    grSportDynamicVariant,
    grSportDynamicJblVariant,
    executiveJblVariant
  ]
);

export default modelName;
