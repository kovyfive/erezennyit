
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
    { name: 'Atlas White', price: 100000 },
    { name: 'Metál', price: 200000 },
    { name: 'Kéttónusú', price: 300000 },
];

const comfortVariant: CarVariant = {
  variantName: 'Comfort',
  engineVariants: [
    createEngineVariant(
      '1.0 T-GDi',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      9499000,
      {
        horsepower: 100,
        engineDisplacement: 998,
        consumption: 5.6,
        acceleration0to100: 11.7,
        topSpeed: 180,
        fuelTankCapacity: 47,
        cargoVolumeSeatsUp: 466,
        range: 839,
        speakerCount: 6,
      },
    ),
    createEngineVariant(
      '1.6 GDi hybrid MY25',
      EngineType.FULL_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      11199000,
      {
        horsepower: 129,
        engineDisplacement: 1580,
        consumption: 4.5,
        acceleration0to100: 11.2,
        topSpeed: 165,
        fuelTankCapacity: 38,
        cargoVolumeSeatsUp: 466,
        range: 844,
        speakerCount: 6,
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

const primeVariant: CarVariant = {
    variantName: 'Prime',
    engineVariants: [
      createEngineVariant(
        '1.0 T-GDi',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        10799000,
        {
          horsepower: 100,
          engineDisplacement: 998,
          consumption: 5.6,
          acceleration0to100: 11.7,
          topSpeed: 180,
          fuelTankCapacity: 47,
          cargoVolumeSeatsUp: 466,
          range: 839,
          speakerCount: 6,
        },
        10499000
      ),
      createEngineVariant(
        '1.6 T-GDi LP',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        11199000,
        {
          horsepower: 138,
          engineDisplacement: 1598,
          consumption: 6.5,
          acceleration0to100: 8.7,
          topSpeed: 205,
          fuelTankCapacity: 47,
          cargoVolumeSeatsUp: 466,
          range: 723,
          speakerCount: 6,
        },
        10899000
      ),
      createEngineVariant(
        '1.6 T-GDi LP',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        11999000,
        {
          horsepower: 138,
          engineDisplacement: 1598,
          consumption: 6.5,
          acceleration0to100: 8.7,
          topSpeed: 205,
          fuelTankCapacity: 47,
          cargoVolumeSeatsUp: 466,
          range: 723,
          speakerCount: 6,
        },
        11699000
      ),
      createEngineVariant(
        '1.6 T-GDI HP',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        13099000,
        {
          horsepower: 170,
          engineDisplacement: 1598,
          consumption: 6.5,
          acceleration0to100: 7.8,
          topSpeed: 210,
          fuelTankCapacity: 47,
          cargoVolumeSeatsUp: 466,
          range: 723,
          speakerCount: 6,
        },
        12799000
      ),
      createEngineVariant(
        '1.6 GDi hybrid MY25',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        12399000,
        {
          horsepower: 129,
          engineDisplacement: 1580,
          consumption: 4.5,
          acceleration0to100: 11.2,
          topSpeed: 165,
          fuelTankCapacity: 38,
          cargoVolumeSeatsUp: 466,
          range: 844,
          speakerCount: 6,
        },
        12099000
      ),
    ],
    features: {
      ...createDefaultFeatures(),
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };

  const styleVariant: CarVariant = {
    variantName: 'Style',
    engineVariants: [
      createEngineVariant(
        '1.6 T-GDi LP',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        11599000,
        {
          horsepower: 138,
          engineDisplacement: 1598,
          consumption: 6.5,
          acceleration0to100: 8.7,
          topSpeed: 205,
          fuelTankCapacity: 47,
          cargoVolumeSeatsUp: 466,
          range: 723,
          speakerCount: 6,
        },
        11299000
      ),
      createEngineVariant(
        '1.6 T-GDi LP',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        12399000,
        {
          horsepower: 138,
          engineDisplacement: 1598,
          consumption: 6.5,
          acceleration0to100: 8.7,
          topSpeed: 205,
          fuelTankCapacity: 47,
          cargoVolumeSeatsUp: 466,
          range: 723,
          speakerCount: 6,
        },
        12099000
      ),
      createEngineVariant(
        '1.6 T-GDI HP',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        13499000,
        {
          horsepower: 170,
          engineDisplacement: 1598,
          consumption: 6.5,
          acceleration0to100: 7.8,
          topSpeed: 210,
          fuelTankCapacity: 47,
          cargoVolumeSeatsUp: 466,
          range: 723,
          speakerCount: 6,
        },
        13199000
      ),
      createEngineVariant(
        '1.6 GDi hybrid MY25',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        12799000,
        {
          horsepower: 129,
          engineDisplacement: 1580,
          consumption: 4.5,
          acceleration0to100: 11.2,
          topSpeed: 165,
          fuelTankCapacity: 38,
          cargoVolumeSeatsUp: 466,
          range: 844,
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


const modelName = createCarModel(
  'Hyundai',
  'KONA',
  DiscountTarget.NONE,
  [
    comfortVariant,
    primeVariant,
    styleVariant
  ]
);

export default modelName;
