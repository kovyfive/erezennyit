import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant, MISSING, NOT_INCLUDED } from '../model/model';
import { createCarModel, createEngineVariant } from '../model/model-helpers';

const colors = [
  { name: 'Hófehér', price: 0 },
  { name: 'Hamuszürke', price: 200000 },
  { name: 'Sötét zöldeskék', price: 200000 },
  { name: 'Éjfekete', price: 200000 },
  { name: 'Prémium ezüst', price: 200000 },
  { name: 'Platina gyöngyfehér', price: 300000 },
];

const biToneColors = [
  { name: 'Hófehér/fekete tető', price: 0 },
  { name: 'Platina gyöngyfehér/fekete tető', price: 0 },
  { name: 'Prémium ezüst/fekete tető', price: 0 },
  { name: 'Hamuszürke/fekete tető', price: 0 },
  { name: 'Érzéki vörös/fekete tető', price: 0 },
  { name: 'Sötét zöldeskék/fekete tető', price: 0 },
];

const commonPackages = [
  { name: 'Gumiszőnyeg', price: 35600 },
  { name: 'Tetőcsomagtartó', price: 179600 },
];

const comfortVariant: CarVariant = {
  variantName: 'Comfort',
  engineVariants: [
    createEngineVariant(
      '1.8 l Hybrid 140 LE e-CVT',
      EngineType.MILD_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      12390000,
      {
        horsepower: 140,
        engineDisplacement: 1798,
        consumption: 4.8,
        acceleration0to100: 9.9,
        topSpeed: 170,
        cargoVolumeSeatsUp: 388,
        fuelTankCapacity: 43,
        range: 895,
        speakerCount: 6,
      },
      11590000
    ),
  ],
  features: {
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: true,
      smartCruiseControlWithStopAndGo: true,
      blindSpotCollisionAvoidanceAssist: true,
      isofix: true,
      frontIsofix: NOT_INCLUDED,
    },
    parkingAssistance: {
      reversingRadar: false,
      frontParkingSensor: 'Business',
      rearParkingSensor: 'Business',
      parkingCameras: true,
      parkingCameras360View: false,
      semiOrFullAutomaticParkingAssistant: NOT_INCLUDED,
      electricParkingBrake: true,
    },
    convenience: {
      keylessStart: true,
      wirelessPhoneCharger: false,
      powerTailgate: NOT_INCLUDED,
      powerTailgateWithFootSensor: NOT_INCLUDED,
      frontPowerWindows: true,
      rearPowerWindows: true,
      powerFoldingMirrors: false,
      heatedSideMirrors: true,
      heatedFrontSeats: 'Business',
      heatedRearSeats: NOT_INCLUDED,
      dualZoneAC: true,
      rainSensingWipers: false,
      headUpDisplay: false,
    },
    entertainment: {
      premiumSpeaker: false,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: true,
    },
    interiorExterior: {
      spareTire: 'Business',
      metalPedals: NOT_INCLUDED,
      paddleShifters: NOT_INCLUDED,
      velourFloorMats: NOT_INCLUDED,
      rubberMats: 'Gumiszőnyeg',
      tintedRearWindows: false,
      roofRails: 'Tetőcsomagtartó',
      slidingCenterConsole: NOT_INCLUDED,
      leatherSeats: false,
    }
  },
  customColorPrices: colors,
  packages: [
    { name: 'Business', price: 380000 },
    ...commonPackages,
  ],
  leatherSeatPackages: []
};

const styleVariant: CarVariant = {
  variantName: 'Style',
  engineVariants: [
    createEngineVariant(
      '1.8 l Hybrid 140 LE e-CVT',
      EngineType.MILD_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      13790000,
      {
        horsepower: 140,
        engineDisplacement: 1798,
        consumption: 4.8,
        acceleration0to100: 9.9,
        topSpeed: 170,
        cargoVolumeSeatsUp: 388,
        fuelTankCapacity: 43,
        range: 895,
        speakerCount: 6,
      },
      12990000
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
      wirelessPhoneCharger: true,
      heatedFrontSeats: true,
      rainSensingWipers: true,
      powerFoldingMirrors: true,
    },
    interiorExterior: {
      ...comfortVariant.features.interiorExterior,
      tintedRearWindows: true,
      spareTire: 'Pótkerék',
    }
  },
  customColorPrices: colors,
  packages: [
    { name: 'Pótkerék', price: 231000 },
    ...commonPackages
  ],
  leatherSeatPackages: []
};

const executiveVariant: CarVariant = {
  variantName: 'Executive',
  engineVariants: [
    createEngineVariant(
      '1.8 l Hybrid 140 LE e-CVT',
      EngineType.MILD_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      14740000,
      {
        horsepower: 140,
        engineDisplacement: 1798,
        consumption: 4.8,
        acceleration0to100: 9.9,
        topSpeed: 170,
        cargoVolumeSeatsUp: 388,
        fuelTankCapacity: 43,
        range: 895,
        speakerCount: 6,
      },
      13940000
    ),
  ],
  features: {
    ...styleVariant.features,
    parkingAssistance: {
      ...styleVariant.features.parkingAssistance,
      parkingCameras360View: 'Tech',
    },
    convenience: {
      ...styleVariant.features.convenience,
      headUpDisplay: 'VIP',
    },
    entertainment: {
      ...styleVariant.features.entertainment,
      premiumSpeaker: 'VIP',
    },
    interiorExterior: {
      ...styleVariant.features.interiorExterior,
      leatherSeats: true,
    }
  },
  customColorPrices: biToneColors,
  packages: [
    { name: 'Tech', price: 900000 },
    { name: 'VIP', price: 960000 },
    { name: 'Pótkerék', price: 231000 },
    ...commonPackages
  ],
  leatherSeatPackages: []
};


const modelName = createCarModel(
  'Toyota',
  'C-HR',
  DiscountTarget.PRIVATE,
  [
    comfortVariant,
    styleVariant,
    executiveVariant
  ]
);

export default modelName;
