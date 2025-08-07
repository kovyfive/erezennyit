
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

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
        engineDisplacement: 1199,
        consumption: 5.5,
        acceleration0to100: 10.2,
        topSpeed: 202,
        fuelTankCapacity: 55,
        cargoVolumeSeatsUp: 550,
        range: 1000,
        speakerCount: 6,
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
          engineDisplacement: 1199,
          consumption: 5.5,
          acceleration0to100: 10.2,
          topSpeed: 202,
          fuelTankCapacity: 55,
          cargoVolumeSeatsUp: 550,
          range: 1000,
          speakerCount: 6,
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


const modelName = createCarModel(
  'Opel',
  'Grandland',
  DiscountTarget.NONE,
  [
    editionVariant,
    gsVariant
  ]
);

export default modelName;
