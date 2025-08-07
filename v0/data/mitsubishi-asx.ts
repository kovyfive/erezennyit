
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
        horsepower: 91,
        engineDisplacement: 999,
        consumption: 5.7,
        acceleration0to100: 14,
        topSpeed: 168,
        fuelTankCapacity: 48,
        cargoVolumeSeatsUp: 422,
        range: 842,
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

const invitePlusVariant: CarVariant = {
    variantName: 'Invite Plus',
    engineVariants: [
        createEngineVariant(
            '1.0 MPI-T',
            EngineType.BENZIN,
            TransmissionType.MANUAL,
            9599000,
            {
              horsepower: 91,
              engineDisplacement: 999,
              consumption: 5.7,
              acceleration0to100: 14,
              topSpeed: 168,
              fuelTankCapacity: 48,
              cargoVolumeSeatsUp: 422,
              range: 842,
              speakerCount: 6,
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
          engineDisplacement: 1332,
          consumption: 6.3,
          acceleration0to100: 10.9,
          topSpeed: 196,
          fuelTankCapacity: 48,
          cargoVolumeSeatsUp: 422,
          range: 761,
          speakerCount: 6,
        },
        9449000
      ),
      createEngineVariant(
        '1.3 DI-T MHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        11299000,
        {
          horsepower: 158,
          engineDisplacement: 1332,
          consumption: 5.9,
          acceleration0to100: 8.5,
          topSpeed: 204,
          fuelTankCapacity: 48,
          cargoVolumeSeatsUp: 422,
          range: 813,
          speakerCount: 6,
        },
        10199000
      ),
      createEngineVariant(
        '1.6 HEV',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        12849000,
        {
          horsepower: 143,
          engineDisplacement: 1598,
          consumption: 4.9,
          acceleration0to100: 10.2,
          topSpeed: 170,
          fuelTankCapacity: 48,
          cargoVolumeSeatsUp: 328,
          range: 979,
          speakerCount: 6,
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
          engineDisplacement: 1332,
          consumption: 6.3,
          acceleration0to100: 10.9,
          topSpeed: 196,
          fuelTankCapacity: 48,
          cargoVolumeSeatsUp: 422,
          range: 761,
          speakerCount: 6,
        },
        9999000
      ),
      createEngineVariant(
        '1.3 DI-T MHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        11949000,
        {
          horsepower: 158,
          engineDisplacement: 1332,
          consumption: 5.9,
          acceleration0to100: 8.5,
          topSpeed: 204,
          fuelTankCapacity: 48,
          cargoVolumeSeatsUp: 422,
          range: 813,
          speakerCount: 6,
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
          horsepower: 158,
          engineDisplacement: 1332,
          consumption: 5.9,
          acceleration0to100: 8.5,
          topSpeed: 204,
          fuelTankCapacity: 48,
          cargoVolumeSeatsUp: 422,
          range: 813,
          speakerCount: 6,
        },
        11849000
      ),
            createEngineVariant(
        '1.6 HEV',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        14549000,
        {
          horsepower: 143,
          engineDisplacement: 1598,
          consumption: 4.9,
          acceleration0to100: 10.2,
          topSpeed: 170,
          fuelTankCapacity: 48,
          cargoVolumeSeatsUp: 328,
          range: 979,
          speakerCount: 6,
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
