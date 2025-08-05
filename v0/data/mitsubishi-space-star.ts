
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
    { name: 'Metálfényezés', price: 150000 },
];

const entryVariant: CarVariant = {
  variantName: 'Entry',
  engineVariants: [
    createEngineVariant(
      '1.2 MIVEC',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      4440000,
      {
        horsepower: 71,
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

const informVariant: CarVariant = {
    variantName: 'Inform',
    engineVariants: [
      createEngineVariant(
        '1.2 MIVEC',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        4980000,
        {
          horsepower: 71,
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

  const invitePlusVariant: CarVariant = {
    variantName: 'Invite Plus',
    engineVariants: [
      createEngineVariant(
        '1.2 MIVEC',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        5640000,
        {
          horsepower: 71,
        },
      ),
      createEngineVariant(
        '1.2 MIVEC',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        6150000,
        {
          horsepower: 71,
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

  const intenseNaviVariant: CarVariant = {
    variantName: 'Intense Navi',
    engineVariants: [
      createEngineVariant(
        '1.2 MIVEC',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        6250000,
        {
          horsepower: 71,
        },
      ),
      createEngineVariant(
        '1.2 MIVEC',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        6760000,
        {
          horsepower: 71,
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
  'Mitsubishi',
  'Space Star',
  DiscountTarget.NONE,
  [
    entryVariant,
    informVariant,
    invitePlusVariant,
    intenseNaviVariant
  ]
);

export default modelName;
