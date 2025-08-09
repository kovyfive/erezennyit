
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant, MISSING, NOT_INCLUDED } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
  { name: 'Hófehér', price: 0 },
  { name: 'Platina gyöngyfehér', price: 300000 },
  { name: 'Nikkelszürke', price: 300000 },
  { name: 'Szürke metál', price: 200000 },
  { name: 'Éjfekete', price: 200000 },
  { name: 'Szürkéskék metál', price: 200000 },
  { name: 'Láva vörös', price: 300000 },
  { name: 'Krómezüst', price: 300000 },
  { name: 'Tealevél mély zöld', price: 300000 },
  { name: 'Érzéki vörös', price: 300000 },
];

const grSportColors = [
  { name: 'GR-S gyöngyfehér', price: 0 },
  { name: 'GR-S króm', price: 0 },
  { name: 'GR-S hamuszürke', price: 0 },
  { name: 'GR-S szürke metál', price: 0 },
  { name: 'GR-S szürkéskék', price: 0 },
  { name: 'GR-S érzéki vörös', price: 0 },
  { name: 'GR-S lávavörös', price: 0 },
]

const activeVariant: CarVariant = {
  variantName: 'Active',
  engineVariants: [
    createEngineVariant(
      '1.8 l Hybrid 140 e-CVT',
      EngineType.FULL_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      12505000,
      {
        horsepower: 140,
        engineDisplacement: 1798,
        consumption: 4.5,
        acceleration0to100: 9.1,
        topSpeed: 180,
        cargoVolumeSeatsUp: 471,
        fuelTankCapacity: 43,
        range: 956,
        speakerCount: 6,
      },
      10505000
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
      powerTailgate: NOT_INCLUDED,
      powerTailgateWithFootSensor: NOT_INCLUDED,
      frontPowerWindows: true,
      rearPowerWindows: true,
      heatedFrontSeats: false,
      heatedRearSeats: NOT_INCLUDED,
      dualZoneAC: true,
      headUpDisplay: false,
    },
    entertainment: {
      premiumSpeaker: NOT_INCLUDED,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: true,
    },
    interiorExterior: {
      spareTire: true,
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
    { name: 'Gumiszőnyeg', price: 37100 },
    { name: 'Tetőcsomagtartó', price: 172100 }
  ],
  leatherSeatPackages: []
};

const comfortVariant: CarVariant = {
  variantName: 'Comfort',
  engineVariants: [
    createEngineVariant(
      '1.8 l Hybrid 140 e-CVT',
      EngineType.FULL_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      13000000,
      {
        horsepower: 140,
        engineDisplacement: 1798,
        consumption: 4.5,
        acceleration0to100: 9.1,
        topSpeed: 180,
        cargoVolumeSeatsUp: 471,
        fuelTankCapacity: 43,
        range: 956,
        speakerCount: 6,
      },
      11000000
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
      heatedFrontSeats: 'Style',
    },
    interiorExterior: {
      ...activeVariant.features.interiorExterior,
      tintedRearWindows: 'Style',
    }
  },
  customColorPrices: colors,
  packages: [
    { name: 'Tech', price: 590000 },
    { name: 'Style', price: 445000 },
    { name: 'Gumiszőnyeg', price: 37100 },
    { name: 'Tetőcsomagtartó', price: 172100 }
  ],
  leatherSeatPackages: []
};

const grSportVariant: CarVariant = {
  variantName: 'GR Sport',
  engineVariants: [
    createEngineVariant(
      '1.8 l Hybrid 140 e-CVT',
      EngineType.FULL_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      15605000,
      {
        horsepower: 140,
        engineDisplacement: 1798,
        consumption: 4.5,
        acceleration0to100: 9.1,
        topSpeed: 180,
        cargoVolumeSeatsUp: 471,
        fuelTankCapacity: 43,
        range: 956,
        speakerCount: 6,
      },
      13605000
    ),
  ],
  features: {
    ...comfortVariant.features,
    safety: {
      ...comfortVariant.features.safety,
    },
    parkingAssistance: {
      ...comfortVariant.features.parkingAssistance,
      reversingRadar: true,
      frontParkingSensor: true,
      rearParkingSensor: true,
    },
    convenience: {
      ...comfortVariant.features.convenience,
      wirelessPhoneCharger: true,
      heatedFrontSeats: true,
      headUpDisplay: true,
    },
    interiorExterior: {
      ...comfortVariant.features.interiorExterior,
      spareTire: false,
      tintedRearWindows: true,
      leatherSeats: true,
    }
  },
  customColorPrices: grSportColors,
  packages: [{ name: 'Gumiszőnyeg', price: 37100 }, { name: 'Tetőcsomagtartó', price: 172100 }],
  leatherSeatPackages: []
};

const executiveVariant: CarVariant = {
  variantName: 'Executive',
  engineVariants: [
    createEngineVariant(
      '1.8 l Hybrid 140 e-CVT',
      EngineType.FULL_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      15240000,
      {
        horsepower: 140,
        engineDisplacement: 1798,
        consumption: 4.5,
        acceleration0to100: 9.1,
        topSpeed: 180,
        cargoVolumeSeatsUp: 471,
        fuelTankCapacity: 43,
        range: 956,
        speakerCount: 6,
      },
      13240000
    ),
  ],
  features: {
    ...comfortVariant.features,
    safety: {
      ...comfortVariant.features.safety,
    },
    convenience: {
      ...comfortVariant.features.convenience,
      wirelessPhoneCharger: true,
      heatedFrontSeats: true,
      headUpDisplay: true,
    },
    interiorExterior: {
      ...comfortVariant.features.interiorExterior,
      spareTire: false,
      tintedRearWindows: true,
      leatherSeats: true,
    }
  },
  customColorPrices: colors,
  packages: [{ name: 'Gumiszőnyeg', price: 37100 }, { name: 'Tetőcsomagtartó', price: 172100 }],
  leatherSeatPackages: []
};


const modelName = createCarModel(
  'Toyota',
  'Corolla Sedan',
  DiscountTarget.PRIVATE,
  [
    activeVariant,
    comfortVariant,
    grSportVariant,
    executiveVariant
  ]
);

export default modelName;
