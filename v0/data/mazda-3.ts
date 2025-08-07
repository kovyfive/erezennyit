
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

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
        engineDisplacement: 2488,
        consumption: 5.8,
        acceleration0to100: 9.5,
        topSpeed: 209,
        fuelTankCapacity: 51,
        cargoVolumeSeatsUp: 569,
        range: 879,
        speakerCount: 8,
      },
    ),
    createEngineVariant(
      '2.5 Skyactiv-G 140 LE 2WD AT',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      11844900,
      {
        horsepower: 140,
        engineDisplacement: 2488,
        consumption: 5.9,
        acceleration0to100: 9.5,
        topSpeed: 209,
        fuelTankCapacity: 51,
        cargoVolumeSeatsUp: 569,
        range: 864,
        speakerCount: 8,
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
              engineDisplacement: 1998,
              consumption: 5.4,
              acceleration0to100: 8.0,
              topSpeed: 216,
              fuelTankCapacity: 51,
              cargoVolumeSeatsUp: 351,
              range: 944,
              speakerCount: 8,
            },
          ),
          createEngineVariant(
            '2.0 Skyactiv-X 186 LE 2WD AT',
            EngineType.BENZIN,
            TransmissionType.AUTOMATIC,
            13356900,
            {
              horsepower: 186,
              engineDisplacement: 1998,
              consumption: 5.7,
              acceleration0to100: 8.5,
              topSpeed: 216,
              fuelTankCapacity: 51,
              cargoVolumeSeatsUp: 351,
              range: 894,
              speakerCount: 8,
            },
          ),
      createEngineVariant(
        '2.5 Skyactiv-G 140 LE 2WD MT',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        11961900,
        {
          horsepower: 140,
          engineDisplacement: 2488,
          consumption: 5.8,
          acceleration0to100: 9.5,
          topSpeed: 209,
          fuelTankCapacity: 51,
          cargoVolumeSeatsUp: 569,
          range: 879,
          speakerCount: 8,
        },
      ),
      createEngineVariant(
        '2.5 Skyactiv-G 140 LE 2WD AT',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        12711900,
        {
          horsepower: 140,
          engineDisplacement: 2488,
          consumption: 5.9,
          acceleration0to100: 9.5,
          topSpeed: 209,
          fuelTankCapacity: 51,
          cargoVolumeSeatsUp: 569,
          range: 864,
          speakerCount: 8,
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

const modelName = createCarModel(
  'Mazda',
  '3',
  DiscountTarget.NONE,
  [
    primeLineHatchbackVariant,
    centreLineHatchbackVariant,
  ]
);

export default modelName;
