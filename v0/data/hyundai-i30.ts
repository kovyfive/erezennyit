
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
    { name: 'Fehér', price: 100000 },
    { name: 'Metál', price: 175000 },
];

const trend5doorVariant: CarVariant = {
  variantName: 'Trend 5-ajtós',
  engineVariants: [
    createEngineVariant(
      '1.5 DPi',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      8699000,
      {
        horsepower: 96,
      },
      8399000
    ),
    createEngineVariant(
      '1.0 T-GDi',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      8849000,
      {
        horsepower: 100,
      },
      8549000
    ),
    createEngineVariant(
      '1.0 T-GDI DCT',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      9449000,
      {
        horsepower: 100,
      },
      9149000
    ),
    createEngineVariant(
      '1.5 T-GDI MHEV',
      EngineType.MILD_HYBRID,
      TransmissionType.MANUAL,
      9599000,
      {
        horsepower: 140,
      },
      9299000
    ),
    createEngineVariant(
      '1.5 T-GDI MHEV DCT',
      EngineType.MILD_HYBRID,
      TransmissionType.AUTOMATIC,
      10199000,
      {
        horsepower: 140,
      },
      9899000
    ),
  ],
  features: {
    ...createDefaultFeatures(),
  },
  customColorPrices: colors,
  packages: [],
  leatherSeatPackages: []
};

const trendKombiVariant: CarVariant = {
    variantName: 'Trend Kombi',
    engineVariants: [
      createEngineVariant(
        '1.5 DPi',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        9099000,
        {
          horsepower: 96,
        },
        8799000
      ),
      createEngineVariant(
        '1.0 T-GDi',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        9249000,
        {
          horsepower: 100,
        },
        8949000
      ),
      createEngineVariant(
        '1.0 T-GDI DCT',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        9849000,
        {
          horsepower: 100,
        },
        9549000
      ),
      createEngineVariant(
        '1.5 T-GDI MHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.MANUAL,
        9999000,
        {
          horsepower: 140,
        },
        9699000
      ),
      createEngineVariant(
        '1.5 T-GDI MHEV DCT',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        10599000,
        {
          horsepower: 140,
        },
        10299000
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
  'Hyundai',
  'i30',
  DiscountTarget.NONE,
  [
    trend5doorVariant,
    trendKombiVariant,
  ]
);

export default modelName;
