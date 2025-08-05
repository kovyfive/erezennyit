
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

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
        engineDisplacement: 998,
        horsepower: 100,
        consumption: 5.2,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 625,
        speakerCount: 6,
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
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 625,
        speakerCount: 6,
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
          engineDisplacement: 998,
          horsepower: 100,
          consumption: 5.2,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 625,
          speakerCount: 6,
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
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 625,
          speakerCount: 6,
        },
        9799000,
        700000
      ),
    ],
    features: {
      ...createDefaultFeatures(),
    },
    customColorPrices: colors,
    packages: [
        { name: 'ADA Csomag (Manuális)', price: 200000 },
        { name: 'ADA Csomag (Automata)', price: 500000 },
        { name: 'Plusz Csomag', price: 100000 }
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
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 625,
          speakerCount: 6,
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
          engineDisplacement: 998,
          horsepower: 100,
          consumption: 5.2,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 625,
          speakerCount: 6,
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
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 625,
          speakerCount: 6,
        },
        10499000,
        700000
      ),
    ],
    features: {
      ...createDefaultFeatures(),
    },
    customColorPrices: colors,
    packages: [
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
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 625,
          speakerCount: 6,
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
