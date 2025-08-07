/**
 * Car Model Structure
 * This model represents a car with all of its variants and motor types.
 */

// Constants for unavailable data
export const NOT_AVAILABLE = "N/A";
export const MISSING = "MISSING";
export const NOT_INCLUDED = "NOT_INCLUDED";

// Enum types for common values
export enum EngineType {
  DIESEL = "diesel",
  BENZIN = "benzin",
  MILD_HYBRID = "mild-hybrid",
  FULL_HYBRID = "full-hybrid",
  PHEV = "phev",
  EV = "ev"
}

export enum TransmissionType {
  MANUAL = "manual",
  AUTOMATIC = "automatic",
  HYBRID_AUTOMATIC = "hybrid-automatic",
  SINGLE_SPEED = "single-speed", // For EVs
  NOT_AVAILABLE = "N/A"
}

export enum DiscountTarget {
  PRIVATE = "private",
  BUSINESS = "business",
  BOTH = "both",
  NONE = "none"
}

// Feature availability
export type FeatureAvailability = boolean | string; // true if included, false if not, string for package name reference

// Custom color price structure
export interface CustomColorPrice {
  name: string;
  price: number;
}

// Package structure
export interface Package {
  name: string;
  price: number;
}

// Technical specifications
export interface TechnicalSpecs {
  engineDisplacement: number | typeof NOT_AVAILABLE;
  horsepower: number | typeof NOT_AVAILABLE;
  consumption: number | typeof NOT_AVAILABLE;
  acceleration0to100: number | typeof NOT_AVAILABLE;
  topSpeed: number | typeof NOT_AVAILABLE;
  fuelTankCapacity: number | typeof NOT_AVAILABLE;
  cargoVolumeSeatsUp: number | typeof NOT_AVAILABLE;
  range: number | typeof NOT_AVAILABLE;
  speakerCount: number | typeof NOT_AVAILABLE;
}

// Safety features
export interface SafetyFeatures {
  laneKeepAssist: FeatureAvailability;
  cruiseControl: FeatureAvailability;
  smartCruiseControl: FeatureAvailability;
  smartCruiseControlWithStopAndGo: FeatureAvailability;
  blindSpotCollisionAvoidanceAssist: FeatureAvailability;
  isofix: FeatureAvailability;
}

// Parking and driving assistance
export interface ParkingAssistance {
  reversingRadar: FeatureAvailability;
  frontParkingSensor: FeatureAvailability;
  rearParkingSensor: FeatureAvailability;
  parkingCameras: FeatureAvailability;
  parkingCameras360View: FeatureAvailability;
  semiOrFullAutomaticParkingAssistant: FeatureAvailability;
  electricParkingBrake: FeatureAvailability;
}

// Convenience features
export interface ConvenienceFeatures {
  keylessStart: FeatureAvailability;
  wirelessPhoneCharger: FeatureAvailability;
  powerTailgate: FeatureAvailability;
  powerTailgateWithFootSensor: FeatureAvailability;
  frontPowerWindows: FeatureAvailability;
  rearPowerWindows: FeatureAvailability;
  heatedFrontSeats: FeatureAvailability;
  heatedRearSeats: FeatureAvailability;
  dualZoneAC: FeatureAvailability;
  headUpDisplay: FeatureAvailability;
}

// Entertainment and connectivity
export interface EntertainmentFeatures {
  premiumSpeaker: FeatureAvailability;
  wiredCarPlayAndroidAuto: FeatureAvailability;
  wirelessCarPlayAndroidAuto: FeatureAvailability;
}

// Interior and exterior features
export interface InteriorExteriorFeatures {
  spareTire: FeatureAvailability;
  metalPedals: FeatureAvailability;
  paddleShifters: FeatureAvailability;
  velourFloorMats: FeatureAvailability;
  rubberMats: FeatureAvailability;
  tintedRearWindows: FeatureAvailability;
  roofRails: FeatureAvailability;
  slidingCenterConsole: FeatureAvailability;
  leatherSeats: FeatureAvailability;
}

// Combined features
export interface Features {
  safety: SafetyFeatures;
  parkingAssistance: ParkingAssistance;
  convenience: ConvenienceFeatures;
  entertainment: EntertainmentFeatures;
  interiorExterior: InteriorExteriorFeatures;
}

// Engine variant
export interface EngineVariant {
  listedEngineName: string;
  engineType: EngineType | typeof NOT_AVAILABLE;
  transmissionType: TransmissionType | typeof NOT_AVAILABLE;
  technicalSpecs: TechnicalSpecs;
  basePrice: number;
  discountedPrice?: number;
}

// Car variant with features and engine options
export interface CarVariant {
  variantName: string;
  engineVariants: EngineVariant[];
  features: Features;
  customColorPrices: CustomColorPrice[];
  packages: Package[];
  leatherSeatPackages: Package[];
}

// Main car model
export interface CarModel {
  manufacturer: string;
  modelName: string;
  discountTarget: DiscountTarget;
  variants: CarVariant[];
  calculatePrice(
    variantName: string,
    engineName: string,
    selectedFeatures?: string[]
  ): { basePrice: number; discountedPrice?: number; requiredPackages: Package[] };
}
