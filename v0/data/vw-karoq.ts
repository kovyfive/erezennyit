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
  { name: 'Infotainment plusz', price: 332740 },
  { name: 'Virtuális pedál', price: 309070 },
  { name: 'Canton', price: 187960 },
  { name: 'Szőnyeg', price: 21590 },
  { name: 'Gumi szőnyeg', price: 37279 },
  { name: 'Komfort', price: 111760 },
  { name: 'Simply Clever', price: 90170 },
  { name: 'Adaptív tempomat', price: 203200 },
  { name: 'Travel Assist Bővített', price: 445770 },
  { name: 'Technikai', price: 532130 },
  { name: 'Pótkerék', price: 69850 },

];

const colors = [
  { name: 'Alap', price: 0 },
];

const joyVariant: CarVariant = {
  variantName: 'Joy',
  engineVariants: [
    createEngineVariant(
      '1.5 TSI ACT',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      10798999,
      {
        horsepower: 150,
        speakerCount: 8,
      }
    ),
    createEngineVariant(
      '1.5 TSI DSG ACT',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      11299000,
      {
        horsepower: 150,
        speakerCount: 8,
      }
    ),
  ],
  features: {
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: 'Adaptív tempomat',
      smartCruiseControlWithStopAndGo: NOT_INCLUDED,
      blindSpotCollisionAvoidanceAssist: 'Travel Assist Bővített',
      isofix: true,
      frontIsofix: 'Simply Clever',
    },
    parkingAssistance: {
      reversingRadar: true,
      frontParkingSensor: true,
      rearParkingSensor: true,
      parkingCameras: true,
      parkingCameras360View: false,
      semiOrFullAutomaticParkingAssistant: NOT_INCLUDED,
      electricParkingBrake: true,
    },
    convenience: {
      keylessStart: true,
      wirelessPhoneCharger: 'Infotainment plusz',
      powerTailgate: 'Virtuális pedál',
      powerTailgateWithFootSensor: 'Virtuális pedál',
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
      premiumSpeaker: 'Canton',
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: true,
    },
    interiorExterior: {
      spareTire: 'Pótkerék',
      metalPedals: 'Technikai',
      paddleShifters: true,
      velourFloorMats: 'Szőnyeg',
      rubberMats: 'Gumi szőnyeg',
      tintedRearWindows: 'Komfort',
      roofRails: true,
      slidingCenterConsole: NOT_INCLUDED,
      leatherSeats: 'EcoSuite',
    }
  },
  customColorPrices: colors,
  packages: commonPackages,
  leatherSeatPackages: [
    { name: 'EcoSuite', price: 427990 },
  ],
};

const selectionVariant: CarVariant = {
  variantName: 'Selection',
  engineVariants: [
    createEngineVariant(
      '1.0 TSI',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      12117260,
      {
        horsepower: 115,
        speakerCount: 8,
      }
    ),
    createEngineVariant(
      '1.5 TSI ACT',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      12858580,
      {
        horsepower: 150,
        speakerCount: 8,
      }
    ),
    createEngineVariant(
      '1.5 TSI DSG ACT',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      13684080,
      {
        horsepower: 150,
        speakerCount: 8,
      }
    ),
  ],
  features: {
    ...joyVariant.features,
    parkingAssistance: {
      ...joyVariant.features.parkingAssistance,
      frontParkingSensor: 'Parkolás',
      rearParkingSensor: 'Parkolás',
      parkingCameras: 'Parkolás',
      parkingCameras360View: 'Parkolás Plusz',
    },
    convenience: {
      ...joyVariant.features.convenience,
      heatedFrontSeats: 'Téli',
      heatedRearSeats: 'Téli Plusz', //!
    }
  },
  customColorPrices: colors,
  packages: [
    ...commonPackages,
    { name: 'Parkolás', price: 347980 },
    { name: 'Parkolás Plusz', price: 372110 },
    { name: 'Téli', price: 134620 },
    { name: 'Téli Plusz', price: 135890 },
  ],
  leatherSeatPackages: [
    { name: 'EcoSuite', price: 427990 },
  ],
};

const modelName = createCarModel(
  'Volkswagen',
  'Karoq',
  DiscountTarget.NONE,
  [joyVariant, selectionVariant]
);

export default modelName;
