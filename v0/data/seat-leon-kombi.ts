
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant, MISSING, NOT_INCLUDED } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
  { name: 'Fiord kék', price: 0 },
  { name: 'Desire piros metál', price: 476250 },
  { name: 'Gleccser fehér metál', price: 283210 },
  { name: 'Magnetic szürke metál', price: 283210 },
  { name: 'Midnight fekete metál', price: 283210 },
  { name: 'Zafír kék metál', price: 283210 },
  { name: 'Grafén szürke metál', price: 476250 },
];

const commonPackages = [
  { name: 'Tolatókamera', price: 129540 },
  { name: 'Connectivity box', price: 102870 },
  { name: 'Elektromos csomagtér-nyitás', price: 245110 },
  { name: 'Full link', price: 87630 },

];

const jubileumVariant: CarVariant = {
  variantName: 'Jubileum',
  engineVariants: [
    createEngineVariant(
      '1.5 TSI Jubileum',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      9198165,
      {
        horsepower: 115,
        engineDisplacement: 1498,
        consumption: 5.6,
        acceleration0to100: 10.2,
        topSpeed: 202,
        fuelTankCapacity: 45,
        cargoVolumeSeatsUp: 620,
        range: 804,
        speakerCount: 7,
      },
    ),
  ],
  features: {
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: false,
      smartCruiseControlWithStopAndGo: NOT_INCLUDED,
      blindSpotCollisionAvoidanceAssist: false,
      isofix: MISSING,
    },
    parkingAssistance: {
      reversingRadar: true,
      frontParkingSensor: true,
      rearParkingSensor: true,
      parkingCameras: 'Tolatókamera',
      parkingCameras360View: NOT_INCLUDED,
      semiOrFullAutomaticParkingAssistant: NOT_INCLUDED,
      electricParkingBrake: true,
    },
    convenience: {
      keylessStart: true,
      wirelessPhoneCharger: 'Connectivity box',
      powerTailgate: 'Elektromos csomagtér-nyitás',
      powerTailgateWithFootSensor: 'Elektromos csomagtér-nyitás',
      frontPowerWindows: true,
      rearPowerWindows: true,
      heatedFrontSeats: true,
      heatedRearSeats: NOT_INCLUDED,
      dualZoneAC: 'Komfort',
      headUpDisplay: NOT_INCLUDED,
    },
    entertainment: {
      premiumSpeaker: NOT_INCLUDED,
      wiredCarPlayAndroidAuto: 'Full link',
      wirelessCarPlayAndroidAuto: 'Full link',
    },
    interiorExterior: {
      spareTire: true,
      metalPedals: NOT_INCLUDED,
      paddleShifters: false,
      velourFloorMats: NOT_INCLUDED,
      rubberMats: NOT_INCLUDED,
      tintedRearWindows: 'Sötét üveg',
      roofRails: true,
      slidingCenterConsole: 'Komfort',
      leatherSeats: NOT_INCLUDED,
    }
  },
  customColorPrices: colors,
  packages: [
    ...commonPackages,
    { name: 'Komfort', price: 180340 },
    { name: 'Sötét üveg', price: 129540 },

  ],
  leatherSeatPackages: []
};

const styleVariant: CarVariant = {
  variantName: 'Style',
  engineVariants: [
    createEngineVariant(
      '1.5 TSI Style',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      10962195,
      {
        horsepower: 115,
        engineDisplacement: 1498,
        consumption: 5.6,
        acceleration0to100: 10.2,
        topSpeed: 202,
        fuelTankCapacity: 45,
        cargoVolumeSeatsUp: 620,
        range: 804,
        speakerCount: 7,
      },
    ),
    createEngineVariant(
      '1.5 TSI Style',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      11831150,
      {
        horsepower: 150,
        engineDisplacement: 1498,
        consumption: 5.6,
        acceleration0to100: 8.9,
        topSpeed: 221,
        fuelTankCapacity: 45,
        cargoVolumeSeatsUp: 620,
        range: 804,
        speakerCount: 7,
      },
    ),
    createEngineVariant(
      '1.5 TSI DSG Style mHEV',
      EngineType.MILD_HYBRID,
      TransmissionType.AUTOMATIC,
      12152185,
      {
        horsepower: 115,
        engineDisplacement: 1498,
        consumption: 5.2,
        acceleration0to100: 10.2,
        topSpeed: 202,
        fuelTankCapacity: 45,
        cargoVolumeSeatsUp: 620,
        range: 865,
        speakerCount: 7,
      },
    ),
    createEngineVariant(
      '1.5 TSI DSG Style mHEV',
      EngineType.MILD_HYBRID,
      TransmissionType.AUTOMATIC,
      13019870,
      {
        horsepower: 150,
        engineDisplacement: 1498,
        consumption: 5.2,
        acceleration0to100: 8.9,
        topSpeed: 221,
        fuelTankCapacity: 45,
        cargoVolumeSeatsUp: 620,
        range: 865,
        speakerCount: 7,
      },
    ),
  ],
  features: {
    ...jubileumVariant.features,
    convenience: {
      ...jubileumVariant.features.convenience,
      heatedFrontSeats: 'Téli',
    },
    interiorExterior: {
      ...jubileumVariant.features.interiorExterior,
      paddleShifters: true,
    }

  },
  customColorPrices: colors,
  packages: [
    ...commonPackages,
    { name: 'Téli', price: 196850 },
    { name: 'Komfort', price: 180340 },
    { name: 'Sötét üveg', price: 129540 },

  ],
  leatherSeatPackages: []
};

const frVariant: CarVariant = {
  variantName: 'FR',
  engineVariants: [
    createEngineVariant(
      '1.5 TSI FR',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      11833415,
      {
        horsepower: 115,
        engineDisplacement: 1498,
        consumption: 5.6,
        acceleration0to100: 10.2,
        topSpeed: 202,
        fuelTankCapacity: 45,
        cargoVolumeSeatsUp: 620,
        range: 804,
        speakerCount: 7,
      },
    ),
    createEngineVariant(
      '1.5 TSI FR',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      12702370,
      {
        horsepower: 150,
        engineDisplacement: 1498,
        consumption: 5.6,
        acceleration0to100: 8.9,
        topSpeed: 221,
        fuelTankCapacity: 45,
        cargoVolumeSeatsUp: 620,
        range: 804,
        speakerCount: 7,
      },
    ),
    createEngineVariant(
      '1.5 TSI DSG FR mHEV',
      EngineType.MILD_HYBRID,
      TransmissionType.AUTOMATIC,
      13028485,
      {
        horsepower: 115,
        engineDisplacement: 1498,
        consumption: 5.2,
        acceleration0to100: 10.2,
        topSpeed: 202,
        fuelTankCapacity: 45,
        cargoVolumeSeatsUp: 620,
        range: 865,
        speakerCount: 7,
      },
    ),
    createEngineVariant(
      '1.5 TSI DSG FR mHEV',
      EngineType.MILD_HYBRID,
      TransmissionType.AUTOMATIC,
      13896170,
      {
        horsepower: 150,
        engineDisplacement: 1498,
        consumption: 5.2,
        acceleration0to100: 8.9,
        topSpeed: 221,
        fuelTankCapacity: 45,
        cargoVolumeSeatsUp: 620,
        range: 865,
        speakerCount: 7,
      },
    )
  ],
  features: {
    ...styleVariant.features,
    safety: {
      ...styleVariant.features.safety,
      smartCruiseControl: 'Biztonság L',
      blindSpotCollisionAvoidanceAssist: 'Biztonság L'
    },
    convenience: {
      ...styleVariant.features.convenience,
      dualZoneAC: 'FR',
    },
    entertainment: {
      ...styleVariant.features.entertainment,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: true,
    },
    interiorExterior: {
      ...styleVariant.features.interiorExterior,
      tintedRearWindows: true,
      slidingCenterConsole: 'FR',
    },
  },
  customColorPrices: colors,
  packages: [
    { name: 'Biztonság L', price: 344170 },
    { name: 'Téli', price: 196850 },
    { name: 'FR', price: 3000990 },
    ...commonPackages
  ],
  leatherSeatPackages: []
};


const modelName = createCarModel(
  'Seat',
  'Leon Kombi',
  DiscountTarget.NONE,
  [
    jubileumVariant,
    styleVariant,
    frVariant
  ]
);

export default modelName;
