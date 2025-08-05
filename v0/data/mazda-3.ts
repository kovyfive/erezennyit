
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

const primeLineHatchbackVariant: CarVariant = {
  variantName: 'Prime-Line Hatchback',
  engineVariants: [
    createEngineVariant(
      '2.5 Skyactiv-G 140 LE 2WD MT',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      11094900,
      {
        horsepower: 140,
      },
    ),
    createEngineVariant(
      '2.5 Skyactiv-G 140 LE 2WD AT',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      11844900,
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

const centreLineHatchbackVariant: CarVariant = {
    variantName: 'Centre-Line Hatchback',
    engineVariants: [
        createEngineVariant(
            '2.0 Skyactiv-X 186 LE 2WD MT',
            EngineType.BENZIN,
            TransmissionType.MANUAL,
            12606900,
            {
              horsepower: 186,
            },
          ),
          createEngineVariant(
            '2.0 Skyactiv-X 186 LE 2WD AT',
            EngineType.BENZIN,
            TransmissionType.AUTOMATIC,
            13356900,
            {
              horsepower: 186,
            },
          ),
      createEngineVariant(
        '2.5 Skyactiv-G 140 LE 2WD MT',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        11961900,
        {
          horsepower: 140,
        },
      ),
      createEngineVariant(
        '2.5 Skyactiv-G 140 LE 2WD AT',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        12711900,
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

const modelName = new CarModel(
  'Mazda',
  '3',
  DiscountTarget.NONE,
  [
    primeLineHatchbackVariant,
    centreLineHatchbackVariant,
  ]
);

export default modelName;
