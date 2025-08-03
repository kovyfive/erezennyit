
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
    { name: 'Normál metál', price: 250000 },
    { name: 'Prémium metál', price: 310000 },
    { name: 'Speciális (diamond) metál', price: 360000 },
    { name: 'Kéttónusú fényezés (fekete/ezüst tető)', price: 200000 },
];

const informVariant: CarVariant = {
  variantName: 'Inform',
  engineVariants: [
    createEngineVariant(
      '2.4 PHEV',
      EngineType.PHEV,
      TransmissionType.SINGLE_SPEED,
      20990000,
      {
        horsepower: 302,
      },
      19990000
    ),
  ],
  features: {
    ...createDefaultFeatures(),
  },
  customColorPrices: colors,
  packages: [],
  leatherSeatPackages: []
};

const inviteVariant: CarVariant = {
    variantName: 'Invite',
    engineVariants: [
      createEngineVariant(
        '2.4 PHEV',
        EngineType.PHEV,
        TransmissionType.SINGLE_SPEED,
        22190000,
        {
          horsepower: 302,
        },
        21190000
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
        '2.4 PHEV',
        EngineType.PHEV,
        TransmissionType.SINGLE_SPEED,
        23790000,
        {
          horsepower: 302,
        },
        22790000
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
        '2.4 PHEV',
        EngineType.PHEV,
        TransmissionType.SINGLE_SPEED,
        25190000,
        {
          horsepower: 302,
        },
        24190000
      ),
    ],
    features: {
      ...createDefaultFeatures(),
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };

  const instylePremiumVariant: CarVariant = {
    variantName: 'Instyle Premium',
    engineVariants: [
      createEngineVariant(
        '2.4 PHEV',
        EngineType.PHEV,
        TransmissionType.SINGLE_SPEED,
        25690000,
        {
          horsepower: 302,
        },
        24690000
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
  'Mitsubishi',
  'Outlander PHEV',
  DiscountTarget.NONE,
  [
    informVariant,
    inviteVariant,
    intenseVariant,
    instyleVariant,
    instylePremiumVariant
  ]
);

export default modelName;
