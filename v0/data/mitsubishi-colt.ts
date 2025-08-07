
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
    { name: 'Normál metál', price: 150000 },
    { name: 'Speciális metál: Sunrise Red (piros)', price: 170000 },
];

const inviteVariant: CarVariant = {
  variantName: 'Invite',
  engineVariants: [
    createEngineVariant(
      '1.0 MPI',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      6999000,
      {
        horsepower: 67,
        engineDisplacement: 999,
        consumption: 5.2,
        acceleration0to100: 17.1,
        topSpeed: 160,
        fuelTankCapacity: 42,
        cargoVolumeSeatsUp: 391,
        range: 807,
        speakerCount: 6,
      },
      6399000
    ),
    createEngineVariant(
      '1.0 MPI-T',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      7299000,
      {
        horsepower: 91,
        engineDisplacement: 999,
        consumption: 5.0,
        acceleration0to100: 12.2,
        topSpeed: 174,
        fuelTankCapacity: 42,
        cargoVolumeSeatsUp: 391,
        range: 840,
        speakerCount: 6,
      },
      6599000
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
        7599000,
        {
          horsepower: 91,
          engineDisplacement: 999,
          consumption: 5.0,
          acceleration0to100: 12.2,
          topSpeed: 174,
          fuelTankCapacity: 42,
          cargoVolumeSeatsUp: 391,
          range: 840,
          speakerCount: 6,
        },
        6799000
      ),
      createEngineVariant(
        '1.6 HEV',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        9999000,
        {
          horsepower: 143,
          engineDisplacement: 1598,
          consumption: 4.1,
          acceleration0to100: 9.3,
          topSpeed: 180,
          fuelTankCapacity: 39,
          cargoVolumeSeatsUp: 301,
          range: 951,
          speakerCount: 6,
        },
        8999000
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
        '1.0 MPI-T',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        7999000,
        {
          horsepower: 91,
          engineDisplacement: 999,
          consumption: 5.0,
          acceleration0to100: 12.2,
          topSpeed: 174,
          fuelTankCapacity: 42,
          cargoVolumeSeatsUp: 391,
          range: 840,
          speakerCount: 6,
        },
        6999000
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
        '1.0 MPI-T',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        8899000,
        {
          horsepower: 91,
          engineDisplacement: 999,
          consumption: 5.0,
          acceleration0to100: 12.2,
          topSpeed: 174,
          fuelTankCapacity: 42,
          cargoVolumeSeatsUp: 391,
          range: 840,
          speakerCount: 6,
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


const modelName = createCarModel(
  'Mitsubishi',
  'Colt',
  DiscountTarget.NONE,
  [
    inviteVariant,
    invitePlusVariant,
    intenseVariant,
    instyleVariant
  ]
);

export default modelName;
