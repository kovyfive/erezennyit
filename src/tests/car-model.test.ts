import { CarModel, NOT_AVAILABLE } from '../model/model';
import kiaCeedSwTest from '../data/test';

/**
 * Function to validate a car model
 * Checks if all required fields are present and properly formatted
 */
function validateCarModel(model: CarModel): string[] {
  const errors: string[] = [];
  
  // Check if required model properties exist
  if (!model.manufacturer) {
    errors.push(`Model is missing manufacturer name`);
  }
  
  if (!model.modelName) {
    errors.push(`Model is missing model name`);
  }
  
  if (!model.discountTarget) {
    errors.push(`Model is missing discount target`);
  }
  
  if (!model.variants || model.variants.length === 0) {
    errors.push(`Model ${model.modelName} has no variants`);
    return errors;
  }
  
  // Validate each variant
  model.variants.forEach(variant => {
    if (!variant.variantName) {
      errors.push(`Variant in ${model.modelName} is missing a name`);
    }
    
    if (!variant.engineVariants || variant.engineVariants.length === 0) {
      errors.push(`Variant ${variant.variantName} in ${model.modelName} has no engine variants`);
    } else {
      // Validate each engine variant
      variant.engineVariants.forEach(engine => {
        if (!engine.listedEngineName) {
          errors.push(`Engine in variant ${variant.variantName} (${model.modelName}) is missing a name`);
        }
        
        if (engine.engineType === undefined) {
          errors.push(`Engine ${engine.listedEngineName} in variant ${variant.variantName} (${model.modelName}) is missing engine type`);
        }
        
        if (engine.transmissionType === undefined) {
          errors.push(`Engine ${engine.listedEngineName} in variant ${variant.variantName} (${model.modelName}) is missing transmission type`);
        }
        
        if (engine.basePrice === undefined) {
          errors.push(`Engine ${engine.listedEngineName} in variant ${variant.variantName} (${model.modelName}) is missing base price`);
        }
        
        if (!engine.technicalSpecs) {
          errors.push(`Engine ${engine.listedEngineName} in variant ${variant.variantName} (${model.modelName}) is missing technical specs`);
        }
      });
    }
    
    // Check for required features
    if (!variant.features) {
      errors.push(`Variant ${variant.variantName} in ${model.modelName} is missing features`);
    } else {
      // Check if all feature categories exist
      if (!variant.features.safety) {
        errors.push(`Variant ${variant.variantName} in ${model.modelName} is missing safety features`);
      }
      if (!variant.features.parkingAssistance) {
        errors.push(`Variant ${variant.variantName} in ${model.modelName} is missing parkingAssistance features`);
      }
      if (!variant.features.convenience) {
        errors.push(`Variant ${variant.variantName} in ${model.modelName} is missing convenience features`);
      }
      if (!variant.features.entertainment) {
        errors.push(`Variant ${variant.variantName} in ${model.modelName} is missing entertainment features`);
      }
      if (!variant.features.interiorExterior) {
        errors.push(`Variant ${variant.variantName} in ${model.modelName} is missing interiorExterior features`);
      }
    }
    
    // Check for custom color prices
    if (!variant.customColorPrices || variant.customColorPrices.length === 0) {
      errors.push(`Variant ${variant.variantName} in ${model.modelName} is missing custom color prices`);
    }
    
    // Check for packages
    if (!variant.packages) {
      errors.push(`Variant ${variant.variantName} in ${model.modelName} is missing packages`);
    }
    
    // Check for leather seat packages
    if (!variant.leatherSeatPackages) {
      errors.push(`Variant ${variant.variantName} in ${model.modelName} is missing leather seat packages`);
    }
  });
  
  return errors;
}

/**
 * Function to test price calculation functionality
 * Tests various scenarios for the price calculation logic
 */
function testPriceCalculation(model: CarModel): string[] {
  const errors: string[] = [];
  
  // Get the first variant and engine for testing
  const variant = model.variants[0];
  const engine = variant.engineVariants[0];
  
  try {
    // Test basic price calculation with no filters
    const basePrice = model.calculatePrice(variant.variantName, engine.listedEngineName);
    if (!basePrice || basePrice.basePrice === undefined) {
      errors.push(`Failed to calculate base price for ${variant.variantName} with engine ${engine.listedEngineName}`);
    }
    
    // Test price calculation with a feature filter
    // Find a feature that is true in this variant
    let featureToTest = '';
    for (const [key, value] of Object.entries(variant.features.convenience)) {
      if (value === true) {
        featureToTest = key;
        break;
      }
    }
    
    if (featureToTest) {
      const priceWithFeature = model.calculatePrice(variant.variantName, engine.listedEngineName, [featureToTest]);
      if (!priceWithFeature || priceWithFeature.basePrice === undefined) {
        errors.push(`Failed to calculate price with feature filter ${featureToTest}`);
      }
    }
    
    // Test price calculation with a package feature
    let packageFeature = '';
    let packageName = '';
    for (const [key, value] of Object.entries(variant.features.convenience)) {
      if (typeof value === 'string' && value !== NOT_AVAILABLE) {
        packageFeature = key;
        packageName = value as string;
        break;
      }
    }
    
    if (packageFeature) {
      const priceWithPackage = model.calculatePrice(variant.variantName, engine.listedEngineName, [packageFeature]);
      if (!priceWithPackage || priceWithPackage.basePrice === undefined) {
        errors.push(`Failed to calculate price with package feature filter ${packageFeature} (${packageName})`);
      } else if (priceWithPackage.requiredPackages.length === 0) {
        errors.push(`Price calculation didn't include package for feature ${packageFeature} (${packageName})`);
      }
    }
    
    // Test price calculation with a non-existent feature
    try {
      model.calculatePrice(variant.variantName, engine.listedEngineName, ['nonExistentFeature']);
      // Should still work, just might not include any packages
    } catch (error) {
      const err = error as Error;
      errors.push(`Error when calculating price with invalid feature: ${err.message}`);
    }
    
    // Test with invalid variant name
    try {
      model.calculatePrice('Invalid Variant', engine.listedEngineName);
      errors.push('Price calculation didn\'t throw error for invalid variant name');
    } catch (error) {
      // This is expected
    }
    
    // Test with invalid engine name
    try {
      model.calculatePrice(variant.variantName, 'Invalid Engine');
      errors.push('Price calculation didn\'t throw error for invalid engine name');
    } catch (error) {
      // This is expected
    }
    
  } catch (error) {
    const err = error as Error;
    errors.push(`Error in price calculation tests: ${err.message}`);
  }
  
  return errors;
}

/**
 * Main test function to validate car model data files
 * Currently only tests the Kia Ceed SW model as a demo,
 * but can be extended to test all models in the data directory
 */
export function testCarModels(): { success: boolean, errors: string[], message: string } {
  let allErrors: string[] = [];
  
  // Test the Kia Ceed SW model
  const ceedErrors = validateCarModel(kiaCeedSwTest);
  if (ceedErrors.length > 0) {
    allErrors = [...allErrors, ...ceedErrors.map(err => `[Kia Ceed SW]: ${err}`)];
  }
  
  // Test price calculation
  const pricingErrors = testPriceCalculation(kiaCeedSwTest);
  if (pricingErrors.length > 0) {
    allErrors = [...allErrors, ...pricingErrors.map(err => `[Kia Ceed SW Price Calculation]: ${err}`)];
  }
  
  const success = allErrors.length === 0;
  const message = success 
    ? "✅ All tests passed!" 
    : `❌ Tests failed with ${allErrors.length} errors`;
  
  return {
    success,
    errors: allErrors,
    message
  };
}

// Log test results to console when this module is imported
console.log("Running car model tests...");
const testResults = testCarModels();
console.log(testResults.message);
if (!testResults.success) {
  console.error("Errors found:");
  testResults.errors.forEach(err => console.error(`- ${err}`));
}
