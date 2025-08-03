import {
  CarModel,
  EngineType,
  TransmissionType,
  DiscountTarget,
  createEngineVariant,
  createDefaultFeatures,
  CarVariant
} from '../model/model';

// Define packages available for this model
const commonPackages = [
  { name: 'Deluxe Package', price: 250000 },
  { name: 'Safety Package', price: 180000 },
  { name: 'Comfort Package', price: 200000 },
  { name: 'Tech Package', price: 300000 }
];

const leatherOptions = [
  { name: 'Black Leather', price: 350000 },
  { name: 'Beige Leather', price: 350000 }
];

// Define color options
const colors = [
  { name: 'White Pearl', price: 150000 },
  { name: 'Metallic Black', price: 150000 },
  { name: 'Urban Gray', price: 180000 },
  { name: 'Premium Red', price: 200000 }
];

// Create the Silver variant
const silverVariant: CarVariant = {
  variantName: 'Silver',
  engineVariants: [
    createEngineVariant(
      '100 T-GDI',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      7990000,
      {
        engineDisplacement: 998,
        horsepower: 100,
        consumption: 5.2,
        acceleration0to100: 11.4,
        topSpeed: 183,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 625,
        range: 961,
        speakerCount: 6
      },
      7490000,
      800000 // Automatic transmission option price
    ),
    createEngineVariant(
      '140 T-GDI',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      8490000,
      {
        engineDisplacement: 1482,
        horsepower: 140,
        consumption: 5.7,
        acceleration0to100: 9.1,
        topSpeed: 200,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 625,
        range: 877,
        speakerCount: 6
      },
      7990000,
      800000 // Automatic transmission option price
    )
  ],
  features: {
    ...createDefaultFeatures(),
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: 'Safety Package',
      smartCruiseControlWithStopAndGo: false,
      blindSpotCollisionAvoidanceAssist: false,
      isofix: true
    },
    parkingAssistance: {
      reversingRadar: true,
      frontParkingSensor: false,
      rearParkingSensor: true,
      parkingCameras: 'Safety Package',
      parkingCameras360View: false,
      semiOrFullAutomaticParkingAssistant: false,
      electricParkingBrake: true
    },
    convenience: {
      keylessStart: true,
      wirelessPhoneCharger: false,
      powerTailgate: false,
      powerTailgateWithFootSensor: false,
      frontPowerWindows: true,
      rearPowerWindows: true,
      heatedFrontSeats: true,
      heatedRearSeats: false,
      dualZoneAC: true,
      headUpDisplay: false
    },
    entertainment: {
      premiumSpeaker: false,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: false
    },
    interiorExterior: {
      spareTire: true,
      metalPedals: false,
      paddleShifters: 'Deluxe Package',
      velourFloorMats: true,
      rubberMats: false,
      tintedRearWindows: true,
      roofRails: true
    }
  },
  customColorPrices: colors,
  packages: commonPackages,
  leatherSeatPackages: leatherOptions
};

// Create the Gold variant with more features as standard
const goldVariant: CarVariant = {
  variantName: 'Gold',
  engineVariants: [
    createEngineVariant(
      '100 T-GDI',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      8490000,
      {
        engineDisplacement: 998,
        horsepower: 100,
        consumption: 5.2,
        acceleration0to100: 11.4,
        topSpeed: 183,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 625,
        range: 961,
        speakerCount: 8
      },
      7990000,
      800000 // Automatic transmission option price
    ),
    createEngineVariant(
      '140 T-GDI',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      8990000,
      {
        engineDisplacement: 1482,
        horsepower: 140,
        consumption: 5.7,
        acceleration0to100: 9.1,
        topSpeed: 200,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 625,
        range: 877,
        speakerCount: 8
      },
      8490000,
      800000 // Automatic transmission option price
    )
  ],
  features: {
    ...createDefaultFeatures(),
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: true,
      smartCruiseControlWithStopAndGo: 'Safety Package',
      blindSpotCollisionAvoidanceAssist: false,
      isofix: true
    },
    parkingAssistance: {
      reversingRadar: true,
      frontParkingSensor: true,
      rearParkingSensor: true,
      parkingCameras: true,
      parkingCameras360View: 'Tech Package',
      semiOrFullAutomaticParkingAssistant: false,
      electricParkingBrake: true
    },
    convenience: {
      keylessStart: true,
      wirelessPhoneCharger: 'Comfort Package',
      powerTailgate: false,
      powerTailgateWithFootSensor: false,
      frontPowerWindows: true,
      rearPowerWindows: true,
      heatedFrontSeats: true,
      heatedRearSeats: true,
      dualZoneAC: true,
      headUpDisplay: false
    },
    entertainment: {
      premiumSpeaker: false,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: 'Tech Package'
    },
    interiorExterior: {
      spareTire: true,
      metalPedals: false,
      paddleShifters: true,
      velourFloorMats: true,
      rubberMats: false,
      tintedRearWindows: true,
      roofRails: true
    }
  },
  customColorPrices: colors,
  packages: commonPackages,
  leatherSeatPackages: leatherOptions
};

// Create the Gold Sport variant with sport features
const goldSportVariant: CarVariant = {
  variantName: 'Gold Sport',
  engineVariants: [
    createEngineVariant(
      '140 T-GDI',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      9290000,
      {
        engineDisplacement: 1482,
        horsepower: 140,
        consumption: 5.8,
        acceleration0to100: 9.0,
        topSpeed: 205,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 625,
        range: 862,
        speakerCount: 8
      },
      8790000,
      800000 // Automatic transmission option price
    )
  ],
  features: {
    ...createDefaultFeatures(),
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: true,
      smartCruiseControlWithStopAndGo: true,
      blindSpotCollisionAvoidanceAssist: 'Safety Package',
      isofix: true
    },
    parkingAssistance: {
      reversingRadar: true,
      frontParkingSensor: true,
      rearParkingSensor: true,
      parkingCameras: true,
      parkingCameras360View: 'Tech Package',
      semiOrFullAutomaticParkingAssistant: 'Tech Package',
      electricParkingBrake: true
    },
    convenience: {
      keylessStart: true,
      wirelessPhoneCharger: true,
      powerTailgate: 'Comfort Package',
      powerTailgateWithFootSensor: false,
      frontPowerWindows: true,
      rearPowerWindows: true,
      heatedFrontSeats: true,
      heatedRearSeats: true,
      dualZoneAC: true,
      headUpDisplay: false
    },
    entertainment: {
      premiumSpeaker: false,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: true
    },
    interiorExterior: {
      spareTire: true,
      metalPedals: true,
      paddleShifters: true,
      velourFloorMats: true,
      rubberMats: true,
      tintedRearWindows: true,
      roofRails: true
    }
  },
  customColorPrices: colors,
  packages: commonPackages,
  leatherSeatPackages: leatherOptions
};

// Create the Platinum variant with high-end features
const platinumVariant: CarVariant = {
  variantName: 'Platinum',
  engineVariants: [
    createEngineVariant(
      '140 T-GDI',
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      9790000,
      {
        engineDisplacement: 1482,
        horsepower: 140,
        consumption: 5.8,
        acceleration0to100: 9.0,
        topSpeed: 205,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 625,
        range: 862,
        speakerCount: 10
      },
      9290000,
      800000 // Automatic transmission option price
    )
  ],
  features: {
    ...createDefaultFeatures(),
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: true,
      smartCruiseControlWithStopAndGo: true,
      blindSpotCollisionAvoidanceAssist: true,
      isofix: true
    },
    parkingAssistance: {
      reversingRadar: true,
      frontParkingSensor: true,
      rearParkingSensor: true,
      parkingCameras: true,
      parkingCameras360View: true,
      semiOrFullAutomaticParkingAssistant: 'Tech Package',
      electricParkingBrake: true
    },
    convenience: {
      keylessStart: true,
      wirelessPhoneCharger: true,
      powerTailgate: true,
      powerTailgateWithFootSensor: 'Comfort Package',
      frontPowerWindows: true,
      rearPowerWindows: true,
      heatedFrontSeats: true,
      heatedRearSeats: true,
      dualZoneAC: true,
      headUpDisplay: 'Tech Package'
    },
    entertainment: {
      premiumSpeaker: true,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: true
    },
    interiorExterior: {
      spareTire: true,
      metalPedals: true,
      paddleShifters: true,
      velourFloorMats: true,
      rubberMats: true,
      tintedRearWindows: true,
      roofRails: true
    }
  },
  customColorPrices: colors,
  packages: commonPackages,
  leatherSeatPackages: leatherOptions
};

// Create the Platinum GT Line variant (top of the range)
const platinumGtLineVariant: CarVariant = {
  variantName: 'Platinum GT Line',
  engineVariants: [
    createEngineVariant(
      '140 T-GDI',
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC, // Standard automatic
      10490000,
      {
        engineDisplacement: 1482,
        horsepower: 140,
        consumption: 6.0,
        acceleration0to100: 9.2,
        topSpeed: 200,
        fuelTankCapacity: 50,
        cargoVolumeSeatsUp: 625,
        range: 833,
        speakerCount: 12
      },
      9990000
    )
  ],
  features: {
    ...createDefaultFeatures(),
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: true,
      smartCruiseControlWithStopAndGo: true,
      blindSpotCollisionAvoidanceAssist: true,
      isofix: true
    },
    parkingAssistance: {
      reversingRadar: true,
      frontParkingSensor: true,
      rearParkingSensor: true,
      parkingCameras: true,
      parkingCameras360View: true,
      semiOrFullAutomaticParkingAssistant: true,
      electricParkingBrake: true
    },
    convenience: {
      keylessStart: true,
      wirelessPhoneCharger: true,
      powerTailgate: true,
      powerTailgateWithFootSensor: true,
      frontPowerWindows: true,
      rearPowerWindows: true,
      heatedFrontSeats: true,
      heatedRearSeats: true,
      dualZoneAC: true,
      headUpDisplay: true
    },
    entertainment: {
      premiumSpeaker: true,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: true
    },
    interiorExterior: {
      spareTire: true,
      metalPedals: true,
      paddleShifters: true,
      velourFloorMats: true,
      rubberMats: true,
      tintedRearWindows: true,
      roofRails: true
    }
  },
  customColorPrices: colors,
  packages: commonPackages,
  leatherSeatPackages: leatherOptions
};

// Create and export the Kia Ceed SW model
const kiaCeedSw = new CarModel(
  'Kia',
  'Ceed SW',
  DiscountTarget.BOTH,
  [
    silverVariant,
    goldVariant,
    goldSportVariant,
    platinumVariant,
    platinumGtLineVariant
  ]
);

export default kiaCeedSw;
