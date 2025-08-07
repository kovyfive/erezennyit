
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant, MISSING, NOT_INCLUDED } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
    { name: 'Metál', price: 175000 },
];

const automatic = { name: 'AUTOMATIC', price: 700000 } ;

const silverVariant: CarVariant = {
  variantName: 'Silver',
  engineVariants: [
    createEngineVariant(
      '100 T-GDI',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      9149000,
      {
        engineDisplacement: 998,
        horsepower: 100,
        consumption: 5.2,
        acceleration0to100: 11.8,
        topSpeed: 183,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 625,
        speakerCount: 6,
        range: 961,
      },
      8699000
    ),
    createEngineVariant(
      '140 T-GDI',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      9749000,
      {
        engineDisplacement: 1482,
        horsepower: 140,
        consumption: 5.2,
        acceleration0to100: 8.5,
        topSpeed: 210,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 625,
        speakerCount: 6,
        range: 961,
      },
      9299000
    ),
  ],
  features: {
    ...createDefaultFeatures(),
    safety: {
        laneKeepAssist: true,
        cruiseControl: true,
        smartCruiseControl: "AUTOMATIC",
        smartCruiseControlWithStopAndGo: false,
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
        rearPowerWindows: false,
        heatedFrontSeats: true,
        heatedRearSeats: false,
        dualZoneAC: true,
        headUpDisplay: true,
      },
      entertainment: {
        premiumSpeaker: false,
        wiredCarPlayAndroidAuto: true,
        wirelessCarPlayAndroidAuto: NOT_INCLUDED,
      },
      interiorExterior: {
        spareTire: true,
        metalPedals: false,
        paddleShifters: NOT_INCLUDED,
        velourFloorMats: true,
        rubberMats: NOT_INCLUDED,
        tintedRearWindows: false,
        roofRails: true,
        slidingCenterConsole: false,
        leatherSeats: false
      }
  },
  customColorPrices: colors,
  packages: [ automatic ],
  leatherSeatPackages: []
};

const goldVariant: CarVariant = {
    variantName: 'Gold',
    engineVariants: [
      createEngineVariant(
        '100 T-GDI',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        9649000,
        {
          engineDisplacement: 998,
          horsepower: 100,
          consumption: 5.2,
          acceleration0to100: 11.8,
          topSpeed: 183,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 625,
          speakerCount: 6,
          range: 961,
        },
        9199000
      ),
      createEngineVariant(
        '140 T-GDI',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        10249000,
        {
          engineDisplacement: 1482,
          horsepower: 140,
          consumption: 5.2,
          acceleration0to100: 8.5,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 625,
          speakerCount: 6,
          range: 961,
        },
        9799000
      ),
    ],
    features: {
      ...silverVariant.features,
      safety: {
        ...silverVariant.features.safety,
        smartCruiseControlWithStopAndGo: 'ADA Csomag (Automata)',
        blindSpotCollisionAvoidanceAssist: 'ADA Csomag (Manuális)'
      },
      parkingAssistance: {
        ...silverVariant.features.parkingAssistance,
        frontParkingSensor: "Plus csomag",
        electricParkingBrake: "ADA Csomag (Automata)"
      },
      interiorExterior: {
        ...silverVariant.features.interiorExterior,
        tintedRearWindows: true,
        slidingCenterConsole: "ADA Csomag (Automata)"
      }
    },
    customColorPrices: colors,
    packages: [
        automatic,
        { name: 'ADA Csomag (Manuális)', price: 200000 },
        { name: 'ADA Csomag (Automata)', price: 500000 },
        { name: 'Plus csomag', price: 100000 }
    ],
    leatherSeatPackages: []
  };

  const goldSportVariant: CarVariant = {
    variantName: 'Gold Sport',
    engineVariants: [
      createEngineVariant(
        '140 T-GDI',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        10249000,
        {
          engineDisplacement: 1482,
          horsepower: 140,
          consumption: 5.2,
          acceleration0to100: 8.5,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 625,
          speakerCount: 6,
          range: 961,
        },
        9799000
      ),
    ],
    features: {
      ...silverVariant.features,
      interiorExterior: {
        ...silverVariant.features.interiorExterior,
        spareTire: false,
        tintedRearWindows: true,
      }

    },
    customColorPrices: colors,
    packages: [ automatic ],
    leatherSeatPackages: []
  };

  const platinumVariant: CarVariant = {
    variantName: 'Platinum',
    engineVariants: [
      createEngineVariant(
        '100 T-GDI',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        10349000,
        {
          engineDisplacement: 998,
          horsepower: 100,
          consumption: 5.2,
          acceleration0to100: 11.8,
          topSpeed: 183,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 625,
          speakerCount: 6,
          range: 961,
        },
        9899000
      ),
      createEngineVariant(
        '140 T-GDI',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        10949000,
        {
          engineDisplacement: 1482,
          horsepower: 140,
          consumption: 5.2,
          acceleration0to100: 8.5,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 625,
          speakerCount: 6,
          range: 961,
        },
        10499000
      ),
    ],
    features: {
      ...goldVariant.features,
      safety: {
        ...goldVariant.features.safety,
        smartCruiseControlWithStopAndGo: 'ADA Csomag (Automata)',
        blindSpotCollisionAvoidanceAssist: 'ADA Csomag (Manuális)'  
      },
      parkingAssistance: {
        ...goldVariant.features.parkingAssistance,
        frontParkingSensor: true,
        electricParkingBrake: true
      },
      convenience: {
        ...goldVariant.features.convenience,
        keylessStart: true,
        wirelessPhoneCharger: "Top Csomag",
        powerTailgate: "Top Csomag",
        powerTailgateWithFootSensor: "Top Csomag",
        rearPowerWindows: true,
        heatedRearSeats: true,
      },
      entertainment: {
        ...goldVariant.features.entertainment,
        premiumSpeaker: "Top Csomag",
      },
      interiorExterior: {
        ...goldVariant.features.interiorExterior,
        metalPedals: "Top Csomag",
        slidingCenterConsole: true,
        leatherSeats: "Bőr Csomag"
      }
    },
    customColorPrices: colors,
    packages: [
        automatic,
        { name: 'ADA Csomag (Manuális)', price: 200000 },
        { name: 'ADA Csomag (Automata)', price: 450000 },
        { name: 'Top Csomag', price: 650000 }
    ],
    leatherSeatPackages: [
        { name: 'Bőr Csomag', price: 500000 }
    ]
  };

  const platinumGtLineVariant: CarVariant = {
    variantName: 'Platinum GT Line',
    engineVariants: [
      createEngineVariant(
        '140 T-GDI',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        12049000,
        {
          engineDisplacement: 1482,
          horsepower: 140,
          consumption: 5.2,
          acceleration0to100: 8.5,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 625,
          speakerCount: 6,
          range: 961,
        },
        11599000
      ),
    ],
    features: {
      ...platinumVariant.features,
      safety: {
        ...platinumVariant.features.safety,
        smartCruiseControlWithStopAndGo: true,
        blindSpotCollisionAvoidanceAssist: true
      },
      convenience: {
        ...platinumVariant.features.convenience,
        wirelessPhoneCharger: true,
        powerTailgate: true,
        powerTailgateWithFootSensor: true,
      },
      entertainment: {
        ...platinumVariant.features.entertainment,
        premiumSpeaker: true,
      },
      interiorExterior: {
        ...platinumVariant.features.interiorExterior,
        metalPedals: true,
        leatherSeats: true,
      }

    },
    customColorPrices: colors,
    packages: [
        automatic,
    ],
    leatherSeatPackages: []
  };


const modelName = createCarModel(
  'Kia',
  'Ceed SW',
  DiscountTarget.PRIVATE,
  [
    silverVariant,
    goldVariant,
    goldSportVariant,
    platinumVariant,
    platinumGtLineVariant
  ]
);

export default modelName;
