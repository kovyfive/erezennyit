
import { CarModel, EngineType, TransmissionType, DiscountTarget, CarVariant } from '../model/model';
import { createCarModel } from '../model/model-helpers';
import { createEngineVariant, createDefaultFeatures } from '../model/model-helpers';

const colors = [
    { name: 'Fiord kék', price: 0 },
    { name: 'Desire piros metál', price: 476250 },
    { name: 'Gleccser fehér metál', price: 283210 },
    { name: 'Magnetic szürke metál', price: 283210 },
    { name: 'Midnight fekete metál', price: 283210 },
    { name: 'Zafír kék metál', price: 283210 },
    { name: 'Grafén szürke metál', price: 476250 },
];

const jubileumVariant: CarVariant = {
  variantName: 'Jubileum',
  engineVariants: [
    createEngineVariant(
      '1.5 TSI Jubileum',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      9198165,
      {
        horsepower: 115,
        engineDisplacement: 1498,
        consumption: 5.6,
        acceleration0to100: 10.2,
        topSpeed: 202,
        fuelTankCapacity: 45,
        cargoVolumeSeatsUp: 620,
        range: 804,
        speakerCount: 7,
      },
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
        frontParkingSensors: true,
        rearParkingSensors: true,
    },
    convenience: {
        ...createDefaultFeatures().convenience,
        keylessStart: true,
        frontPowerWindows: true,
        rearPowerWindows: true,
        heatedFrontSeats: true,
    },
    entertainment: {
        ...createDefaultFeatures().entertainment,
        wiredCarPlayAndroidAuto: true,
    },
    interiorExterior: {
        ...createDefaultFeatures().interiorExterior,
        roofRails: true,
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
        '1.5 TSI Style',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        10962195,
        {
          horsepower: 115,
          engineDisplacement: 1498,
          consumption: 5.6,
          acceleration0to100: 10.2,
          topSpeed: 202,
          fuelTankCapacity: 45,
          cargoVolumeSeatsUp: 620,
          range: 804,
          speakerCount: 7,
        },
      ),
      createEngineVariant(
        '1.5 TSI Style',
        EngineType.BENZIN,
        TransmissionType.MANUAL,
        11831150,
        {
          horsepower: 150,
          engineDisplacement: 1498,
          consumption: 5.6,
          acceleration0to100: 8.9,
          topSpeed: 221,
          fuelTankCapacity: 45,
          cargoVolumeSeatsUp: 620,
          range: 804,
          speakerCount: 7,
        },
      ),
      createEngineVariant(
        '2.0 TDI Style',
        EngineType.DIESEL,
        TransmissionType.MANUAL,
        12256325,
        {
          horsepower: 115,
          engineDisplacement: 1968,
          consumption: 4.6,
          acceleration0to100: 10.5,
          topSpeed: 202,
          fuelTankCapacity: 45,
          cargoVolumeSeatsUp: 620,
          range: 978,
          speakerCount: 7,
        },
      ),
      createEngineVariant(
        '2.0 TDI DSG Style',
        EngineType.DIESEL,
        TransmissionType.AUTOMATIC,
        13949510,
        {
          horsepower: 150,
          engineDisplacement: 1968,
          consumption: 4.8,
          acceleration0to100: 8.9,
          topSpeed: 218,
          fuelTankCapacity: 45,
          cargoVolumeSeatsUp: 620,
          range: 938,
          speakerCount: 7,
        },
      ),
      createEngineVariant(
        '1.5 TSI DSG Style mHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        12152185,
        {
          horsepower: 115,
          engineDisplacement: 1498,
          consumption: 5.2,
          acceleration0to100: 10.2,
          topSpeed: 202,
          fuelTankCapacity: 45,
          cargoVolumeSeatsUp: 620,
          range: 865,
          speakerCount: 7,
        },
      ),
      createEngineVariant(
        '1.5 TSI DSG Style mHEV',
        EngineType.MILD_HYBRID,
        TransmissionType.AUTOMATIC,
        13019870,
        {
          horsepower: 150,
          engineDisplacement: 1498,
          consumption: 5.2,
          acceleration0to100: 8.9,
          topSpeed: 221,
          fuelTankCapacity: 45,
          cargoVolumeSeatsUp: 620,
          range: 865,
          speakerCount: 7,
        },
      ),
    ],
    features: {
      ...jubileumVariant.features,
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };

  const frVariant: CarVariant = {
    variantName: 'FR',
    engineVariants: [
        createEngineVariant(
            '1.5 TSI FR',
            EngineType.BENZIN,
            TransmissionType.MANUAL,
            11833415,
            {
              horsepower: 115,
              engineDisplacement: 1498,
              consumption: 5.6,
              acceleration0to100: 10.2,
              topSpeed: 202,
              fuelTankCapacity: 45,
              cargoVolumeSeatsUp: 620,
              range: 804,
              speakerCount: 7,
            },
          ),
          createEngineVariant(
            '1.5 TSI FR',
            EngineType.BENZIN,
            TransmissionType.MANUAL,
            12702370,
            {
              horsepower: 150,
              engineDisplacement: 1498,
              consumption: 5.6,
              acceleration0to100: 8.9,
              topSpeed: 221,
              fuelTankCapacity: 45,
              cargoVolumeSeatsUp: 620,
              range: 804,
              speakerCount: 7,
            },
          ),
          createEngineVariant(
            '2.0 TDI DSG FR',
            EngineType.DIESEL,
            TransmissionType.AUTOMATIC,
            14820730,
            {
              horsepower: 150,
              engineDisplacement: 1968,
              consumption: 4.7,
              acceleration0to100: 8.9,
              topSpeed: 218,
              fuelTankCapacity: 45,
              cargoVolumeSeatsUp: 620,
              range: 957,
              speakerCount: 7,
            },
          ),
          createEngineVariant(
            '1.5 TSI DSG FR mHEV',
            EngineType.MILD_HYBRID,
            TransmissionType.AUTOMATIC,
            13028485,
            {
              horsepower: 115,
              engineDisplacement: 1498,
              consumption: 5.2,
              acceleration0to100: 10.2,
              topSpeed: 202,
              fuelTankCapacity: 45,
              cargoVolumeSeatsUp: 620,
              range: 865,
              speakerCount: 7,
            },
          ),
          createEngineVariant(
            '1.5 TSI DSG FR mHEV',
            EngineType.MILD_HYBRID,
            TransmissionType.AUTOMATIC,
            13896170,
            {
              horsepower: 150,
              engineDisplacement: 1498,
              consumption: 5.2,
              acceleration0to100: 8.9,
              topSpeed: 221,
              fuelTankCapacity: 45,
              cargoVolumeSeatsUp: 620,
              range: 865,
              speakerCount: 7,
            },
          ),
          createEngineVariant(
            '1.5 TSI DSG FR pHEV',
            EngineType.PHEV,
            TransmissionType.AUTOMATIC,
            17516940,
            {
              horsepower: 150,
              engineDisplacement: 1395,
              consumption: 0.1,
              acceleration0to100: 7.7,
              topSpeed: 220,
              fuelTankCapacity: 40,
              cargoVolumeSeatsUp: 470,
              range: 100,
              speakerCount: 7,
            },
          ),
    ],
    features: {
        ...styleVariant.features,
        interiorExterior: {
            ...styleVariant.features.interiorExterior,
            tintedRearWindows: true,
        }
    },
    customColorPrices: colors,
    packages: [],
    leatherSeatPackages: []
  };


const modelName = createCarModel(
  'Seat',
  'Leon Kombi',
  DiscountTarget.NONE,
  [
    jubileumVariant,
    styleVariant,
    frVariant
  ]
);

export default modelName;
