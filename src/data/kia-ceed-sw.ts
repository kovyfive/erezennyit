
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
    { name: 'Metál', price: 175000 },
];

const silverVariant: CarVariant = {
  variantName: 'Silver',
  engineVariants: [
    createEngineVariant(
      '100 T-GDI',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      9149000,
      {
        horsepower: 100,
        consumption: 5.2,
        cargoVolumeSeatsUp: 625,
      },
      8699000
    ),
    createEngineVariant(
      '140 T-GDI',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      9749000,
      {
        horsepower: 140,
        consumption: 5.2,
        cargoVolumeSeatsUp: 625,
      },
      9299000,
      700000
    ),
  ],
  features: {
    ...createDefaultFeatures(),
  },
  customColorPrices: colors,
  packages: [],
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
          horsepower: 100,
          consumption: 5.2,
          cargoVolumeSeatsUp: 625,
        },
        9199000
      ),
      createEngineVariant(
        '140 T-GDI',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        10249000,
        {
          horsepower: 140,
          consumption: 5.2,
          cargoVolumeSeatsUp: 625,
        },
        9799000,
        700000
      ),
    ],
    features: {
      ...createDefaultFeatures(),
    },
    customColorPrices: colors,
    packages: [],
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
          horsepower: 140,
          consumption: 5.2,
          cargoVolumeSeatsUp: 625,
        },
        9799000,
        700000
      ),
    ],
    features: {
      ...createDefaultFeatures(),
    },
    customColorPrices: colors,
    packages: [],
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
          horsepower: 100,
          consumption: 5.2,
          cargoVolumeSeatsUp: 625,
        },
        9899000
      ),
      createEngineVariant(
        '140 T-GDI',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        10949000,
        {
          horsepower: 140,
          consumption: 5.2,
          cargoVolumeSeatsUp: 625,
        },
        10499000,
        700000
      ),
    ],
    features: {
      ...createDefaultFeatures(),
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
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
          horsepower: 140,
          consumption: 5.2,
          cargoVolumeSeatsUp: 625,
        },
        11599000,
        700000
      ),
    ],
    features: {
      ...createDefaultFeatures(),
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };


const modelName = new CarModel(
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
