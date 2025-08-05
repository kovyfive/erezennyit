
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
    { name: 'Arctic White', price: 0 },
    { name: 'Jet Black', price: 180900 },
    { name: 'Polymetal Grey', price: 180900 },
    { name: 'Machine Grey', price: 220900 },
    { name: 'Ceramic White', price: 180900 },
    { name: 'Deep Crystal Blue', price: 180900 },
    { name: 'Soul Red Crystal', price: 260900 },
    { name: 'Platinum Quartz', price: 180900 },
    { name: 'Snowflake White', price: 180900 },
    { name: 'Zircon Sand', price: 180900 },
];

const primeLineVariant: CarVariant = {
  variantName: 'Prime-Line',
  engineVariants: [
    createEngineVariant(
      'e-Skyactiv G 140 LE (MT)',
      EngineType.MILD_HYBRID,
      TransmissionType.MANUAL,
      11176900,
      {
        horsepower: 140,
      },
    ),
    createEngineVariant(
      'e-Skyactiv G 140 LE (AT)',
      EngineType.MILD_HYBRID,
      TransmissionType.AUTOMATIC,
      11926900,
      {
        horsepower: 140,
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

const centreLineVariant: CarVariant = {
    variantName: 'Centre-Line',
    engineVariants: [
      createEngineVariant(
        'e-Skyactiv G 140 LE (MT)',
        EngineType.MILD_HYBRID,
        TransmissionType.MANUAL,
        11963900,
        {
          horsepower: 140,
        },
      ),
      createEngineVariant(
        'e-Skyactiv G 140 LE (AT)',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        12713900,
        {
          horsepower: 140,
        },
      ),
      createEngineVariant(
        'e-Skyactiv X 186 LE (MT)',
        EngineType.MILD_HYBRID,
        TransmissionType.MANUAL,
        12853900,
        {
          horsepower: 186,
        },
      ),
      createEngineVariant(
        'e-Skyactiv X 186 LE (AT)',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        13603900,
        {
          horsepower: 186,
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

const modelName = new CarModel(
  'Mazda',
  'CX-30',
  DiscountTarget.NONE,
  [
    primeLineVariant,
    centreLineVariant,
  ]
);

export default modelName;
