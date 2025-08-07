
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

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
        horsepower: 248,
        engineDisplacement: 2360,
        consumption: 1.8,
        acceleration0to100: 10.5,
        topSpeed: 170,
        fuelTankCapacity: 43,
        cargoVolumeSeatsUp: 362,
        range: 687,
        speakerCount: 6,
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
          horsepower: 248,
          engineDisplacement: 2360,
          consumption: 1.8,
          acceleration0to100: 10.5,
          topSpeed: 170,
          fuelTankCapacity: 43,
          cargoVolumeSeatsUp: 362,
          range: 687,
          speakerCount: 6,
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
          horsepower: 248,
          engineDisplacement: 2360,
          consumption: 1.8,
          acceleration0to100: 10.5,
          topSpeed: 170,
          fuelTankCapacity: 43,
          cargoVolumeSeatsUp: 362,
          range: 687,
          speakerCount: 6,
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
          horsepower: 248,
          engineDisplacement: 2360,
          consumption: 1.8,
          acceleration0to100: 10.5,
          topSpeed: 170,
          fuelTankCapacity: 43,
          cargoVolumeSeatsUp: 362,
          range: 687,
          speakerCount: 6,
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
          horsepower: 248,
          engineDisplacement: 2360,
          consumption: 1.8,
          acceleration0to100: 10.5,
          topSpeed: 170,
          fuelTankCapacity: 43,
          cargoVolumeSeatsUp: 362,
          range: 687,
          speakerCount: 6,
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


const modelName = createCarModel(
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
