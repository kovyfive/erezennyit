
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
    { name: 'Normál metál', price: 170000 },
    { name: 'Speciális metál', price: 270000 },
    { name: 'Normál / Speciális metál fekete tetővel', price: 270000 },
];

const informVariant: CarVariant = {
  variantName: 'Inform',
  engineVariants: [
    createEngineVariant(
      '1.0 MPI-T',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      8999000,
      {
        horsepower: 90,
      },
      7999000
    ),
  ],
  features: {
    ...createDefaultFeatures(),
  },
  customColorPrices: colors,
  packages: [],
  leatherSeatPackages: []
};

const invitePlusVariant: CarVariant = {
    variantName: 'Invite Plus',
    engineVariants: [
        createEngineVariant(
            '1.0 MPI-T',
            EngineType.BENZIN,
            TransmissionType.MANUAL,
            9599000,
            {
              horsepower: 90,
            },
            8599000
          ),
      createEngineVariant(
        '1.3 DI-T MHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.MANUAL,
        10449000,
        {
          horsepower: 140,
        },
        9449000
      ),
      createEngineVariant(
        '1.3 DI-T MHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        11299000,
        {
          horsepower: 160,
        },
        10199000
      ),
      createEngineVariant(
        '1.6 HEV',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        12849000,
        {
          horsepower: 145,
        },
        12149000
      ),
    ],
    features: {
      ...createDefaultFeatures(),
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };

  const intenseVariant: CarVariant = {
    variantName: 'Intense',
    engineVariants: [
      createEngineVariant(
        '1.3 DI-T MHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.MANUAL,
        11099000,
        {
          horsepower: 140,
        },
        9999000
      ),
      createEngineVariant(
        '1.3 DI-T MHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        11949000,
        {
          horsepower: 160,
        },
        10849000
      ),
    ],
    features: {
      ...createDefaultFeatures(),
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };

  const instyleVariant: CarVariant = {
    variantName: 'Instyle',
    engineVariants: [
      createEngineVariant(
        '1.3 DI-T MHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        13349000,
        {
          horsepower: 160,
        },
        11849000
      ),
      createEngineVariant(
        '1.6 HEV',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        14549000,
        {
          horsepower: 145,
        },
        13549000
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
  'Mitsubishi',
  'ASX',
  DiscountTarget.NONE,
  [
    informVariant,
    invitePlusVariant,
    intenseVariant,
    instyleVariant
  ]
);

export default modelName;
