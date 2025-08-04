import React, { useState, useMemo } from 'react';
import { Filter, RotateCcw, Car, DollarSign } from 'lucide-react';
import { loadAllCarModels } from '../utils/carModelsLoader';
import { NOT_AVAILABLE } from '../model/model';

const sampleCars = Object.values(await loadAllCarModels());

// Helper function to get all car combinations
const getAllCarCombinations = (cars) => {
  const combinations = [];
  cars.forEach(car => {
    car.variants.forEach(variant => {
      variant.engineVariants.forEach(engine => {
        combinations.push({
          manufacturer: car.manufacturer,
          modelName: car.modelName,
          discountTarget: car.discountTarget,
          variant,
          engine,
          fullCar: car
        });
      });
    });
  });
  return combinations;
};

// All feature parameters for the left column
const featureParameters = [
  // Basic Info
  { key: 'manufacturer', label: 'Manufacturer', category: 'basic' },
  { key: 'modelName', label: 'Model', category: 'basic' },
  { key: 'variantName', label: 'Variant', category: 'basic' },
  { key: 'engineName', label: 'Engine', category: 'basic' },
  { key: 'basePrice', label: 'Base Price', category: 'basic' },
  { key: 'calculatedPrice', label: 'Price with Features', category: 'basic' },
  
  // Technical Specs
  { key: 'engineDisplacement', label: 'Engine Displacement (L)', category: 'technical' },
  { key: 'horsepower', label: 'Horsepower (HP)', category: 'technical' },
  { key: 'consumption', label: 'Consumption (L/100km)', category: 'technical' },
  { key: 'acceleration0to100', label: '0-100 km/h (s)', category: 'technical' },
  { key: 'topSpeed', label: 'Top Speed (km/h)', category: 'technical' },
  { key: 'fuelTankCapacity', label: 'Fuel Tank (L)', category: 'technical' },
  { key: 'cargoVolumeSeatsUp', label: 'Cargo Volume (L)', category: 'technical' },
  { key: 'range', label: 'Range (km)', category: 'technical' },
  { key: 'speakerCount', label: 'Speakers', category: 'technical' },
  
  // Safety Features
  { key: 'laneKeepAssist', label: 'Lane Keep Assist', category: 'safety' },
  { key: 'cruiseControl', label: 'Cruise Control', category: 'safety' },
  { key: 'smartCruiseControl', label: 'Smart Cruise Control', category: 'safety' },
  { key: 'smartCruiseControlWithStopAndGo', label: 'Smart Cruise + Stop&Go', category: 'safety' },
  { key: 'blindSpotCollisionAvoidanceAssist', label: 'Blind Spot Assist', category: 'safety' },
  { key: 'isofix', label: 'ISOFIX', category: 'safety' },
  
  // Parking Assistance
  { key: 'reversingRadar', label: 'Reversing Radar', category: 'parking' },
  { key: 'frontParkingSensor', label: 'Front Parking Sensor', category: 'parking' },
  { key: 'rearParkingSensor', label: 'Rear Parking Sensor', category: 'parking' },
  { key: 'parkingCameras', label: 'Parking Cameras', category: 'parking' },
  { key: 'parkingCameras360View', label: '360° Parking Cameras', category: 'parking' },
  { key: 'semiOrFullAutomaticParkingAssistant', label: 'Auto Parking Assistant', category: 'parking' },
  { key: 'electricParkingBrake', label: 'Electric Parking Brake', category: 'parking' },
  
  // Convenience Features
  { key: 'keylessStart', label: 'Keyless Start', category: 'convenience' },
  { key: 'wirelessPhoneCharger', label: 'Wireless Phone Charger', category: 'convenience' },
  { key: 'powerTailgate', label: 'Power Tailgate', category: 'convenience' },
  { key: 'powerTailgateWithFootSensor', label: 'Power Tailgate + Foot Sensor', category: 'convenience' },
  { key: 'frontPowerWindows', label: 'Front Power Windows', category: 'convenience' },
  { key: 'rearPowerWindows', label: 'Rear Power Windows', category: 'convenience' },
  { key: 'heatedFrontSeats', label: 'Heated Front Seats', category: 'convenience' },
  { key: 'heatedRearSeats', label: 'Heated Rear Seats', category: 'convenience' },
  { key: 'dualZoneAC', label: 'Dual Zone A/C', category: 'convenience' },
  { key: 'headUpDisplay', label: 'Head-Up Display', category: 'convenience' },
  
  // Entertainment
  { key: 'premiumSpeaker', label: 'Premium Speakers', category: 'entertainment' },
  { key: 'wiredCarPlayAndroidAuto', label: 'Wired CarPlay/Android Auto', category: 'entertainment' },
  { key: 'wirelessCarPlayAndroidAuto', label: 'Wireless CarPlay/Android Auto', category: 'entertainment' },
  
  // Interior/Exterior
  { key: 'spareTire', label: 'Spare Tire', category: 'interior' },
  { key: 'metalPedals', label: 'Metal Pedals', category: 'interior' },
  { key: 'paddleShifters', label: 'Paddle Shifters', category: 'interior' },
  { key: 'velourFloorMats', label: 'Velour Floor Mats', category: 'interior' },
  { key: 'rubberMats', label: 'Rubber Mats', category: 'interior' },
  { key: 'tintedRearWindows', label: 'Tinted Rear Windows', category: 'interior' },
  { key: 'roofRails', label: 'Roof Rails', category: 'interior' }
];

const CarDealsComparison = () => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [hideUnsatisfying, setHideUnsatisfying] = useState(false);
  const [cars] = useState(sampleCars);

  const carCombinations = useMemo(() => {
    let combinations = getAllCarCombinations(cars);
    
    // Filter out cars that don't satisfy selected features if hideUnsatisfying is true
    if (hideUnsatisfying && selectedFeatures.length > 0) {
      combinations = combinations.filter(car => {
        return selectedFeatures.every(featureKey => {
          const { variant } = car;
          const allFeatures = {
            ...variant.features.safety,
            ...variant.features.parkingAssistance,
            ...variant.features.convenience,
            ...variant.features.entertainment,
            ...variant.features.interiorExterior
          };

          const value = allFeatures[featureKey];
          // Feature is satisfied if it's true or available via package
          return value === true || (typeof value === 'string' && value !== NOT_AVAILABLE);
        });
      });
    }
    
    return combinations;
  }, [cars, hideUnsatisfying, selectedFeatures]);

  const toggleFeature = (featureKey) => {
    setSelectedFeatures(prev => 
      prev.includes(featureKey) 
        ? prev.filter(f => f !== featureKey)
        : [...prev, featureKey]
    );
  };

  const resetFilters = () => {
    setSelectedFeatures([]);
    setHideUnsatisfying(false);
  };

  const getFeatureValue = (car, featureKey) => {
    const { variant, engine } = car;
    
    // Handle basic info
    switch (featureKey) {
      case 'manufacturer': return car.manufacturer;
      case 'modelName': return car.modelName;
      case 'variantName': return variant.variantName;
      case 'engineName': return engine.listedEngineName;
      case 'basePrice': return `${engine.basePrice.toLocaleString()} Ft`;
      case 'calculatedPrice': 
        try {
          const result = car.fullCar.calculatePrice?.(variant.variantName, engine.listedEngineName, selectedFeatures);
          if (result && result.basePrice !== Number.MAX_VALUE) {
            return (
              <div>
                <div className="font-bold text-green-600">
                  {result.basePrice.toLocaleString()} Ft
                </div>
                {result.requiredPackages?.length > 0 && (
                  <div className="text-xs text-blue-600 mt-1">
                    Packages: {result.requiredPackages.map(p => p.name).join(', ')}
                  </div>
                )}
              </div>
            );
          }
          return 'Not available with selected features';
        } catch (e) {
          return `${engine.basePrice.toLocaleString()} Ft`;
        }
    }

    // Handle technical specs
    if (engine.technicalSpecs && engine.technicalSpecs[featureKey] !== undefined) {
      const value = engine.technicalSpecs[featureKey];
      return value === NOT_AVAILABLE ? 'N/A' : value;
    }

    // Handle features
    const allFeatures = {
      ...variant.features.safety,
      ...variant.features.parkingAssistance,
      ...variant.features.convenience,
      ...variant.features.entertainment,
      ...variant.features.interiorExterior
    };

    if (allFeatures[featureKey] !== undefined) {
      const value = allFeatures[featureKey];
      if (value === true) return <span className="text-green-600 font-semibold">✓ Yes</span>;
      if (value === false) return <span className="text-red-500 font-semibold">✗ No</span>;
      if (typeof value === 'string' && value !== NOT_AVAILABLE) {
        return <span className="text-blue-600 font-semibold">📦 {value}</span>;
      }
      return 'N/A';
    }

    return 'N/A';
  };

  const isFeatureHighlighted = (car, featureKey) => {
    if (!selectedFeatures.includes(featureKey)) return false;
    
    const { variant } = car;
    const allFeatures = {
      ...variant.features.safety,
      ...variant.features.parkingAssistance,
      ...variant.features.convenience,
      ...variant.features.entertainment,
      ...variant.features.interiorExterior
    };

    const value = allFeatures[featureKey];
    return value === true || (typeof value === 'string' && value !== NOT_AVAILABLE);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 p-4">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Car size={40} />
            <h1 className="text-4xl font-bold">Car Deals Comparison</h1>
          </div>
          <p className="text-xl opacity-90">Compare features and prices across different car variants</p>
        </div>

        {/* Reset Button and Hide Unsatisfying Toggle */}
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
          <button
            onClick={resetFilters}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200 hover:scale-105"
          >
            <RotateCcw size={20} />
            Reset Filters ({selectedFeatures.length})
          </button>
          
          {selectedFeatures.length > 0 && (
            <label className="bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-700 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 cursor-pointer transition-all duration-200">
              <input
                type="checkbox"
                checked={hideUnsatisfying}
                onChange={(e) => setHideUnsatisfying(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium">Hide non-satisfying variants</span>
            </label>
          )}
        </div>

        {/* Comparison Grid */}
        <div className="flex overflow-auto max-h-[80vh] bg-gray-50">
          {/* Parameter Column */}
          <div className="min-w-[280px] bg-white border-r-2 border-gray-200 sticky left-0 z-10">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 text-center font-semibold text-lg sticky top-0 z-20">
              <div className="font-bold text-lg">Parameters</div>
              <div className="font-semibold opacity-0">-</div>
              <div className="text-sm opacity-0 mt-1">-</div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Filter size={20} />
                <span>Click to filter</span>
              </div>
            </div>
            
            {featureParameters.map((param) => (
              <div
                key={param.key}
                className={`p-4 border-b border-gray-200 cursor-pointer transition-all duration-200 flex items-center justify-between ${
                  selectedFeatures.includes(param.key)
                    ? 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 font-semibold border-l-4 border-yellow-500'
                    : 'hover:bg-gray-100 hover:text-indigo-600'
                }`}
                onClick={() => param.category !== 'basic' && toggleFeature(param.key)}
              >
                <span>{param.label}</span>
                {selectedFeatures.includes(param.key) && (
                  <Filter size={16} className="text-yellow-600" />
                )}
              </div>
            ))}
          </div>

          {/* Car Columns */}
          {carCombinations.map((car, index) => (
            <div key={index} className="min-w-[300px] bg-white border-r border-gray-200 hover:bg-gray-50 transition-colors duration-200">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 text-center sticky top-0 z-10">
                <div className="font-bold text-lg">{car.manufacturer}</div>
                <div className="font-semibold">{car.modelName}</div>
                <div className="text-sm opacity-90 mt-1">{car.variant.variantName}</div>
                {car.engine.discountedPrice && (
                  <div className="mt-2">
                    <span className="line-through text-red-200 text-sm">
                      {car.engine.basePrice.toLocaleString()} Ft
                    </span>
                    <div className="text-green-200 font-bold">
                      {car.engine.discountedPrice.toLocaleString()} Ft
                    </div>
                  </div>
                )}
              </div>
              
              {featureParameters.map((param) => (
                <div
                  key={param.key}
                  className={`p-4 border-b border-gray-200 min-h-[60px] flex items-center justify-center text-center transition-all duration-200 ${
                    isFeatureHighlighted(car, param.key)
                      ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 font-semibold border-l-4 border-green-500'
                      : ''
                  }`}
                >
                  {getFeatureValue(car, param.key)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// CarModel class implementation for price calculation
class CarModel {
  constructor(manufacturer, modelName, discountTarget = DiscountTarget.NONE, variants = []) {
    this.manufacturer = manufacturer;
    this.modelName = modelName;
    this.discountTarget = discountTarget;
    this.variants = variants;
  }

  calculatePrice(variantName, engineName, selectedFeatures = []) {
    const variant = this.variants.find(v => v.variantName === variantName);
    if (!variant) {
      throw new Error(`Variant ${variantName} not found`);
    }

    const engineVariant = variant.engineVariants.find(e => e.listedEngineName === engineName);
    if (!engineVariant) {
      throw new Error(`Engine ${engineName} not found in variant ${variantName}`);
    }

    let basePrice = engineVariant.basePrice;
    const requiredPackages = [];

    const allFeatureCategories = [
      variant.features.safety,
      variant.features.parkingAssistance,
      variant.features.convenience,
      variant.features.entertainment,
      variant.features.interiorExterior
    ];

    for (const category of allFeatureCategories) {
      for (const [key, value] of Object.entries(category)) {
        if (selectedFeatures.includes(key)) {
          if (value === false) {
            return {
              basePrice: Number.MAX_VALUE,
              requiredPackages: []
            };
          }
          
          if (typeof value === 'string' && value !== NOT_AVAILABLE) {
            const packageNeeded = variant.packages.find(pkg => pkg.name === value);
            if (packageNeeded && !requiredPackages.some(pkg => pkg.name === packageNeeded.name)) {
              requiredPackages.push(packageNeeded);
              basePrice += packageNeeded.price;
            }
          }
        }
      }
    }

    if (engineVariant.automaticPrice && selectedFeatures.includes('automatic')) {
      basePrice += engineVariant.automaticPrice;
    }

    return {
      basePrice,
      discountedPrice: engineVariant.discountedPrice,
      requiredPackages
    };
  }
}

// Add calculatePrice method to sample cars
sampleCars.forEach(carData => {
  const carModel = new CarModel(carData.manufacturer, carData.modelName, carData.discountTarget, carData.variants);
  carData.calculatePrice = carModel.calculatePrice.bind(carModel);
});

export default CarDealsComparison;