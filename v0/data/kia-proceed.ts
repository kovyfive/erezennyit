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
  createDefaultFeatures,
  createCarModel,
} from '../model/model-helpers';

const commonPackages = [
  { name: 'AUTOMATIC', price: 700000 },
  { name: 'ADA CSOMAG', price: 200000 },
  { name: 'BŐR CSOMAG 1', price: 500000 },
  { name: 'BŐR CSOMAG 2', price: 500000 },
  { name: 'NAPFÉNYTETŐ', price: 300000 },
];

const colors = [
  { name: 'Cassa White (WD)', price: 0 },
  { name: 'Deluxe White (HW2)', price: 175000 },
  { name: 'Lunar Silver (CSS)', price: 175000 },
  { name: 'Penta Metal (H8G)', price: 175000 },
  { name: 'Black Pearl (1K)', price: 175000 },
  { name: 'Infra Red (AA9)', price: 175000 },
  { name: 'Experience Green (EXP)', price: 175000 },
  { name: 'Blue Flame (B3L)', price: 175000 },
  { name: 'Orange Fusion (RNG)', price: 175000 },
];

const ultimateEditionVariant: CarVariant = {
  variantName: 'ULTIMATE EDITION',
  engineVariants: [
    createEngineVariant(
      '140 T-GDI',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      10899000,
      {
        engineDisplacement: 1482,
        horsepower: 140,
        consumption: 6.3,
        acceleration0to100: 9.9,
        topSpeed: 193,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 594,
        range: 862,
        speakerCount: 6,
      }
    ),
  ],
  features: {
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: 'AUTOMATIC',
      smartCruiseControlWithStopAndGo: 'AUTOMATIC',
      blindSpotCollisionAvoidanceAssist: 'ADA CSOMAG',
      isofix: true,
      frontIsofix: NOT_INCLUDED,
    },
    parkingAssistance: {
      reversingRadar: true,
      frontParkingSensor: true,
      rearParkingSensor: NOT_INCLUDED,
      parkingCameras: true,
      parkingCameras360View: NOT_INCLUDED,
      semiOrFullAutomaticParkingAssistant: NOT_INCLUDED,
      electricParkingBrake: true,
    },
    convenience: {
      keylessStart: true,
      wirelessPhoneCharger: false,
      powerTailgate: false,
      powerTailgateWithFootSensor: false,
      frontPowerWindows: true,
      rearPowerWindows: true,
      powerFoldingMirrors: true,
      heatedSideMirrors: true,
      heatedFrontSeats: true,
      heatedRearSeats: true,
      dualZoneAC: true,
      rainSensingWipers: true,
      headUpDisplay: true,
    },
    entertainment: {
      premiumSpeaker: false,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: NOT_INCLUDED,
    },
    interiorExterior: {
      spareTire: true,
      metalPedals: true,
      paddleShifters: true,
      velourFloorMats: true,
      rubberMats: NOT_INCLUDED,
      tintedRearWindows: true,
      roofRails: NOT_INCLUDED,
      slidingCenterConsole: true,
      leatherSeats: "Bőr és Suede üléskárpit"
    }
  },
  customColorPrices: colors,
  packages: commonPackages,
  leatherSeatPackages: [
    { name: 'Bőr és Suede üléskárpit', price: 500000 },
    { name: 'Bőr üléskárpit ülésszellőztetéssel (elől)', price: 500000 },
  ],
};

const ultimateEditionPlusVariant: CarVariant = {
  variantName: 'ULTIMATE EDITION +',
  engineVariants: [
    createEngineVariant(
      '140 T-GDI',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      11499000,
      {
        engineDisplacement: 1482,
        horsepower: 140,
        consumption: 6.3,
        acceleration0to100: 9.9,
        topSpeed: 193,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 594,
        range: 862,
        speakerCount: 6,
      },
    ),
  ],
  features: {
    ...ultimateEditionVariant.features,
    convenience: {
      ...ultimateEditionVariant.features.convenience,
      wirelessPhoneCharger: true,
      powerTailgate: true,
      powerTailgateWithFootSensor: true,
    },
    entertainment: {
      ...ultimateEditionVariant.features.entertainment,
      premiumSpeaker: true,
    },
  },
  customColorPrices: colors,
  packages: commonPackages,
  leatherSeatPackages: [
    { name: 'Bőr és Suede üléskárpit', price: 500000 },
    { name: 'Bőr üléskárpit ülésszellőztetéssel (elől)', price: 500000 },
  ],
};

const modelName = createCarModel(
  'Kia',
  'ProCeed',
  DiscountTarget.BOTH,
  [ultimateEditionVariant, ultimateEditionPlusVariant]
);

export default modelName;
