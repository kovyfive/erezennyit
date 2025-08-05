
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
    { name: 'Atlas White', price: 100000 },
    { name: 'Metál', price: 200000 },
    { name: 'Kéttónusú', price: 300000 },
];

const comfortVariant: CarVariant = {
  variantName: 'Comfort',
  engineVariants: [
    createEngineVariant(
      '1.0 T-GDi',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      9499000,
      {
        horsepower: 100,
      },
    ),
    createEngineVariant(
      '1.6 GDi hybrid MY25',
      EngineType.FULL_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      11199000,
      {
        horsepower: 129,
      },
    ),
  ],
  features: {
    ...createDefaultFeatures(),
  },
  customColorPrices: colors,
  packages: [],
  leatherSeatPackages: []
};

const primeVariant: CarVariant = {
    variantName: 'Prime',
    engineVariants: [
      createEngineVariant(
        '1.0 T-GDi',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        10799000,
        {
          horsepower: 100,
        },
        10499000
      ),
      createEngineVariant(
        '1.6 T-GDi LP',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        11199000,
        {
          horsepower: 138,
        },
        10899000
      ),
      createEngineVariant(
        '1.6 T-GDi LP',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        11999000,
        {
          horsepower: 138,
        },
        11699000
      ),
      createEngineVariant(
        '1.6 T-GDI HP',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        13099000,
        {
          horsepower: 170,
        },
        12799000
      ),
      createEngineVariant(
        '1.6 GDi hybrid MY25',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        12399000,
        {
          horsepower: 129,
        },
        12099000
      ),
    ],
    features: {
      ...createDefaultFeatures(),
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };

  const styleVariant: CarVariant = {
    variantName: 'Style',
    engineVariants: [
      createEngineVariant(
        '1.6 T-GDi LP',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        11599000,
        {
          horsepower: 138,
        },
        11299000
      ),
      createEngineVariant(
        '1.6 T-GDi LP',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        12399000,
        {
          horsepower: 138,
        },
        12099000
      ),
      createEngineVariant(
        '1.6 T-GDI HP',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        13499000,
        {
          horsepower: 170,
        },
        13199000
      ),
      createEngineVariant(
        '1.6 GDi hybrid MY25',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        12799000,
        {
          horsepower: 129,
        },
        12499000
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
  'Hyundai',
  'KONA',
  DiscountTarget.NONE,
  [
    comfortVariant,
    primeVariant,
    styleVariant
  ]
);

export default modelName;
