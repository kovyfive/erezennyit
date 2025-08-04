import { CarModel } from '../model/model';

// List of all car models in the data folder
// This needs to be updated when new models are added
const CAR_MODEL_FILES = [
  'kia-ceed-sw',
  'test',
  'hyundai-i30',
  'hyundai-kona',
  'kgm-korando',
  'kia-sportage',
  'mazda-3',
  'mazda-cx30',
  'mitsubishi-asx',
  'mitsubishi-colt',
  'mitsubishi-outlander-phev',
  'mitsubishi-space-star',
  'opel-astra',
  'opel-astra-sports-tourer',
  'opel-grandland',
  'peugeot-308',
  'renault-arkana',
  'seat-leon-kombi',
  'toyota-corolla-sedan',
  'toyota-corolla-touring-sports'
];

/**
 * Load all car models dynamically
 */
export async function loadAllCarModels(): Promise<Record<string, CarModel>> {
  const models: Record<string, CarModel> = {};
  
  for (const modelFile of CAR_MODEL_FILES) {
    try {
      // Dynamic import of the model file
      const module = await import(`../data/${modelFile}`);
      // Store the model using the file name as key
      models[modelFile] = module.default;
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
