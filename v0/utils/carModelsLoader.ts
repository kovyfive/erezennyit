import { CarModel } from '../model/model';

// List of all car models in the data folder
// This needs to be updated when new models are added
const CAR_MODEL_FILES = [
  'kia-ceed-sw', // ✅
  'kia-proceed', // ✅
  'hyundai-i30', // ✅
  'hyundai-tucson', // ✅
  'kgm-korando', // ✅
  'kia-sportage', // ✅
  // 'mazda-3',
  // 'opel-astra-sports-tourer',
  // 'opel-grandland',
  // 'peugeot-308',
  // 'renault-arkana',
  'seat-leon-kombi',// ✅
  'toyota-corolla-sedan',// ✅
  'toyota-corolla-touring-sports', // ✅
  'hyundai-kona', // ✅
  'toyota-c-hr', // ✅
  'vw-karoq', // ✅
];

/**
 * Load all car models dynamically
 */
export async function loadAllCarModels(): Promise<Record<string, CarModel>> {
  const models: Record<string, CarModel> = {};
  // Keep track of unique models by manufacturer+model name to avoid duplicates
  const uniqueModels: Set<string> = new Set();
  
  for (const modelFile of CAR_MODEL_FILES) {
    try {
      // Dynamic import of the model file
      /* @vite-ignore */
      const module = await import(`../data/${modelFile}`);
      const carModel = module.default;
      
      // Create a unique identifier for the car model
      const uniqueId = `${carModel.manufacturer}-${carModel.modelName}`;
      
      // Skip duplicates
      if (uniqueModels.has(uniqueId)) {
        console.warn(`Warning: Duplicate car model found - ${uniqueId}. Skipping ${modelFile}`);
        continue;
      }
      
      // Add to unique set and models object
      uniqueModels.add(uniqueId);
      models[modelFile] = carModel;
    } catch (error) {
      console.error(`Failed to load car model from ${modelFile}:`, error);
    }
  }
  
  return models;
}

/**
 * Get a formatted display name for a car model file
 */
export function getModelDisplayName(modelFileName: string): string {
  // Convert file name format to display format
  // Example: kia-ceed-sw -> Kia Ceed SW
  return modelFileName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

/**
 * Create a unique key for a variant and engine combination
 */
export function createVariantEngineKey(variantName: string, engineName: string): string {
  return `${variantName}__${engineName}`;
}

/**
 * Parse a variant-engine key back into its components
 */
export function parseVariantEngineKey(key: string): { variantName: string; engineName: string } {
  const [variantName, engineName] = key.split('__');
  return { variantName, engineName };
}
