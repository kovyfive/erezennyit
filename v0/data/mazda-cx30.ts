
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
        engineDisplacement: 2488,
        consumption: 6.0,
        acceleration0to100: 9.7,
        topSpeed: 194,
        fuelTankCapacity: 51,
        cargoVolumeSeatsUp: 422,
        range: 850,
        speakerCount: 8,
      },
    ),
    createEngineVariant(
      'e-Skyactiv G 140 LE (AT)',
      EngineType.MILD_HYBRID,
      TransmissionType.AUTOMATIC,
      11926900,
      {
        horsepower: 140,
        engineDisplacement: 2488,
        consumption: 6.0,
        acceleration0to100: 9.7,
        topSpeed: 194,
        fuelTankCapacity: 51,
        cargoVolumeSeatsUp: 422,
        range: 850,
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
          engineDisplacement: 2488,
          consumption: 6.0,
          acceleration0to100: 9.7,
          topSpeed: 194,
          fuelTankCapacity: 51,
          cargoVolumeSeatsUp: 422,
          range: 850,
          speakerCount: 8,
        },
      ),
      createEngineVariant(
        'e-Skyactiv G 140 LE (AT)',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        12713900,
        {
          horsepower: 140,
          engineDisplacement: 2488,
          consumption: 6.0,
          acceleration0to100: 9.7,
          topSpeed: 194,
          fuelTankCapacity: 51,
          cargoVolumeSeatsUp: 422,
          range: 850,
          speakerCount: 8,
        },
      ),
      createEngineVariant(
        'e-Skyactiv X 186 LE (MT)',
        EngineType.MILD_HYBRID,
        TransmissionType.MANUAL,
        12853900,
        {
          horsepower: 186,
          engineDisplacement: 1998,
          consumption: 5.7,
          acceleration0to100: 8.3,
          topSpeed: 204,
          fuelTankCapacity: 51,
          cargoVolumeSeatsUp: 430,
          range: 894,
          speakerCount: 8,
        },
      ),
      createEngineVariant(
        'e-Skyactiv X 186 LE (AT)',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        13603900,
        {
          horsepower: 186,
          engineDisplacement: 1998,
          consumption: 5.9,
          acceleration0to100: 8.3,
          topSpeed: 204,
          fuelTankCapacity: 51,
          cargoVolumeSeatsUp: 430,
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
  'CX-30',
  DiscountTarget.NONE,
  [
    primeLineVariant,
    centreLineVariant,
  ]
);

export default modelName;
