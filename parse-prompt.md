# Car Model Information Extraction Guide

## Overview
You will be parsing PDF flyers from car manufacturers to extract structured information about car models. The information will be used to populate a TypeScript data structure. Follow these instructions carefully to ensure accurate data extraction.

## Your Task

1. Extract detailed information about the car model from the attached PDF flyers
2. Organize the information according to the data structure described below
3. Present the data in a format that can be directly used to create a TypeScript object

## Extraction Process

### Step 1: Identify Basic Model Information
First, identify the following basic information:
- Manufacturer name
- Model name
- Available variants (e.g., Silver, Gold, Platinum)
- Available engine options for each variant
- Discount targets (Private, Business, or Both)

### Step 2: For Each Variant and Engine Combination
For each combination of variant and engine, systematically extract:

#### Core Information
- VariantName (e.g., Silver, Gold, Gold Sport)
- ListedEngineName (exactly as written in the document)
- EngineType (diesel, benzin, mild-hybrid, full-hybrid, phev, or ev)
- TransmissionType (manual, automatic, hybrid-automatic, single-speed)
- Base Price (including registration price, in HUF)
- Discounted Price (if available)
- If automatic transmission is offered as an option, note the additional price

#### Technical Specifications
Extract the following technical specifications (use "N/A" if not available):
- Engine Displacement (in cc)
- Horsepower
- Fuel Consumption (l/100km or equivalent)
- Acceleration 0-100 km/h (seconds)
- Top Speed (km/h)
- Fuel Tank Capacity (liters)
- Cargo Volume with Seats Up (liters)
- Range (km)
- Speaker Count

#### Custom Colors
List all available custom colors with their names and additional prices.

#### Packages
Identify all available option packages with:
- Package name
- Package price

#### Leather Seat Options
List all available leather seat upgrade options with:
- Option name
- Price

### Step 3: Identify Features Availability
For each variant, determine the availability of the following features. Use these codes:
- `true` = Feature is included by default
- `false` = Feature is not available
- `"Package Name"` = Feature is available as part of a package (specify the package name)

Group features into these categories:

#### Safety Features
- Lane Keep Assist (LKA)
- Cruise Control
- Smart Cruise Control (SCC)
- Smart Cruise Control with Stop & Go
- Blind Spot Collision Avoidance Assist
- ISOFIX

#### Parking Assistance
- Reversing Radar
- Front Parking Sensors
- Rear Parking Sensors
- Parking Cameras (standard view)
- Parking Cameras (360° view)
- Semi/Full Automatic Parking Assistant
- Electric Parking Brake (EPB)

#### Convenience Features
- Keyless Start
- Wireless Phone Charger
- Power Tailgate
- Power Tailgate with Foot Sensor
- Front Power Windows
- Rear Power Windows
- Heated Front Seats
- Heated Rear Seats
- Dual Zone AC
- Head-up Display

#### Entertainment Features
- Premium Speaker System
- Wired Apple CarPlay & Android Auto
- Wireless Apple CarPlay & Android Auto

#### Interior & Exterior Features
- Spare Tire
- Metal Pedals
- Paddle Shifters
- Velour Floor Mats
- Rubber Mats
- Tinted Rear Windows
- Roof Rails

## Important Notes

1. **Missing Information**: If information is not found in the PDF, mark it as "N/A" (Not Available).

2. **Feature Dependencies**: 
   - If a higher-tier feature is included (e.g., Power Tailgate with Foot Sensor), then the base feature (Power Tailgate) should also be marked as included.
   - If wireless Apple CarPlay & Android Auto is included, then wired Apple CarPlay & Android Auto should also be marked as included.

3. **Transmission Options**:
   - If automatic transmission is available as an option, include the additional price.
   - Some features may only be available with automatic transmission - note these dependencies.

4. **Package References**:
   - When a feature is available through a package, reference the exact package name.
   - If multiple packages include the same feature, use the most affordable option.

5. **Price Accuracy**:
   - All prices should be in HUF (Hungarian Forint).
   - Ensure base prices include registration fees if mentioned.

## Output Format

After analyzing all PDFs, organize the output as a TypeScript object with this structure, and save it in /src/data/{manufacturer}-{model}.ts

```typescript
const carModel = new CarModel(
  "Manufacturer", // e.g., "Kia"
  "ModelName", // e.g., "Ceed SW"
  DiscountTarget.BOTH, // or PRIVATE, BUSINESS, NONE
  [
    // Variant 1 (e.g., Silver)
    {
      variantName: "Variant1Name",
      engineVariants: [
        // Engine option 1
        {
          listedEngineName: "Engine name as in document",
          engineType: EngineType.BENZIN, // or other type
          transmissionType: TransmissionType.MANUAL,
          automaticPrice: 800000, // optional, if automatic is an extra-cost option
          basePrice: 7990000,
          discountedPrice: 7490000, // optional
          technicalSpecs: {
            engineDisplacement: 998,
            horsepower: 100,
            consumption: 5.2,
            acceleration0to100: 11.4,
            topSpeed: 183,
            fuelTankCapacity: 50,
            cargoVolumeSeatsUp: 625,
            range: 961,
            speakerCount: 6
          }
        },
        // Additional engine options...
      ],
      features: {
        safety: {
          laneKeepAssist: true,
          cruiseControl: true,
          smartCruiseControl: "Safety Package",
          smartCruiseControlWithStopAndGo: false,
          blindSpotCollisionAvoidanceAssist: false,
          isofix: true
        },
        // other feature groups...
      },
      customColorPrices: [
        { name: "White Pearl", price: 150000 },
        // other colors...
      ],
      packages: [
        { name: "Safety Package", price: 180000 },
        // other packages...
      ],
      leatherSeatPackages: [
        { name: "Black Leather", price: 350000 },
        // other leather options...
      ]
    },
    // Additional variants...
  ]
);
```

Review the extracted data for accuracy and completeness before finalizing the output. Ensure all variant and engine combinations documented in the PDFs are represented in the structured data.

## Validation Checklist

Before finalizing your output, verify:

1. ✓ All basic model information is captured
2. ✓ Each variant has complete engine option details
3. ✓ All technical specifications are extracted where available
4. ✓ All custom color options are listed with prices
5. ✓ All feature availabilities are correctly marked
6. ✓ Transmission options and their prices are clearly identified
7. ✓ Package dependencies for features are properly referenced
8. ✓ All prices are in the correct currency and include required fees

If you're uncertain about any information, explain your reasoning and mark the field with "N/A" to indicate further research is needed.
