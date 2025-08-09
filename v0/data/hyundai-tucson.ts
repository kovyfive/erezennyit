import {
  CarModel,
  EngineType,
  TransmissionType,
  DiscountTarget,
  CarVariant,
  MISSING,
  NOT_INCLUDED,
} from '../model/model';
import {
  createEngineVariant,
  createCarModel,
} from '../model/model-helpers';

const colors = [
  { name: 'Atlas White', price: 100000 },
  { name: 'Metál / Gyöngyház', price: 250000 },
  { name: 'Fényes fekete tető', price: 300000 },
];

const comfortVariant: CarVariant = {
  variantName: 'Comfort',
  engineVariants: [
    createEngineVariant(
      '1.6 T-GDi',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      12499000,
      {
        horsepower: 150,
        speakerCount: 6,
        engineDisplacement: 1598,
        consumption: 6.7,
        acceleration0to100: 10.3,
        topSpeed: 189,
        fuelTankCapacity: 54,
        cargoVolumeSeatsUp: 620,
        range: 806,
      },
      9999000
    ),
    createEngineVariant(
      '1.6 T-GDi',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      13499000,
      {
        horsepower: 150,
        speakerCount: 6,
        engineDisplacement: 1598,
        consumption: 6.7,
        acceleration0to100: 10.3,
        topSpeed: 189,
        fuelTankCapacity: 54,
        cargoVolumeSeatsUp: 620,
        range: 806,
      },
      10999000
    ),
  ],
  features: {
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: false,
      smartCruiseControlWithStopAndGo: false,
      blindSpotCollisionAvoidanceAssist: false,
      isofix: true,
    },
    parkingAssistance: {
      reversingRadar: true,
      frontParkingSensor: true,
      rearParkingSensor: NOT_INCLUDED,
      parkingCameras: true,
      parkingCameras360View: false,
      semiOrFullAutomaticParkingAssistant: false,
      electricParkingBrake: true,
    },
    convenience: {
      keylessStart: true,
      wirelessPhoneCharger: false,
      powerTailgate: false,
      powerTailgateWithFootSensor: false,
      frontPowerWindows: true,
      rearPowerWindows: true,
      heatedFrontSeats: true,
      heatedRearSeats: false,
      dualZoneAC: false,
      rainSensingWipers: false,
      headUpDisplay: false,
    },
    entertainment: {
      premiumSpeaker: false,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: true,
    },
    interiorExterior: {
      spareTire: NOT_INCLUDED,
      metalPedals: false,
      paddleShifters: true,
      velourFloorMats: false,
      rubberMats: false,
      tintedRearWindows: false,
      roofRails: false,
      slidingCenterConsole: false,
      leatherSeats: false,
    },
  },
  customColorPrices: colors,
  packages: [],
  leatherSeatPackages: [],
};

const midnightVariant: CarVariant = {
  variantName: 'Midnight',
  engineVariants: [
    createEngineVariant(
      '1.6 T-GDi',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      12999000,
      {
        horsepower: 150,
        speakerCount: 6,
        engineDisplacement: 1598,
        consumption: 6.7,
        acceleration0to100: 10.3,
        topSpeed: 189,
        fuelTankCapacity: 54,
        cargoVolumeSeatsUp: 620,
        range: 806,
      },
      10999000
    ),
    createEngineVariant(
      '1.6 T-GDi',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      13999000,
      {
        horsepower: 150,
        speakerCount: 6,
        engineDisplacement: 1598,
        consumption: 6.7,
        acceleration0to100: 10.3,
        topSpeed: 189,
        fuelTankCapacity: 54,
        cargoVolumeSeatsUp: 620,
        range: 806,
      },
      11999000
    ),
    createEngineVariant(
      '1.6 CRDI MHEV',
      EngineType.MILD_HYBRID,
      TransmissionType.AUTOMATIC,
      15199000,
      {
        horsepower: 136,
        speakerCount: 6,
        engineDisplacement: 1598,
        consumption: 5.6,
        acceleration0to100: 11.6,
        topSpeed: 180,
        fuelTankCapacity: 54,
        cargoVolumeSeatsUp: 546,
        range: 964,
      },
      13199000
    ),
  ],
  features: {
    ...comfortVariant.features,
    safety: {
      ...comfortVariant.features.safety,
      blindSpotCollisionAvoidanceAssist: true,
    },
    parkingAssistance: {
      ...comfortVariant.features.parkingAssistance,
      parkingCameras: true,
    },
    convenience: {
      ...comfortVariant.features.convenience,
      wirelessPhoneCharger: true,
      dualZoneAC: true,
      rainSensingWipers: true,
    },
    interiorExterior: {
      ...comfortVariant.features.interiorExterior,
      tintedRearWindows: true,
      roofRails: true,
    },
  },
  customColorPrices: colors,
  packages: [],
  leatherSeatPackages: [],
};

const premiumVariant: CarVariant = {
  variantName: 'Premium',
  engineVariants: [
    createEngineVariant(
      '1.6 T-GDi',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      14799000,
      {
        horsepower: 150,
        speakerCount: 6,
        engineDisplacement: 1598,
        consumption: 6.7,
        acceleration0to100: 10.3,
        topSpeed: 189,
        fuelTankCapacity: 54,
        cargoVolumeSeatsUp: 620,
        range: 806,
      },
      12799000
    ),
    createEngineVariant(
      '1.6 T-GDi',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      15799000,
      {
        horsepower: 150,
        speakerCount: 6,
        engineDisplacement: 1598,
        consumption: 6.7,
        acceleration0to100: 10.3,
        topSpeed: 189,
        fuelTankCapacity: 54,
        cargoVolumeSeatsUp: 620,
        range: 806,
      },
      13799000
    ),
    createEngineVariant(
      '1.6 CRDI MHEV',
      EngineType.MILD_HYBRID,
      TransmissionType.AUTOMATIC,
      16999000,
      {
        horsepower: 136,
        speakerCount: 6,
        engineDisplacement: 1598,
        consumption: 5.6,
        acceleration0to100: 11.6,
        topSpeed: 180,
        fuelTankCapacity: 54,
        cargoVolumeSeatsUp: 546,
        range: 964,
      },
      14999000
    ),
  ],
  features: {
    ...midnightVariant.features,
    safety: {
      ...midnightVariant.features.safety,
      smartCruiseControlWithStopAndGo: true,
    },
    parkingAssistance: {
      ...midnightVariant.features.parkingAssistance,
      parkingCameras360View: true,
    },
    convenience: {
      ...midnightVariant.features.convenience,
      powerTailgate: true,
      powerTailgateWithFootSensor: true,
      heatedRearSeats: true,
    },
    entertainment: {
      ...midnightVariant.features.entertainment,
      premiumSpeaker: true,
    },
    interiorExterior: {
      ...midnightVariant.features.interiorExterior,
      metalPedals: 'N-Line Premium',
      leatherSeats: 'N-Line Premium',
    },
  },
  customColorPrices: colors,
  packages: [{ name: 'N-Line Premium', price: 800000 }],
  leatherSeatPackages: [],
};

const executiveVariant: CarVariant = {
  variantName: 'Executive',
  engineVariants: [
    createEngineVariant(
      '1.6 T-GDi',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      15299000,
      {
        horsepower: 150,
        speakerCount: 8,
        engineDisplacement: 1598,
        consumption: 6.7,
        acceleration0to100: 10.3,
        topSpeed: 189,
        fuelTankCapacity: 54,
        cargoVolumeSeatsUp: 620,
        range: 806,
      },
      13799000
    ),
    createEngineVariant(
      '1.6 T-GDi',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      16299000,
      {
        horsepower: 150,
        speakerCount: 8,
        engineDisplacement: 1598,
        consumption: 6.7,
        acceleration0to100: 10.3,
        topSpeed: 189,
        fuelTankCapacity: 54,
        cargoVolumeSeatsUp: 620,
        range: 806,
      },
      14799000
    ),
    createEngineVariant(
      '1.6 CRDI MHEV',
      EngineType.MILD_HYBRID,
      TransmissionType.AUTOMATIC,
      17499000,
      {
        horsepower: 136,
        speakerCount: 8,
        engineDisplacement: 1598,
        consumption: 5.6,
        acceleration0to100: 11.6,
        topSpeed: 180,
        fuelTankCapacity: 54,
        cargoVolumeSeatsUp: 546,
        range: 964,
      },
      15999000
    ),
  ],
  features: {
    ...premiumVariant.features,
    parkingAssistance: {
      ...premiumVariant.features.parkingAssistance,
      semiOrFullAutomaticParkingAssistant: 'SmartPark',
    },
    convenience: {
      ...premiumVariant.features.convenience,
      headUpDisplay: true,
    },
    entertainment: {
      ...premiumVariant.features.entertainment,
      premiumSpeaker: true,
    },
    interiorExterior: {
      ...premiumVariant.features.interiorExterior,
      metalPedals: 'N-Line Executive',
      leatherSeats: 'N-Line Executive',
    },
  },
  customColorPrices: colors,
  packages: [
    { name: 'N-Line Executive', price: 700000 },
    { name: 'SmartPark', price: 350000 },
  ],
  leatherSeatPackages: [],
};

const modelName = createCarModel(
  'Hyundai',
  'Tucson',
  DiscountTarget.BOTH,
  [comfortVariant, midnightVariant, premiumVariant, executiveVariant]
);

export default modelName;
