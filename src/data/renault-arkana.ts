
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
    { name: 'Jégfehér', price: 0 },
    { name: 'Kassziopeia szürke', price: 190000 },
    { name: 'Fekete gyémánt', price: 190000 },
    { name: 'Gyöngyházfehér', price: 240000 },
    { name: 'Indigó kék', price: 240000 },
    { name: 'Lángvörös', price: 240000 },
    { name: 'Matt metálszürke', price: 240000 },
];

const technoVariant: CarVariant = {
  variantName: 'techno',
  engineVariants: [
    createEngineVariant(
      'mild hybrid 140 EDC',
      EngineType.MILD_HYBRID,
      TransmissionType.AUTOMATIC,
      12849000,
      {
        horsepower: 140,
        consumption: 5.8,
        acceleration0to100: 9.8,
        topSpeed: 205,
        cargoVolumeSeatsUp: 513,
      },
      11649000
    ),
    createEngineVariant(
      'full hybrid E-Tech 145',
      EngineType.FULL_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      13449000,
      {
        horsepower: 145,
        consumption: 4.8,
        acceleration0to100: 10.8,
        topSpeed: 172,
        cargoVolumeSeatsUp: 480,
      },
      12049000
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
        reversingRadar: true,
        frontParkingSensor: true,
        rearParkingSensor: true,
        parkingCameras: true,
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

const espritAlpineVariant: CarVariant = {
    variantName: 'esprit Alpine',
    engineVariants: [
      createEngineVariant(
        'mild hybrid 140 EDC',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        13999000,
        {
          horsepower: 140,
          consumption: 5.8,
          acceleration0to100: 9.8,
          topSpeed: 205,
          cargoVolumeSeatsUp: 513,
        },
        12799000
      ),
      createEngineVariant(
        'full hybrid E-Tech 145',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        14399000,
        {
          horsepower: 145,
          consumption: 4.8,
          acceleration0to100: 10.8,
          topSpeed: 172,
          cargoVolumeSeatsUp: 480,
        },
        12999000
      ),
    ],
    features: {
      ...technoVariant.features,
      convenience: {
          ...technoVariant.features.convenience,
          heatedFrontSeats: true,
      },
      interiorExterior: {
            ...technoVariant.features.interiorExterior,
            tintedRearWindows: true,
      }
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };


const modelName = new CarModel(
  'Renault',
  'Arkana',
  DiscountTarget.NONE,
  [
    technoVariant,
    espritAlpineVariant
  ]
);

export default modelName;
