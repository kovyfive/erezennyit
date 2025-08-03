
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
    { name: 'Hófehér', price: 0 },
    { name: 'Platina gyöngyfehér', price: 300000 },
    { name: 'Nikkelszürke', price: 300000 },
    { name: 'Szürke metál', price: 200000 },
    { name: 'Éjfekete', price: 200000 },
    { name: 'Szürkéskék metál', price: 200000 },
    { name: 'Láva vörös', price: 300000 },
    { name: 'Krómezüst', price: 300000 },
    { name: 'Tealevél mély zöld', price: 300000 },
    { name: 'Érzéki vörös', price: 300000 },
];

const grSportColors = [
    { name: 'GR-S gyöngyfehér', price: 0 },
    { name: 'GR-S króm', price: 0 },
    { name: 'GR-S hamuszürke', price: 0 },
    { name: 'GR-S szürke metál', price: 0 },
    { name: 'GR-S szürkéskék', price: 0 },
    { name: 'GR-S érzéki vörös', price: 0 },
    { name: 'GR-S lávavörös', price: 0 },
]

const activeVariant: CarVariant = {
  variantName: 'Active',
  engineVariants: [
    createEngineVariant(
      '1.8 l Hybrid 140 e-CVT',
      EngineType.FULL_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      12505000,
      {
        horsepower: 140,
        consumption: 4.5,
        acceleration0to100: 9.1,
        topSpeed: 180,
        cargoVolumeSeatsUp: 471,
      },
      10505000
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
    },
    convenience: {
        ...createDefaultFeatures().convenience,
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

const comfortVariant: CarVariant = {
    variantName: 'Comfort',
    engineVariants: [
      createEngineVariant(
        '1.8 l Hybrid 140 e-CVT',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        13000000,
        {
          horsepower: 140,
          consumption: 4.5,
          acceleration0to100: 9.1,
          topSpeed: 180,
          cargoVolumeSeatsUp: 471,
        },
        11000000
      ),
    ],
    features: {
      ...activeVariant.features,
      entertainment: {
          ...activeVariant.features.entertainment,
          wirelessCarPlayAndroidAuto: true,
      }
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };

  const comfortTechVariant: CarVariant = {
    variantName: 'Comfort Tech',
    engineVariants: [
      createEngineVariant(
        '1.8 l Hybrid 140 e-CVT',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        13590000,
        {
          horsepower: 140,
          consumption: 4.5,
          acceleration0to100: 9.1,
          topSpeed: 180,
          cargoVolumeSeatsUp: 471,
        },
        11590000
      ),
    ],
    features: {
      ...comfortVariant.features,
      parkingAssistance: {
          ...comfortVariant.features.parkingAssistance,
          frontParkingSensor: true,
          rearParkingSensor: true,
      },
      convenience: {
            ...comfortVariant.features.convenience,
            keylessStart: true,
            heatedFrontSeats: true,
            wirelessPhoneCharger: true,
      }
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };

  const styleVariant: CarVariant = {
    variantName: 'Style',
    engineVariants: [
      createEngineVariant(
        '1.8 l Hybrid 140 e-CVT',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        14625000,
        {
          horsepower: 140,
          consumption: 4.5,
          acceleration0to100: 9.1,
          topSpeed: 180,
          cargoVolumeSeatsUp: 471,
        },
        12625000
      ),
    ],
    features: {
      ...comfortTechVariant.features,
      interiorExterior: {
          ...comfortTechVariant.features.interiorExterior,
          tintedRearWindows: true,
      }
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };

  const grSportVariant: CarVariant = {
    variantName: 'GR Sport',
    engineVariants: [
      createEngineVariant(
        '1.8 l Hybrid 140 e-CVT',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        15605000,
        {
          horsepower: 140,
          consumption: 4.5,
          acceleration0to100: 9.1,
          topSpeed: 180,
          cargoVolumeSeatsUp: 471,
        },
        13605000
      ),
    ],
    features: {
      ...styleVariant.features,
    },
    customColorPrices: grSportColors,
    packages: [],
    leatherSeatPackages: []
  };

  const executiveVariant: CarVariant = {
    variantName: 'Executive',
    engineVariants: [
      createEngineVariant(
        '1.8 l Hybrid 140 e-CVT',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        15240000,
        {
          horsepower: 140,
          consumption: 4.5,
          acceleration0to100: 9.1,
          topSpeed: 180,
          cargoVolumeSeatsUp: 471,
        },
        13240000
      ),
    ],
    features: {
      ...styleVariant.features,
      safety: {
          ...styleVariant.features.safety,
          blindSpotCollisionAvoidanceAssist: true,
      },
      convenience: {
          ...styleVariant.features.convenience,
          heatedRearSeats: true,
          headUpDisplay: true,
      }
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };


const modelName = new CarModel(
  'Toyota',
  'Corolla Sedan',
  DiscountTarget.PRIVATE,
  [
    activeVariant,
    comfortVariant,
    comfortTechVariant,
    styleVariant,
    grSportVariant,
    executiveVariant
  ]
);

export default modelName;
