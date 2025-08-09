
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant, MISSING, NOT_INCLUDED } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
  { name: 'Casa White (WD)', price: 0 },
  { name: 'Deluxe White (HW2)', price: 175000 },
  { name: 'Sparkling Silver (KCS)', price: 175000 },
  { name: 'Pearl Black (1K)', price: 175000 },
  { name: 'Lunar Silver (CSS)', price: 175000 },
  { name: 'Penta Metal (H8G)', price: 175000 },
  { name: 'Infra Red (AA9)', price: 245000 },
  { name: 'Blue Flame (B3L)', price: 245000 },
  { name: 'Orange Fusion (RNG)', price: 245000 },
  { name: 'Experience Green (EXG)', price: 245000 },
  { name: 'Wolf Grey (WAF)', price: 245000 },
];

const mt = {
  horsepower: 160,
  engineDisplacement: 1598,
  consumption: 7.1,
  acceleration0to100: 9.9,
  topSpeed: 194,
  fuelTankCapacity: 52,
  cargoVolumeSeatsUp: 562,
  range: 732,
  speakerCount: 6,
};

const dct = {
  horsepower: 160,
  engineDisplacement: 1598,
  consumption: 6.9,
  acceleration0to100: 9.4,
  topSpeed: 192,
  fuelTankCapacity: 52,
  cargoVolumeSeatsUp: 562,
  range: 753,
  speakerCount: 6,
};

const essenceVariant: CarVariant = {
  variantName: 'Essence',
  engineVariants: [
    createEngineVariant(
      '160 T-GDI MT Benzin',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      10749000,
      mt,
    ),
    createEngineVariant(
      '160 T-GDI DCT Benzin',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      11249000,
      dct,
    )
  ],
  features: {
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: false,
      smartCruiseControlWithStopAndGo: false,
      blindSpotCollisionAvoidanceAssist: false,
      isofix: true,
      frontIsofix: NOT_INCLUDED,
    },
    parkingAssistance: {
      reversingRadar: true,
      frontParkingSensor: true,
      rearParkingSensor: NOT_INCLUDED,
      parkingCameras: true,
      parkingCameras360View: false,
      semiOrFullAutomaticParkingAssistant: NOT_INCLUDED,
      electricParkingBrake: true,
    },
    convenience: {
      keylessStart: false,
      wirelessPhoneCharger: false,
      powerTailgate: false,
      powerTailgateWithFootSensor: NOT_INCLUDED,
      frontPowerWindows: true,
      rearPowerWindows: true,
      powerFoldingMirrors: true,
      heatedSideMirrors: true,
      heatedFrontSeats: true,
      heatedRearSeats: false,
      dualZoneAC: true,
      rainSensingWipers: true,
      headUpDisplay: NOT_INCLUDED,
    },
    entertainment: {
      premiumSpeaker: false,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: NOT_INCLUDED,
    },
    interiorExterior: {
      spareTire: true,
      metalPedals: NOT_INCLUDED,
      paddleShifters: NOT_INCLUDED,
      velourFloorMats: NOT_INCLUDED,
      rubberMats: NOT_INCLUDED,
      tintedRearWindows: false,
      roofRails: NOT_INCLUDED,
      slidingCenterConsole: NOT_INCLUDED,
      leatherSeats: false,
    }
  },
  customColorPrices: colors,
  packages: [],
  leatherSeatPackages: []
};

const silverVariant: CarVariant = {
  variantName: 'Silver',
  engineVariants: [
    createEngineVariant(
      '160 T-GDI MT Benzin',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      11399000,
      mt,
      10799000
    ),
    createEngineVariant(
      '160 T-GDI DCT Benzin',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      12299000,
      dct,
      11699000
    )
  ],
  features: {
    ...essenceVariant.features,
    parkingAssistance: {
      ...essenceVariant.features.parkingAssistance,
      frontParkingSensor: 'PRO',
    },
    convenience: {
      ...essenceVariant.features.convenience,
      heatedFrontSeats: 'PRO',
    }
  },
  customColorPrices: colors,
  packages: [
    { name: 'PRO', price: 200000 },
    { name: 'SCC', price: 200000 },
  ],
  leatherSeatPackages: []
};

const goldVariant: CarVariant = {
  variantName: 'Gold',
  engineVariants: [
    createEngineVariant(
      '160 T-GDI MT Benzin',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      12149000,
      mt,
      11549000
    ),
    createEngineVariant(
      '160 T-GDI DCT Benzin',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      13149000,
      dct,
      12549000
    )
  ],
  features: {
    ...silverVariant.features,
    safety: {
      ...silverVariant.features.safety,
      smartCruiseControl: true,
      smartCruiseControlWithStopAndGo: true,
    },
    convenience: {
      ...silverVariant.features.convenience,
      keylessStart: true,
      heatedFrontSeats: true,
      heatedRearSeats: true,
    },
    interiorExterior: {
      ...silverVariant.features.interiorExterior,
      tintedRearWindows: true,
    }
  },
  customColorPrices: colors,
  packages: [
    { name: 'PRO', price: 200000 },
    { name: 'SCC', price: 200000 },
  ],
  leatherSeatPackages: []
};

const gold30Variant: CarVariant = {
  variantName: 'Gold30',
  engineVariants: [
    createEngineVariant(
      '160 T-GDI MT Benzin',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      12799000,
      mt,
      12199000
    ),
    createEngineVariant(
      '160 T-GDI DCT Benzin',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      13799000,
      dct,
      13199000
    )
  ],
  features: {
    ...goldVariant.features,
    parkingAssistance: {
      ...goldVariant.features.parkingAssistance,
      frontParkingSensor: true,
    }
  },
  customColorPrices: colors,
  packages: [],
  leatherSeatPackages: []
};

const platinumVariant: CarVariant = {
  variantName: 'Platinum',
  engineVariants: [
    createEngineVariant(
      '160 T-GDI MT Benzin',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      12799000,
      mt,
      12199000
    ),
    createEngineVariant(
      '160 T-GDI DCT Benzin',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      13899000,
      dct,
      13299000
    )
  ],
  features: {
    ...goldVariant.features,
    safety: {
      ...goldVariant.features.safety,
      blindSpotCollisionAvoidanceAssist: true,
    },
    parkingAssistance: {
      ...goldVariant.features.parkingAssistance,
      parkingCameras360View: "Drive Wise",
    },
    convenience: {
      ...goldVariant.features.convenience,
      wirelessPhoneCharger: true,
      powerTailgate: 'Exclusive',
    },
    entertainment: {
      ...goldVariant.features.entertainment,
      premiumSpeaker: 'Exclusive',
    },
    interiorExterior: {
      ...goldVariant.features.interiorExterior,
      leatherSeats: 'BŐR',
    }
  },
  customColorPrices: colors,
  packages: [
    { name: 'Drive Wise', price: 200000 },
    { name: 'Exclusive', price: 450000 },
    { name: 'PRO', price: 200000 },
    { name: 'SCC', price: 200000 },
  ],
  leatherSeatPackages: [
    { name: 'BŐR', price: 500000 }
  ]
};

const modelName = createCarModel(
  'Kia',
  'Sportage',
  DiscountTarget.PRIVATE,
  [
    essenceVariant,
    silverVariant,
    goldVariant,
    gold30Variant,
    platinumVariant,
  ]
);

export default modelName;
