
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
    { name: 'Grafik szürke', price: 150000 },
    { name: 'Impakt réz', price: 0 },
    { name: 'Karbon fekete', price: 240000 },
    { name: 'Kristall ezüst', price: 240000 },
    { name: 'Spektrum zöld', price: 240000 },
];

const editionVariant: CarVariant = {
  variantName: 'Edition',
  engineVariants: [
    createEngineVariant(
      'Hybrid hajtáslánc (107 kW/145 LE)',
      EngineType.FULL_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      13850000,
      {
        horsepower: 145,
        consumption: 5.5,
        acceleration0to100: 10.2,
        topSpeed: 202,
        cargoVolumeSeatsUp: 550,
      },
      11990000
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
        dualZoneAC: true,
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
        'Hybrid hajtáslánc (107 kW/145 LE)',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        14850000,
        {
          horsepower: 145,
          consumption: 5.5,
          acceleration0to100: 10.2,
          topSpeed: 202,
          cargoVolumeSeatsUp: 550,
        },
        12990000
      ),
    ],
    features: {
      ...editionVariant.features,
      convenience: {
          ...editionVariant.features.convenience,
          heatedFrontSeats: true,
          wirelessPhoneCharger: true,
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
  'Grandland',
  DiscountTarget.NONE,
  [
    editionVariant,
    gsVariant
  ]
);

export default modelName;
