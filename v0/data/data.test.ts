import { CarModel, CarVariant, NOT_INCLUDED, NOT_AVAILABLE, MISSING } from '../model/model';

// Import all car models directly
import hyundaiI30 from './hyundai-i30';
import hyundaiKona from './hyundai-kona';
import hyundaiTucson from './hyundai-tucson';
import kgmKorando from './kgm-korando';
import kiaCeedSw from './kia-ceed-sw';
import kiaProceed from './kia-proceed';
import kiaSportage from './kia-sportage';
import seatLeonKombi from './seat-leon-kombi';
import toyotaChr from './toyota-c-hr';
import toyotaCorollaSednan from './toyota-corolla-sedan';
import toyotaCorollaTouringSpots from './toyota-corolla-touring-sports';
import vwKaroq from './vw-karoq';

describe('Car Data Validation', () => {
  // Create a record of all car models
  const carModels: Record<string, CarModel> = {
    'hyundai-i30': hyundaiI30,
    'hyundai-kona': hyundaiKona,
    'hyundai-tucson': hyundaiTucson,
    'kgm-korando': kgmKorando,
    'kia-ceed-sw': kiaCeedSw,
    'kia-proceed': kiaProceed,
    'kia-sportage': kiaSportage,
    'seat-leon-kombi': seatLeonKombi,
    'toyota-c-hr': toyotaChr,
    'toyota-corolla-sedan': toyotaCorollaSednan,
    'toyota-corolla-touring-sports': toyotaCorollaTouringSpots,
    'vw-karoq': vwKaroq
  };
  
  describe('Model and Variant Validations', () => {
    // Generate individual test cases for each model and variant
    Object.entries(carModels).forEach(([modelFile, carModel]) => {
      // All models are directly imported, so no need to check for null
      
      describe(`${carModel.manufacturer} ${carModel.modelName}`, () => {
        carModel.variants.forEach((variant: CarVariant) => {
          it(`Variant ${variant.variantName} should have all string features defined in packages`, () => {
            // Create a set of all package names
            const packageNames = new Set<string>();
            
            // Add regular package names
            variant.packages.forEach(pkg => {
              packageNames.add(pkg.name);
            });
            
            // Add leather seat package names if available
            if (variant.leatherSeatPackages && variant.leatherSeatPackages.length > 0) {
              variant.leatherSeatPackages.forEach(pkg => {
                packageNames.add(pkg.name);
              });
            }

            const features = variant.features;
            const featureCategories = Object.keys(features) as Array<keyof typeof features>;

            featureCategories.forEach(category => {
              const categoryFeatures = features[category];
              const featureKeys = Object.keys(categoryFeatures) as Array<keyof typeof categoryFeatures>;

              featureKeys.forEach(featureKey => {
                const featureValue = categoryFeatures[featureKey];
                if (
                  typeof featureValue === 'string' && 
                  featureValue !== NOT_INCLUDED && 
                  featureValue !== NOT_AVAILABLE &&
                  featureValue !== MISSING
                ) {
                  // Check that the feature value is in the package names set
                  expect(packageNames).toContain(featureValue)
                }
              });
            });
          });
        });
      });
    });
  });
});
