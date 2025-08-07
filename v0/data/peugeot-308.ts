
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant } from '../model/model';
import { createCarModel, createDefaultFeatures } from '../model/model-helpers';
import { createEngineVariant } from '../model/model-helpers';

// Define packages available for this model
const commonPackages = [
  { name: 'Parkoló csomag ALLURE', price: 550000 },
  { name: 'Komfort csomag', price: 300000 },
  { name: 'Komfort csomag SW', price: 370000 },
  { name: 'Kulcs nélküli + Navigáció csomag', price: 410000 },
  { name: 'Parkoló csomag GT SW', price: 560000 },
  { name: 'Parkoló csomag GT', price: 390000 },
  { name: 'Panoráma + HiFi csomag', price: 810000 },
];

// Define color options
const colors = [
    { name: 'Avatar kék metálfényezés', price: 0 },
    { name: 'Okénite fehér metálfényezés', price: 150000 },
    { name: 'Artense szürke metálfényezés', price: 150000 },
    { name: 'Perla Nera fekete metálfényezés', price: 150000 },
    { name: 'Selenium szürke metálfényezés', price: 150000 },
    { name: 'Obsession kék metálfényezés', price: 0 },
    { name: 'Elixir piros színezett lakkfényezés', price: 230000 },
];

const styleVariant: CarVariant = {
  variantName: 'Style',
  engineVariants: [
    createEngineVariant(
      'Hybrid 145 LE e-DCT6',
      EngineType.FULL_HYBRID,
      TransmissionType.HYBRID_AUTOMATIC,
      12620000,
      {
        horsepower: 145,
        engineDisplacement: 1199,
        consumption: 5,
        acceleration0to100: 9,
        topSpeed: 210,
        fuelTankCapacity: 52,
        cargoVolumeSeatsUp: 361,
        speakerCount: 6,
      },
      11120000
    ),
    createEngineVariant(
      'BlueHDi 130 LE EAT8',
      EngineType.DIESEL,
      TransmissionType.AUTOMATIC,
      12530000,
      {
        horsepower: 131,
        engineDisplacement: 1499,
        consumption: 5.1,
        acceleration0to100: 10.6,
        topSpeed: 207,
        fuelTankCapacity: 53,
        cargoVolumeSeatsUp: 412,
        speakerCount: 6,
      },
      11030000
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
    interiorExterior: {
        ...createDefaultFeatures().interiorExterior,
        spareTire: true,
    }
  },
  customColorPrices: colors,
  packages: commonPackages,
  leatherSeatPackages: []
};

const allureVariant: CarVariant = {
    variantName: 'Allure',
    engineVariants: [
      createEngineVariant(
        'Hybrid 145 LE e-DCT6',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        13420000,
        {
          horsepower: 145,
          engineDisplacement: 1199,
          consumption: 5,
          acceleration0to100: 9,
          topSpeed: 210,
          fuelTankCapacity: 52,
          cargoVolumeSeatsUp: 361,
          range: 1040,
          speakerCount: 6,
        },
        11620000
      ),
      createEngineVariant(
        'BlueHDi 130 LE EAT8',
        EngineType.DIESEL,
        TransmissionType.AUTOMATIC,
        13320000,
        {
          horsepower: 131,
          engineDisplacement: 1499,
          consumption: 5.1,
          acceleration0to100: 10.6,
          topSpeed: 207,
          fuelTankCapacity: 53,
          cargoVolumeSeatsUp: 412,
          range: 1039,
          speakerCount: 6,
        },
        11520000
      ),
      createEngineVariant(
          'PHEV 195 LE e-DCT7',
          EngineType.PHEV,
          TransmissionType.HYBRID_AUTOMATIC,
          17510000,
          {
            horsepower: 195,
            engineDisplacement: 1598,
            consumption: 1.2,
            acceleration0to100: 7.6,
            topSpeed: 225,
            fuelTankCapacity: 42,
            cargoVolumeSeatsUp: 361,
            range: 85,
            speakerCount: 6,
          },
          16010000
        ),
    ],
    features: {
      ...styleVariant.features,
      parkingAssistance: {
          ...styleVariant.features.parkingAssistance,
          frontParkingSensors: true,
          parkingCameras: true,
      },
    },
    customColorPrices: colors,
    packages: commonPackages,
    leatherSeatPackages: []
  };

  const gtVariant: CarVariant = {
    variantName: 'GT',
    engineVariants: [
      createEngineVariant(
        'Hybrid 145 LE e-DCT6',
        EngineType.FULL_HYBRID,
        TransmissionType.HYBRID_AUTOMATIC,
        14630000,
        {
          horsepower: 145,
          engineDisplacement: 1199,
          consumption: 5,
          acceleration0to100: 9,
          topSpeed: 210,
          fuelTankCapacity: 52,
          cargoVolumeSeatsUp: 361,
          range: 1040,
          speakerCount: 6,
        },
        12630000
      ),
      createEngineVariant(
        'BlueHDi 130 LE EAT8',
        EngineType.DIESEL,
        TransmissionType.AUTOMATIC,
        14540000,
        {
          horsepower: 131,
          engineDisplacement: 1499,
          consumption: 5.1,
          acceleration0to100: 10.6,
          topSpeed: 207,
          fuelTankCapacity: 53,
          cargoVolumeSeatsUp: 412,
          range: 1039,
          speakerCount: 6,
        },
        12540000
      ),
      createEngineVariant(
          'PHEV 195 LE e-DCT7',
          EngineType.PHEV,
          TransmissionType.HYBRID_AUTOMATIC,
          18750000,
          {
            horsepower: 195,
            engineDisplacement: 1598,
            consumption: 1.2,
            acceleration0to100: 7.6,
            topSpeed: 225,
            fuelTankCapacity: 42,
            cargoVolumeSeatsUp: 361,
            range: 85,
            speakerCount: 6,
          },
          17250000
        ),
    ],
    features: {
        ...allureVariant.features,
        safety: {
            ...allureVariant.features.safety,
            smartCruiseControlWithStopAndGo: true,
        },
        convenience: {
            ...allureVariant.features.convenience,
        },
        interiorExterior: {
            ...allureVariant.features.interiorExterior,
            metalPedals: true,
        }
    },
    customColorPrices: colors,
    packages: commonPackages,
    leatherSeatPackages: []
  };

const modelName = createCarModel(
  'Peugeot',
  '308',
  DiscountTarget.PRIVATE,
  [
    styleVariant,
    allureVariant,
    gtVariant
  ]
);

export default modelName;
