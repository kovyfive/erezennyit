
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
        cargoVolumeSeatsUp: 562,
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
        cargoVolumeSeatsUp: 562,
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
        cargoVolumeSeatsUp: 526,
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
          cargoVolumeSeatsUp: 562,
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
          cargoVolumeSeatsUp: 562,
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
          cargoVolumeSeatsUp: 526,
        },
        13349000
      ),
      createEngineVariant(
        '210 Hybrid Benzin',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        14949000,
        {
          horsepower: 210,
          cargoVolumeSeatsUp: 587,
        },
        14349000
      ),
      createEngineVariant(
        '245 Plug-in Hybrid 4WD Benzin',
        EngineType.PHEV,
        TransmissionType.HYBRID_AUTOMATIC,
        18349000,
        {
          horsepower: 245,
          cargoVolumeSeatsUp: 540,
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

const modelName = new CarModel(
  'Kia',
  'Sportage',
  DiscountTarget.PRIVATE,
  [
    silverVariant,
    goldVariant,
  ]
);

export default modelName;
