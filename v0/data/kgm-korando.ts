
import {
  CarModel,
  EngineType,
  TransmissionType,
  DiscountTarget,
  createEngineVariant,
  createDefaultFeatures,
  CarVariant
} from '../model/model';

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
        consumption: 7.578,
        acceleration0to100: 0,
        topSpeed: 191,
        cargoVolumeSeatsUp: 551,
      },
      8599000,
      699000
    ),
  ],
  features: {
    ...createDefaultFeatures(),
    safety: {
        ...createDefaultFeatures().safety,
        laneKeepAssist: true,
        cruiseControl: true,
        isofix: true,
    },
    parkingAssistance: {
        ...createDefaultFeatures().parkingAssistance,
        rearParkingSensor: true,
    },
    convenience: {
        ...createDefaultFeatures().convenience,
        frontPowerWindows: true,
        rearPowerWindows: true,
    },
    entertainment: {
        ...createDefaultFeatures().entertainment,
        wiredCarPlayAndroidAuto: true,
    },
  },
  customColorPrices: colors,
  packages: [],
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
          consumption: 7.578,
          acceleration0to100: 0,
          topSpeed: 191,
          cargoVolumeSeatsUp: 551,
        },
        9499000,
        699000
      ),
    ],
    features: {
      ...clubVariant.features,
      parkingAssistance: {
          ...clubVariant.features.parkingAssistance,
          frontParkingSensor: true,
      },
      convenience: {
          ...clubVariant.features.convenience,
          keylessStart: true,
          dualZoneAC: true,
      },
    },
    customColorPrices: colors,
    packages: [],
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
          consumption: 8.101,
          acceleration0to100: 0,
          topSpeed: 189,
          cargoVolumeSeatsUp: 551,
        },
        11699000
      ),
    ],
    features: {
      ...smartVariant.features,
      safety: {
          ...smartVariant.features.safety,
          smartCruiseControl: 'PREMIUM PLUS',
      },
      convenience: {
          ...smartVariant.features.convenience,
          heatedFrontSeats: true,
          powerTailgate: 'PREMIUM PLUS',
          wirelessPhoneCharger: true,
      },
      interiorExterior: {
          ...smartVariant.features.interiorExterior,
          tintedRearWindows: true,
      }
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };


const modelName = new CarModel(
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
