
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant, MISSING, NOT_INCLUDED } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
  { name: 'GRAND fehér', price: 0 },
  { name: 'IRON szürke', price: 199000 },
  { name: 'SPACE fekete', price: 199000 },
  { name: 'LATTE grézs', price: 199000 },
  { name: 'DANDY kék', price: 199000 },
];

const clubVariant: CarVariant = {
  variantName: 'Club',
  engineVariants: [
    createEngineVariant(
      '1.5 Turbo GDI 163 LE / 280 Nm',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      9299000,
      {
        horsepower: 163,
        engineDisplacement: 1497,
        consumption: 7.578,
        acceleration0to100: 10.0,
        topSpeed: 191,
        cargoVolumeSeatsUp: 551,
        fuelTankCapacity: 50,
        range: 660,
        speakerCount: 6,
      },
      8599000
    ),
  ],
  features: {
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: false,
      smartCruiseControlWithStopAndGo: NOT_INCLUDED,
      blindSpotCollisionAvoidanceAssist: false,
      isofix: true,
    },
    parkingAssistance: {
      reversingRadar: true,
      frontParkingSensor: false,
      rearParkingSensor: NOT_INCLUDED,
      parkingCameras: true,
      parkingCameras360View: NOT_INCLUDED,
      semiOrFullAutomaticParkingAssistant: NOT_INCLUDED,
      electricParkingBrake: false,
    },
    convenience: {
      keylessStart: false,
      wirelessPhoneCharger: false,
      powerTailgate: false,
      powerTailgateWithFootSensor: false,
      frontPowerWindows: true,
      rearPowerWindows: true,
      heatedFrontSeats: 'Club Plus',
      heatedRearSeats: false,
      dualZoneAC: false,
      rainSensingWipers: true,
      headUpDisplay: NOT_INCLUDED,
    },
    entertainment: {
      premiumSpeaker: NOT_INCLUDED,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: false,
    },
    interiorExterior: {
      spareTire: true,
      metalPedals: NOT_INCLUDED,
      paddleShifters: NOT_INCLUDED,
      velourFloorMats: false,
      rubberMats: NOT_INCLUDED,
      tintedRearWindows: false,
      roofRails: false,
      slidingCenterConsole: true,
      leatherSeats: false,
    }
  },
  customColorPrices: colors,
  packages: [{ name: 'Club Plus', price: 249000 }, { name: 'Automata', price: 699000 }],
  leatherSeatPackages: []
};

const smartVariant: CarVariant = {
  variantName: 'Smart',
  engineVariants: [
    createEngineVariant(
      '1.5 Turbo GDI 163 LE / 280 Nm',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      10199000,
      {
        horsepower: 163,
        engineDisplacement: 1497,
        consumption: 7.578,
        acceleration0to100: 10.0,
        topSpeed: 191,
        cargoVolumeSeatsUp: 551,
        fuelTankCapacity: 50,
        range: 660,
        speakerCount: 6,
      },
      9499000
    ),
  ],
  features: {
    ...clubVariant.features,
    safety: {
      ...clubVariant.features.safety,
      smartCruiseControl: 'SCC',
      blindSpotCollisionAvoidanceAssist: 'Smart Plus',
    },
    parkingAssistance: {
      ...clubVariant.features.parkingAssistance,
      frontParkingSensor: true,
      electricParkingBrake: 'SCC'
    },
    convenience: {
      ...clubVariant.features.convenience,
      keylessStart: 'Smart Plus',
      dualZoneAC: true,
      wirelessPhoneCharger: true,
      heatedFrontSeats: true,
    },
    interiorExterior: {
      ...clubVariant.features.interiorExterior,
      tintedRearWindows: true,
      velourFloorMats: true,
      roofRails: true
    }
  },
  customColorPrices: colors,
  packages: [{ name: 'Smart Plus', price: 599000 }, 
    { name: 'Automata', price: 699000 },
     { name: 'SCC', price: 149000 }],
  leatherSeatPackages: []
};

const premiumVariant: CarVariant = {
  variantName: 'Premium',
  engineVariants: [
    createEngineVariant(
      '1.5 Turbo GDI 163 LE / 280 Nm',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      12399000,
      {
        horsepower: 163,
        engineDisplacement: 1497,
        consumption: 8.101,
        acceleration0to100: 10.0,
        topSpeed: 189,
        cargoVolumeSeatsUp: 551,
        fuelTankCapacity: 50,
        range: 617,
        speakerCount: 6,
      },
      11699000
    ),
  ],
  features: {
    ...smartVariant.features,
    safety: {
      ...smartVariant.features.safety,
      smartCruiseControl: 'Premium Plus',
      blindSpotCollisionAvoidanceAssist: 'Premium Plus',
    },
    parkingAssistance: {
      ...smartVariant.features.parkingAssistance,
      electricParkingBrake: 'Premium Plus',
      
    },
    convenience: {
      ...smartVariant.features.convenience,
      keylessStart: true,
      heatedFrontSeats: true,
      powerTailgate: 'Premium Plus',
      powerTailgateWithFootSensor: 'Premium Plus',
    },
    interiorExterior: {
      ...smartVariant.features.interiorExterior,
      tintedRearWindows: true,
      leatherSeats: true,
    }
  },
  customColorPrices: colors,
  packages: [{ name: 'Premium Plus', price: 699000 }],
  leatherSeatPackages: []
};


const modelName = createCarModel(
  'KGM',
  'Korando',
  DiscountTarget.NONE,
  [
    clubVariant,
    smartVariant,
    premiumVariant
  ]
);

export default modelName;
