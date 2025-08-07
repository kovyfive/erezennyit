
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant, MISSING, NOT_AVAILABLE, Features } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
    { name: 'Fehér', price: 100000 },
    { name: 'Metál', price: 175000 },
];

const commonPackages = [
    { name: 'SCC', price: 150000 },
    { name: 'Biztonság', price: 200000 },
    { name: 'Wireless Phone Charger', price: 50000 },
    { name: 'Kényelmi', price: 125000 },
    { name: 'Prime Plus', price: 300000 },
];

const trendVariant: Features = {
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: true,
      smartCruiseControlWithStopAndGo: false,
      blindSpotCollisionAvoidanceAssist: false,
      isofix: true,
    },
    parkingAssistance: {
      reversingRadar: true,
      frontParkingSensor: true,
      rearParkingSensor: NOT_AVAILABLE,
      parkingCameras: true,
      parkingCameras360View: NOT_AVAILABLE,
      semiOrFullAutomaticParkingAssistant: NOT_AVAILABLE,
      electricParkingBrake: false,
    },
    convenience: {
      keylessStart: false,
      wirelessPhoneCharger: false,
      powerTailgate: NOT_AVAILABLE,
      powerTailgateWithFootSensor: NOT_AVAILABLE,
      frontPowerWindows: true,
      rearPowerWindows: "Kényelmi",
      heatedFrontSeats: true,
      heatedRearSeats: false,
      dualZoneAC: false,
      headUpDisplay: NOT_AVAILABLE,
    },
    entertainment: {
      premiumSpeaker: NOT_AVAILABLE,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: NOT_AVAILABLE,
    },
    interiorExterior: {
      spareTire: NOT_AVAILABLE,
      metalPedals: false,
      paddleShifters: NOT_AVAILABLE,
      velourFloorMats: NOT_AVAILABLE,
      rubberMats: NOT_AVAILABLE,
      tintedRearWindows: false,
      roofRails: NOT_AVAILABLE,
      slidingCenterConsole: false,
      leatherSeats: false,
    }
  };

const primeVariant: Features = {
    ...trendVariant,
    safety: {
      ...trendVariant.safety,
      smartCruiseControlWithStopAndGo: 'SCC',
      blindSpotCollisionAvoidanceAssist: 'Biztonság',
    },
    parkingAssistance: {
      ...trendVariant.parkingAssistance,
      electricParkingBrake: true,      
    },
    convenience: {
      ...trendVariant.convenience,
      wirelessPhoneCharger: "Wireless Phone Charger",
      dualZoneAC: true,
      rearPowerWindows: true,
      keylessStart: 'Prime Plus',
           
    },
    interiorExterior: {
      ...trendVariant.interiorExterior,
      slidingCenterConsole: true,
      tintedRearWindows: 'Prime Plus',
      leatherSeats: 'Prime'
    }
};

const nLineVariant: Features = {
    ...primeVariant,
    convenience: {
      ...primeVariant.convenience,
      keylessStart: true,
    },
    interiorExterior: {
      ...primeVariant.interiorExterior,
      metalPedals: true,
      tintedRearWindows: true,
      leatherSeats: 'N-Line',
    }
};

const trendKombiVariant: CarVariant = {
    variantName: 'Trend Kombi',
    engineVariants: [
      createEngineVariant(
        '1.5 DPi',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        9099000,
        {
          horsepower: 96,
          engineDisplacement: 1498,
          consumption: 6.2,
          acceleration0to100: 12.6,
          topSpeed: 187,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 806,
          speakerCount: 4,
        },
        8799000
      ),
      createEngineVariant(
        '1.0 T-GDi',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        9249000,
        {
          horsepower: 100,
          engineDisplacement: 998,
          consumption: 5.4,
          acceleration0to100: 12.4,
          topSpeed: 188,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 926,
          speakerCount: 4,
        },
        8949000
      ),
      createEngineVariant(
        '1.0 T-GDI DCT',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        9849000,
        {
          horsepower: 100,
          engineDisplacement: 998,
          consumption: 5.5,
          acceleration0to100: 12.6,
          topSpeed: 188,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 909,
          speakerCount: 4,
        },
        9549000
      ),
      createEngineVariant(
        '1.5 T-GDI MHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.MANUAL,
        9999000,
        {
          horsepower: 140,
          engineDisplacement: 1482,
          consumption: 5.6,
          acceleration0to100: 9.7,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 893,
          speakerCount: 4,
        },
        9699000
      ),
      createEngineVariant(
        '1.5 T-GDI MHEV DCT',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        10599000,
        {
          horsepower: 140,
          engineDisplacement: 1482,
          consumption: 5.7,
          acceleration0to100: 9.8,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 877,
          speakerCount: 4,
        },
        10299000
      ),
    ],
    features: trendVariant,
    customColorPrices: colors,
    packages: commonPackages,
    leatherSeatPackages: []
  };

const primeKombiVariant: CarVariant = {
    variantName: 'Prime Kombi',
    engineVariants: [
      createEngineVariant(
        '1.5 DPi',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        10199000,
        {
          horsepower: 96,
          engineDisplacement: 1498,
          consumption: 6.2,
          acceleration0to100: 12.6,
          topSpeed: 187,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 806,
          speakerCount: 6,
        },
        9599000
      ),
      createEngineVariant(
        '1.0 T-GDi',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        10349000,
        {
          horsepower: 100,
          engineDisplacement: 998,
          consumption: 5.4,
          acceleration0to100: 12.4,
          topSpeed: 188,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 926,
          speakerCount: 6,
        },
        9749000
      ),
      createEngineVariant(
        '1.0 T-GDI DCT',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        10949000,
        {
          horsepower: 100,
          engineDisplacement: 998,
          consumption: 5.5,
          acceleration0to100: 12.6,
          topSpeed: 188,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 909,
          speakerCount: 6,
        },
        10349000
      ),
      createEngineVariant(
        '1.5 T-GDI MHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.MANUAL,
        11099000,
        {
          horsepower: 140,
          engineDisplacement: 1482,
          consumption: 5.6,
          acceleration0to100: 9.7,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 893,
          speakerCount: 6,
        },
        10499000
      ),
      createEngineVariant(
        '1.5 T-GDI MHEV DCT',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        11699000,
        {
          horsepower: 140,
          engineDisplacement: 1482,
          consumption: 5.7,
          acceleration0to100: 9.8,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 877,
          speakerCount: 6,
        },
        11099000
      ),
    ],
    features: primeVariant,
    customColorPrices: colors,
    packages: commonPackages,
    leatherSeatPackages: [{ name: 'Prime', price: 600000 }]
  };

const primeFastBackVariant: CarVariant = {
    variantName: 'Prime Fastback',
    engineVariants: [
      createEngineVariant(
        '1.0 T-GDi',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        10249000,
        {
          horsepower: 120,
          engineDisplacement: 998,
          consumption: 5.2,
          acceleration0to100: 11.5,
          topSpeed: 188,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 450,
          range: 961,
          speakerCount: 6,
        },
        9449000
      ),
      createEngineVariant(
        '1.0 T-GDI DCT',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        10849000,
        {
          horsepower: 120,
          engineDisplacement: 998,
          consumption: 5.2,
          acceleration0to100: 11.2,
          topSpeed: 196,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 450,
          range: 961,
          speakerCount: 6,
        },
        10049000
      ),
      createEngineVariant(
        '1.5 T-GDI MHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.MANUAL,
        10999000,
        {
          horsepower: 160,
          engineDisplacement: 1482,
          consumption: 5.5,
          acceleration0to100: 8.4,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 450,
          range: 909,
          speakerCount: 6,
        },
        10199000
      ),
      createEngineVariant(
        '1.5 T-GDI MHEV DCT',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        11599000,
        {
          horsepower: 160,
          engineDisplacement: 1482,
          consumption: 6.3,
          acceleration0to100: 8.2,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 450,
          range: 793,
          speakerCount: 6,
        },
        10799000
      ),
    ],
    features: primeVariant,
    customColorPrices: colors,
    packages: commonPackages,
    leatherSeatPackages: [{ name: 'Prime', price: 600000 }]
  };

const nLineKombiVariant: CarVariant = {
    variantName: 'N-Line Kombi',
    engineVariants: [
      createEngineVariant(
        '1.5 T-GDI MHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.MANUAL,
        11399000,
        {
          horsepower: 140,
          engineDisplacement: 1482,
          consumption: 5.6,
          acceleration0to100: 9.7,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 893,
          speakerCount: 6,
        },
        10799000
      ),
      createEngineVariant(
        '1.5 T-GDI MHEV DCT',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        11999000,
        {
          horsepower: 140,
          engineDisplacement: 1482,
          consumption: 5.7,
          acceleration0to100: 9.8,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 877,
          speakerCount: 6,
        },
        11399000
      ),
    ],
    features: nLineVariant,
    customColorPrices: colors,
    packages: commonPackages,
    leatherSeatPackages: [{ name: 'N-Line', price: 550000 }]
  };

const nLineFastBackVariant: CarVariant = {
    variantName: 'N-Line Fastback',
    engineVariants: [
      createEngineVariant(
        '1.5 T-GDI MHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.MANUAL,
        11299000,
        {
          horsepower: 160,
          engineDisplacement: 1482,
          consumption: 5.5,
          acceleration0to100: 8.4,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 450,
          range: 909,
          speakerCount: 6,
        },
        10699000
      ),
      createEngineVariant(
        '1.5 T-GDI MHEV DCT',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        11899000,
        {
          horsepower: 160,
          engineDisplacement: 1482,
          consumption: 6.3,
          acceleration0to100: 8.2,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 450,
          range: 793,
          speakerCount: 6,
        },
        11299000
      ),
    ],
    features: nLineVariant,
    customColorPrices: colors,
    packages: commonPackages,
    leatherSeatPackages: [{ name: 'N-Line', price: 550000 }]
  };


const modelName = createCarModel(
  'Hyundai',
  'i30',
  DiscountTarget.NONE,
  [
    trendKombiVariant,
    primeKombiVariant,
    primeFastBackVariant,
    nLineKombiVariant,
    nLineFastBackVariant,
  ]
);

export default modelName;
