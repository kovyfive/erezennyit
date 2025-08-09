import {
  CarModel,
  EngineType,
  TransmissionType,
  DiscountTarget,
  CarVariant,
  MISSING,
  NOT_INCLUDED,
  NOT_AVAILABLE,
} from "../model/model"
import { createEngineVariant, createCarModel } from "../model/model-helpers"

const colors = [
  { name: "Atlas White", price: 100000 },
  { name: "Metálfényezés", price: 200000 },
  { name: "Kéttónusú fényezés", price: 300000 },
]

const comfortVariant: CarVariant = {
  variantName: "Comfort",
  engineVariants: [
    createEngineVariant(
      "1.0 T-GDi",
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      9499000,
      {
        horsepower: 100,
        engineDisplacement: 998,
        consumption: 6.1,
        acceleration0to100: 11.5,
        topSpeed: 180,
        fuelTankCapacity: 47,
        cargoVolumeSeatsUp: 466,
        range: 770,
        speakerCount: 6,
      },
      9499000
    ),
    createEngineVariant(
      "1.6 GDi hybrid MY25",
      EngineType.FULL_HYBRID,
      TransmissionType.AUTOMATIC,
      11199000,
      {
        horsepower: 129,
        engineDisplacement: 1580,
        consumption: 4,
        acceleration0to100: 10.6,
        topSpeed: 160,
        fuelTankCapacity: 38,
        cargoVolumeSeatsUp: 466,
        range: 950,
        speakerCount: 6,
      },
      11199000
    ),
  ],
  features: {
    safety: {
      laneKeepAssist: true,
      cruiseControl: true,
      smartCruiseControl: true,
      smartCruiseControlWithStopAndGo: true,
      blindSpotCollisionAvoidanceAssist: false,
      isofix: true,
      frontIsofix: NOT_INCLUDED,
    },
    parkingAssistance: {
      reversingRadar: true,
      frontParkingSensor: true,
      rearParkingSensor: true,
      parkingCameras: true,
      parkingCameras360View: false,
      semiOrFullAutomaticParkingAssistant: false,
      electricParkingBrake: true,
    },
    convenience: {
      keylessStart: true,
      wirelessPhoneCharger: false,
      powerTailgate: false,
      powerTailgateWithFootSensor: false,
      frontPowerWindows: true,
      rearPowerWindows: true,
      powerFoldingMirrors: false,
      heatedSideMirrors: true,
      heatedFrontSeats: 'Comfort Plus',
      heatedRearSeats: false,
      dualZoneAC: false, // Manual for T-GDI, Auto for HEV
      rainSensingWipers: false,
      headUpDisplay: NOT_INCLUDED,
    },
    entertainment: {
      premiumSpeaker: false,
      wiredCarPlayAndroidAuto: true,
      wirelessCarPlayAndroidAuto: false,
    },
    interiorExterior: {
      spareTire: NOT_INCLUDED,
      metalPedals: false,
      paddleShifters: true,
      velourFloorMats: NOT_INCLUDED,
      rubberMats: NOT_INCLUDED,
      tintedRearWindows: false,
      roofRails: false,
      slidingCenterConsole: NOT_INCLUDED,
      leatherSeats: false,
    },
  },
  customColorPrices: colors,
  packages: [
    { name: "Comfort Plus", price: 250000 },
  ],
  leatherSeatPackages: [],
}

const primeVariant: CarVariant = {
  variantName: "Prime",
  engineVariants: [
    createEngineVariant(
      "1.0 T-GDi",
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      10799000,
      {
        horsepower: 100,
        engineDisplacement: 998,
        consumption: 6.1,
        acceleration0to100: 11.5,
        topSpeed: 180,
        fuelTankCapacity: 47,
        cargoVolumeSeatsUp: 466,
        range: 770,
        speakerCount: 6,
      },
      10499000
    ),
    createEngineVariant(
      "1.6 T-GDi LP",
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      11199000,
      {
        horsepower: 138,
        engineDisplacement: 1598,
        consumption: 6.2,
        acceleration0to100: 8.9,
        topSpeed: 194,
        fuelTankCapacity: 47,
        cargoVolumeSeatsUp: 466,
        range: 758,
        speakerCount: 6,
      },
      10899000
    ),
    createEngineVariant(
      "1.6 T-GDi LP",
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      11999000,
      {
        horsepower: 138,
        engineDisplacement: 1598,
        consumption: 6.2,
        acceleration0to100: 8.9,
        topSpeed: 194,
        fuelTankCapacity: 47,
        cargoVolumeSeatsUp: 466,
        range: 758,
        speakerCount: 6,
      },
      11699000
    ),
    createEngineVariant(
      "1.6 GDi hybrid MY25",
      EngineType.FULL_HYBRID,
      TransmissionType.AUTOMATIC,
      12399000,
      {
        horsepower: 129,
        engineDisplacement: 1580,
        consumption: 4,
        acceleration0to100: 10.6,
        topSpeed: 160,
        fuelTankCapacity: 38,
        cargoVolumeSeatsUp: 466,
        range: 950,
        speakerCount: 6,
      },
      12099000
    ),
  ],
  features: {
    ...comfortVariant.features,
    safety: {
      ...comfortVariant.features.safety,
    },
    parkingAssistance: {
      ...comfortVariant.features.parkingAssistance,
      frontParkingSensor: true,
    },
    convenience: {
      ...comfortVariant.features.convenience,
      dualZoneAC: true,
      wirelessPhoneCharger: 'Qi',
      powerFoldingMirrors: true,
      heatedFrontSeats: true,
      heatedRearSeats: true,
      rainSensingWipers: true,
    },
    interiorExterior: {
      ...comfortVariant.features.interiorExterior,
      tintedRearWindows: true,
      metalPedals: 'N-line csomag Prime',
      roofRails: true,
    },
  },
  customColorPrices: colors,
  packages: [
    { name: "N-line csomag Prime", price: 550000 },
    { name: "Qi", price: 50000 },
  ],
  leatherSeatPackages: [],
}

const styleVariant: CarVariant = {
  variantName: "Style",
  engineVariants: [
    createEngineVariant(
      "1.6 T-GDi LP",
      EngineType.BENZIN,
      TransmissionType.MANUAL,
      11599000,
      {
        horsepower: 138,
        engineDisplacement: 1598,
        consumption: 6.2,
        acceleration0to100: 8.9,
        topSpeed: 194,
        fuelTankCapacity: 47,
        cargoVolumeSeatsUp: 466,
        range: 758,
        speakerCount: 6,
      },
      11299000
    ),
    createEngineVariant(
      "1.6 T-GDi LP",
      EngineType.BENZIN,
      TransmissionType.AUTOMATIC,
      12399000,
      {
        horsepower: 138,
        engineDisplacement: 1598,
        consumption: 6.2,
        acceleration0to100: 8.9,
        topSpeed: 194,
        fuelTankCapacity: 47,
        cargoVolumeSeatsUp: 466,
        range: 758,
        speakerCount: 6,
      },
      12099000
    ),
    createEngineVariant(
      "1.6 GDi hybrid MY25",
      EngineType.FULL_HYBRID,
      TransmissionType.AUTOMATIC,
      12799000,
      {
        horsepower: 129,
        engineDisplacement: 1580,
        consumption: 4,
        acceleration0to100: 10.6,
        topSpeed: 160,
        fuelTankCapacity: 38,
        cargoVolumeSeatsUp: 466,
        range: 950,
        speakerCount: 6,
      },
      12499000
    ),
  ],
  features: {
    ...primeVariant.features,    
    safety: {
      ...primeVariant.features.safety,
      blindSpotCollisionAvoidanceAssist: true,
    },
    parkingAssistance: {
      ...primeVariant.features.parkingAssistance,
      parkingCameras360View: true,
      semiOrFullAutomaticParkingAssistant: 'RSPA',
    },
    convenience: {
      ...primeVariant.features.convenience,
      wirelessPhoneCharger: true,
      powerTailgate: 'Intelligens csomagtartó',
      powerTailgateWithFootSensor: 'Intelligens csomagtartó',
    },
    entertainment: {
      ...primeVariant.features.entertainment,
      premiumSpeaker: 'BOSE',
    },
    interiorExterior: {
      ...primeVariant.features.interiorExterior,
      roofRails: true,
      metalPedals: 'N-line csomag Style',
      leatherSeats: 'Bőr',
    },
  },
  customColorPrices: colors,
  packages: [
    { name: "N-line csomag Style", price: 450000 },
    { name: "Intelligens csomagtartó", price: 150000 },
    { name: "BOSE", price: 200000 },
    { name: "RSPA", price: 200000 },
  ],
  leatherSeatPackages: [
    { name: "Bőr", price: 200000 },
  ],
}

const modelName = createCarModel("Hyundai", "Kona", DiscountTarget.BOTH, [
  comfortVariant,
  primeVariant,
  styleVariant,
])

export default modelName
