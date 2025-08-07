
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
    { name: 'Metál', price: 175000 },
    { name: 'Prémium metál', price: 245000 },
];

const silverVariant: CarVariant = {
  variantName: 'Silver',
  engineVariants: [
    createEngineVariant(
      '160 T-GDI MT Benzin',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      11399000,
      {
        horsepower: 160,
        engineDisplacement: 1598,
        consumption: 7.1,
        acceleration0to100: 9.9,
        topSpeed: 194,
        fuelTankCapacity: 52,
        cargoVolumeSeatsUp: 562,
        range: 732,
        speakerCount: 6,
      },
      10799000
    ),
    createEngineVariant(
      '160 T-GDI DCT Benzin',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      12299000,
      {
        horsepower: 160,
        engineDisplacement: 1598,
        consumption: 6.9,
        acceleration0to100: 9.4,
        topSpeed: 192,
        fuelTankCapacity: 52,
        cargoVolumeSeatsUp: 562,
        range: 753,
        speakerCount: 6,
      },
      11699000
    ),
    createEngineVariant(
      '136 Hybrid 48V DCT Dízel',
      EngineType.MILD_HYBRID,
      TransmissionType.AUTOMATIC,
      13099000,
      {
        horsepower: 136,
        engineDisplacement: 1598,
        consumption: 5.0,
        acceleration0to100: 11.4,
        topSpeed: 180,
        fuelTankCapacity: 52,
        cargoVolumeSeatsUp: 526,
        range: 1040,
        speakerCount: 6,
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

const goldVariant: CarVariant = {
    variantName: 'Gold',
    engineVariants: [
      createEngineVariant(
        '160 T-GDI MT Benzin',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        12149000,
        {
          horsepower: 160,
          engineDisplacement: 1598,
          consumption: 7.1,
          acceleration0to100: 9.9,
          topSpeed: 194,
          fuelTankCapacity: 52,
          cargoVolumeSeatsUp: 562,
          range: 732,
          speakerCount: 6,
        },
        11549000
      ),
      createEngineVariant(
        '160 T-GDI DCT Benzin',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        13149000,
        {
          horsepower: 160,
          engineDisplacement: 1598,
          consumption: 6.9,
          acceleration0to100: 9.4,
          topSpeed: 192,
          fuelTankCapacity: 52,
          cargoVolumeSeatsUp: 562,
          range: 753,
          speakerCount: 6,
        },
        12549000
      ),
      createEngineVariant(
        '136 Hybrid 48V DCT Dízel',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        13949000,
        {
          horsepower: 136,
          engineDisplacement: 1598,
          consumption: 5.0,
          acceleration0to100: 11.4,
          topSpeed: 180,
          fuelTankCapacity: 52,
          cargoVolumeSeatsUp: 526,
          range: 1040,
          speakerCount: 6,
        },
        13349000
      ),
      createEngineVariant(
        '210 Hybrid Benzin',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        14949000,
        {
          horsepower: 215,
          engineDisplacement: 1598,
          consumption: 6.5,
          acceleration0to100: 8.3,
          topSpeed: 193,
          fuelTankCapacity: 52,
          cargoVolumeSeatsUp: 587,
          range: 800,
          speakerCount: 6,
        },
        14349000
      ),
      createEngineVariant(
        '245 Plug-in Hybrid 4WD Benzin',
        EngineType.PHEV,
        TransmissionType.HYBRID_AUTOMATIC,
        18349000,
        {
          horsepower: 265,
          engineDisplacement: 1598,
          consumption: 1.2,
          acceleration0to100: 8.2,
          topSpeed: 191,
          fuelTankCapacity: 42,
          cargoVolumeSeatsUp: 540,
          range: 55,
          speakerCount: 6,
        },
        17749000
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
  'Sportage',
  DiscountTarget.PRIVATE,
  [
    silverVariant,
    goldVariant,
  ]
);

export default modelName;
