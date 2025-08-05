
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
      10650000,
      {
        horsepower: 130,
        consumption: 5.8,
        acceleration0to100: 9.7,
        topSpeed: 210,
        cargoVolumeSeatsUp: 422,
      },
      9650000
    ),
    createEngineVariant(
      'Turbo benzin (96 kW / 130 LE)',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      11330000,
      {
        horsepower: 130,
        consumption: 6.0,
        acceleration0to100: 9.7,
        topSpeed: 210,
        cargoVolumeSeatsUp: 422,
      },
      10330000
    ),
    createEngineVariant(
      'Hybrid hajtáslánc (107 kW/145 LE)',
      EngineType.FULL_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      12010000,
      {
        horsepower: 145,
        consumption: 5.0,
        acceleration0to100: 9.0,
        topSpeed: 210,
        cargoVolumeSeatsUp: 422,
      },
      10990000
    ),
    createEngineVariant(
      'Turbo dízel (96 kW / 130 LE)',
      EngineType.DIESEL,
      TransmissionType.AUTOMATIC,
      12120000,
      {
        horsepower: 130,
        consumption: 5.0,
        acceleration0to100: 10.6,
        topSpeed: 209,
        cargoVolumeSeatsUp: 422,
      },
      11120000
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
        11730000,
        {
          horsepower: 130,
          consumption: 5.8,
          acceleration0to100: 9.7,
          topSpeed: 210,
          cargoVolumeSeatsUp: 422,
        },
        10730000
      ),
      createEngineVariant(
        'Turbo benzin (96 kW / 130 LE)',
        EngineType.BENZIN,
        TransmissionType.AUTOMATIC,
        12410000,
        {
          horsepower: 130,
          consumption: 6.0,
          acceleration0to100: 9.7,
          topSpeed: 210,
          cargoVolumeSeatsUp: 422,
        },
        11410000
      ),
      createEngineVariant(
        'Hybrid hajtáslánc (107 kW/145 LE)',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        13090000,
        {
          horsepower: 145,
          consumption: 5.0,
          acceleration0to100: 9.0,
          topSpeed: 210,
          cargoVolumeSeatsUp: 422,
        },
        12090000
      ),
      createEngineVariant(
        'Turbo dízel (96 kW / 130 LE)',
        EngineType.DIESEL,
        TransmissionType.AUTOMATIC,
        13200000,
        {
          horsepower: 130,
          consumption: 5.0,
          acceleration0to100: 10.6,
          topSpeed: 209,
          cargoVolumeSeatsUp: 422,
        },
        12200000
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


const modelName = new CarModel(
  'Opel',
  'Astra',
  DiscountTarget.NONE,
  [
    editionVariant,
    gsVariant
  ]
);

export default modelName;
