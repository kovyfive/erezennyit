
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
    { name: 'Arktis fehér', price: 0 },
    { name: 'Athletik kék', price: 0 },
    { name: 'Kristall ezüst', price: 190000 },
    { name: 'Grafik szürke', price: 190000 },
    { name: 'Karbon fekete', price: 190000 },
];

const editionVariant: CarVariant = {
  variantName: 'Edition',
  engineVariants: [
    createEngineVariant(
      'Turbo benzin (96 kW / 130 LE)',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      10950000,
      {
        horsepower: 130,
        consumption: 5.9,
        acceleration0to100: 10,
        topSpeed: 210,
        cargoVolumeSeatsUp: 597,
      },
      9190000
    ),
    createEngineVariant(
      'Turbo benzin (96 kW / 130 LE)',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      11630000,
      {
        horsepower: 130,
        consumption: 6.1,
        acceleration0to100: 9.9,
        topSpeed: 210,
        cargoVolumeSeatsUp: 597,
      },
      9880000
    ),
    createEngineVariant(
      'Hybrid hajtáslánc (107 kW/145 LE)',
      EngineType.FULL_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      12310000,
      {
        horsepower: 145,
        consumption: 5.1,
        acceleration0to100: 9.3,
        topSpeed: 210,
        cargoVolumeSeatsUp: 597,
      },
      10560000
    ),
    createEngineVariant(
      'Turbo dízel (96 kW / 130 LE)',
      EngineType.DIESEL,
      TransmissionType.AUTOMATIC,
      12420000,
      {
        horsepower: 130,
        consumption: 5.1,
        acceleration0to100: 11,
        topSpeed: 208,
        cargoVolumeSeatsUp: 597,
      },
      10670000
    ),
  ],
  features: {
    ...createDefaultFeatures(),
    safety: {
        ...createDefaultFeatures().safety,
        laneKeepAssist: true,
        cruiseControl: true,
        isofix: true,
    },
    parkingAssistance: {
        ...createDefaultFeatures().parkingAssistance,
        frontParkingSensor: true,
        rearParkingSensor: true,
    },
    convenience: {
        ...createDefaultFeatures().convenience,
        keylessStart: true,
        frontPowerWindows: true,
        rearPowerWindows: true,
    },
    entertainment: {
        ...createDefaultFeatures().entertainment,
        wiredCarPlayAndroidAuto: true,
    },
  },
  customColorPrices: colors,
  packages: [],
  leatherSeatPackages: []
};

const gsVariant: CarVariant = {
    variantName: 'GS',
    engineVariants: [
      createEngineVariant(
        'Turbo benzin (96 kW / 130 LE)',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        12030000,
        {
          horsepower: 130,
          consumption: 5.9,
          acceleration0to100: 10,
          topSpeed: 210,
          cargoVolumeSeatsUp: 597,
        },
        10280000
      ),
      createEngineVariant(
        'Turbo benzin (96 kW / 130 LE)',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        12710000,
        {
          horsepower: 130,
          consumption: 6.1,
          acceleration0to100: 9.9,
          topSpeed: 210,
          cargoVolumeSeatsUp: 597,
        },
        10960000
      ),
      createEngineVariant(
        'Hybrid hajtáslánc (107 kW/145 LE)',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        13390000,
        {
          horsepower: 145,
          consumption: 5.1,
          acceleration0to100: 9.3,
          topSpeed: 210,
          cargoVolumeSeatsUp: 597,
        },
        11640000
      ),
      createEngineVariant(
        'Turbo dízel (96 kW / 130 LE)',
        EngineType.DIESEL,
        TransmissionType.AUTOMATIC,
        13500000,
        {
          horsepower: 130,
          consumption: 5.1,
          acceleration0to100: 11,
          topSpeed: 208,
          cargoVolumeSeatsUp: 597,
        },
        11750000
      ),
    ],
    features: {
      ...editionVariant.features,
      parkingAssistance: {
          ...editionVariant.features.parkingAssistance,
          parkingCameras360View: true,
      },
      convenience: {
          ...editionVariant.features.convenience,
          heatedFrontSeats: true,
          dualZoneAC: true,
      },
      interiorExterior: {
          ...editionVariant.features.interiorExterior,
          tintedRearWindows: true,
      }
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };


const modelName = createCarModel(
  'Opel',
  'Astra Sports Tourer',
  DiscountTarget.NONE,
  [
    editionVariant,
    gsVariant
  ]
);

export default modelName;
