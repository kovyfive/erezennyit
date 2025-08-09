
import { tree } from 'next/dist/build/templates/app-page';
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant, NOT_INCLUDED } from '../model/model';
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
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: true,
      smartCruiseControlWithStopAndGo: true,
      blindSpotCollisionAvoidanceAssist: false,
      isofix: true,
    },
    parkingAssistance: {
      reversingRadar: false,
      frontParkingSensor: false,
      rearParkingSensor: false,
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
      heatedFrontSeats: false,
      heatedRearSeats: NOT_INCLUDED,
      dualZoneAC: true,
      headUpDisplay: false,
    },
    entertainment: {
      premiumSpeaker: false,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: true,
    },
    interiorExterior: {
      spareTire: true,
      metalPedals: NOT_INCLUDED,
      paddleShifters: false,
      velourFloorMats: NOT_INCLUDED,
      rubberMats: 'Gumiszőnyeg',
      tintedRearWindows: false,
      roofRails: true,
      slidingCenterConsole: NOT_INCLUDED,
      leatherSeats: false,
    }
  },
  customColorPrices: colors,
  packages: [
    { name: 'Gumiszőnyeg', price: 30300 },
  ],
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
    parkingAssistance: {
      ...activeVariant.features.parkingAssistance,
      frontParkingSensor: 'Tech',
      rearParkingSensor: 'Tech',
    },
    convenience: {
      ...activeVariant.features.convenience,
      wirelessPhoneCharger: 'Tech',
      powerTailgate: 'Style',
      powerTailgateWithFootSensor: 'Style',
      heatedFrontSeats: 'Tech',
    },
    interiorExterior: {
      ...activeVariant.features.interiorExterior,
      paddleShifters: true,
      tintedRearWindows: 'Style',
    },
  },
  customColorPrices: colors,
  packages: [
    { name: 'Tech', price: 745000 },
    { name: 'Style', price: 660000 },
    { name: 'Gumiszőnyeg', price: 30300 },

  ],
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
    ...comfortVariant.features,
    safety: {
      ...comfortVariant.features.safety,
      blindSpotCollisionAvoidanceAssist: 'Dynamic',
    },
    parkingAssistance: {
      ...comfortVariant.features.parkingAssistance,
      frontParkingSensor: true,
      rearParkingSensor: true,
    },
    convenience: {
      ...comfortVariant.features.convenience,
      powerTailgate: 'Dynamic',
      wirelessPhoneCharger: true,
      heatedFrontSeats: true,
      headUpDisplay: 'Dynamic JBL',
    },
    entertainment: {
      ...comfortVariant.features.entertainment,
      premiumSpeaker: 'Dynamic JBL',
    },
    interiorExterior: {
      ...comfortVariant.features.interiorExterior,
      spareTire: 'Pótkerék',
      tintedRearWindows: true,
      leatherSeats: true,
    },
  },
  customColorPrices: grSportColors,
  packages: [
    { name: 'Dynamic', price: 325000 },
    { name: 'Dynamic JBL', price: 485000 },
    { name: 'Pótkerék', price: 106000 },
    { name: 'Gumiszőnyeg', price: 30300 },

  ],
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
    ...comfortVariant.features,
    safety: {
      ...comfortVariant.features.safety,
      blindSpotCollisionAvoidanceAssist: true,
    },
    parkingAssistance: {
      ...comfortVariant.features.parkingAssistance,
      frontParkingSensor: true,
      rearParkingSensor: true,
    },
    convenience: {
      ...comfortVariant.features.convenience,
      headUpDisplay: true,
      wirelessPhoneCharger: true,
    },
    entertainment: {
      ...comfortVariant.features.entertainment,
      premiumSpeaker: true,
    },
    interiorExterior: {
      ...comfortVariant.features.interiorExterior,
      spareTire: 'Pótkerék',
      tintedRearWindows: true,
      leatherSeats: true,
    }
  },
  customColorPrices: colors,
  packages: [
    { name: 'Pótkerék', price: 106000 },
    { name: 'Gumiszőnyeg', price: 30300 },
  ],
  leatherSeatPackages: []
};


const modelName = createCarModel(
  'Toyota',
  'Corolla Touring Sports',
  DiscountTarget.PRIVATE,
  [
    activeVariant,
    comfortVariant,
    grSportVariant,
    executiveJblVariant
  ]
);

export default modelName;
