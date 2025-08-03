import { CarModel, EngineType, TransmissionType, DiscountTarget, createEngineVariant, createDefaultFeatures } from "../model/model";

const carModel = new CarModel(
  "Kia",
  "ProCeed",
  DiscountTarget.NONE,
  [
    {
      variantName: "ULTIMATE EDITION",
      engineVariants: [
        createEngineVariant(
          "140 T-GDI",
          EngineType.BENZIN,
          TransmissionType.MANUAL,
          10899000,
          {
            engineDisplacement: 1482,
            horsepower: 140,
            consumption: 5.8,
            fuelTankCapacity: 50,
            cargoVolumeSeatsUp: 594,
            speakerCount: 6
          },
          undefined,
          700000
        ),
        createEngineVariant(
            "140 T-GDI",
            EngineType.BENZIN,
            TransmissionType.AUTOMATIC,
            11599000,
            {
              engineDisplacement: 1482,
              horsepower: 140,
              consumption: 5.8,
              fuelTankCapacity: 50,
              cargoVolumeSeatsUp: 594,
              speakerCount: 6
            }
          )
      ],
      features: {
        safety: {
          laneKeepAssist: true,
          cruiseControl: true,
          smartCruiseControl: true,
          smartCruiseControlWithStopAndGo: true,
          blindSpotCollisionAvoidanceAssist: "ADA CSOMAG",
          isofix: true
        },
        parkingAssistance: {
          reversingRadar: true,
          frontParkingSensor: false,
          rearParkingSensor: true,
          parkingCameras: true,
          parkingCameras360View: false,
          semiOrFullAutomaticParkingAssistant: false,
          electricParkingBrake: false
        },
        convenience: {
          keylessStart: false,
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
          paddleShifters: true,
          velourFloorMats: false,
          rubberMats: false,
          tintedRearWindows: true,
          roofRails: false
        }
      },
      customColorPrices: [
        { name: "Metál Fényezés", price: 175000 }
      ],
      packages: [
        { name: "ADA CSOMAG", price: 200000 },
        { name: "NAPFÉNYTETŐ", price: 300000 }
      ],
      leatherSeatPackages: [
        { name: "BŐR CSOMAG 1", price: 500000 },
        { name: "BŐR CSOMAG 2", price: 500000 }
      ]
    },
    {
        variantName: "ULTIMATE EDITION +",
        engineVariants: [
          createEngineVariant(
            "140 T-GDI",
            EngineType.BENZIN,
            TransmissionType.MANUAL,
            11499000,
            {
              engineDisplacement: 1482,
              horsepower: 140,
              consumption: 5.8,
              fuelTankCapacity: 50,
              cargoVolumeSeatsUp: 594,
              speakerCount: 8
            },
            undefined,
            700000
          ),
          createEngineVariant(
            "140 T-GDI",
            EngineType.BENZIN,
            TransmissionType.AUTOMATIC,
            12199000,
            {
              engineDisplacement: 1482,
              horsepower: 140,
              consumption: 5.8,
              fuelTankCapacity: 50,
              cargoVolumeSeatsUp: 594,
              speakerCount: 8
            }
          )
        ],
        features: {
          safety: {
            laneKeepAssist: true,
            cruiseControl: true,
            smartCruiseControl: true,
            smartCruiseControlWithStopAndGo: true,
            blindSpotCollisionAvoidanceAssist: "ADA CSOMAG",
            isofix: true
          },
          parkingAssistance: {
            reversingRadar: true,
            frontParkingSensor: true,
            rearParkingSensor: true,
            parkingCameras: true,
            parkingCameras360View: false,
            semiOrFullAutomaticParkingAssistant: false,
            electricParkingBrake: true
          },
          convenience: {
            keylessStart: true,
            wirelessPhoneCharger: true,
            powerTailgate: true,
            powerTailgateWithFootSensor: false,
            frontPowerWindows: true,
            rearPowerWindows: true,
            heatedFrontSeats: true,
            heatedRearSeats: false,
            dualZoneAC: true,
            headUpDisplay: false
          },
          entertainment: {
            premiumSpeaker: true,
            wiredCarPlayAndroidAuto: true,
            wirelessCarPlayAndroidAuto: false
          },
          interiorExterior: {
            spareTire: true,
            metalPedals: true,
            paddleShifters: true,
            velourFloorMats: true,
            rubberMats: false,
            tintedRearWindows: true,
            roofRails: false
          }
        },
        customColorPrices: [
          { name: "Metál Fényezés", price: 175000 }
        ],
        packages: [
          { name: "ADA CSOMAG", price: 200000 },
          { name: "NAPFÉNYTETŐ", price: 300000 }
        ],
        leatherSeatPackages: [
            { name: "BŐR CSOMAG 1", price: 500000 },
            { name: "BŐR CSOMAG 2", price: 500000 }
        ]
      }
  ]
);
