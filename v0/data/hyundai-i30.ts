
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
        engineDisplacement: 1498,
        consumption: 6.2,
        acceleration0to100: 12.3,
        topSpeed: 187,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 395,
        range: 806,
        speakerCount: 6,
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
        engineDisplacement: 998,
        consumption: 5.4,
        acceleration0to100: 12.1,
        topSpeed: 188,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 395,
        range: 926,
        speakerCount: 6,
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
        engineDisplacement: 998,
        consumption: 5.5,
        acceleration0to100: 12.3,
        topSpeed: 188,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 395,
        range: 909,
        speakerCount: 6,
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
        engineDisplacement: 1482,
        consumption: 5.6,
        acceleration0to100: 9.4,
        topSpeed: 210,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 395,
        range: 893,
        speakerCount: 6,
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
        engineDisplacement: 1482,
        consumption: 5.7,
        acceleration0to100: 9.5,
        topSpeed: 210,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 395,
        range: 877,
        speakerCount: 6,
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
          engineDisplacement: 1498,
          consumption: 6.2,
          acceleration0to100: 12.6,
          topSpeed: 187,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 806,
          speakerCount: 6,
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
          engineDisplacement: 998,
          consumption: 5.4,
          acceleration0to100: 12.4,
          topSpeed: 188,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 926,
          speakerCount: 6,
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
          engineDisplacement: 998,
          consumption: 5.5,
          acceleration0to100: 12.6,
          topSpeed: 188,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 909,
          speakerCount: 6,
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
          engineDisplacement: 1482,
          consumption: 5.6,
          acceleration0to100: 9.7,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 893,
          speakerCount: 6,
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
          engineDisplacement: 1482,
          consumption: 5.7,
          acceleration0to100: 9.8,
          topSpeed: 210,
          fuelTankCapacity: 50,
          cargoVolumeSeatsUp: 602,
          range: 877,
          speakerCount: 6,
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
