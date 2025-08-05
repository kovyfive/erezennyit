# Car Comparison Website Generator Prompt

You are tasked with creating a comprehensive car comparison website that displays car deals in an interactive table format. The website should be built as a single HTML file with embedded CSS and JavaScript, optimized for desktop viewing with responsive mobile support.

## Data Loading and Structure

The car data is loaded using:
```javascript
import { loadAllCarModels } from './src/utils/carModelsLoader';
const sampleCars = Object.values(await loadAllCarModels());
```

Each car follows this TypeScript structure (refer to the provided model.ts for complete interfaces):
- `CarModel` with manufacturer, modelName, variants, and discountTarget
- Each variant has multiple `EngineVariant` objects with different engines/transmissions
- Features are categorized into: safety, parkingAssistance, convenience, entertainment, interiorExterior
- Technical specs include numeric values like horsepower, consumption, topSpeed, etc.

## Layout Requirements

### Main Table Structure
- **Full-screen desktop layout** with horizontal scrolling for many columns
- **Fixed first row (headers)** and **fixed first column (parameters)** that remain visible when scrolling
- **Sticky headers** - when scrolling vertically, car headers stay visible
- **Responsive design** that adapts to mobile devices with appropriate touch interactions

### Column Organization
- Group columns by manufacturer with visual separation
- Within each manufacturer group, create sub-columns for each variant
- Within each variant, create separate columns for each engine variant
- Header structure should be: `Manufacturer Name` > `Variant Name` > `Engine Name`
- Display pricing in headers (base price and calculated price with selected features)

### Row Organization
Group parameters by category with visual separators:
1. **Technical Specifications**: engineDisplacement, horsepower, consumption, acceleration0to100, topSpeed, fuelTankCapacity, cargoVolumeSeatsUp, range, speakerCount
2. **Safety Features**: laneKeepAssist, cruiseControl, smartCruiseControl, etc.
3. **Parking Assistance**: reversingRadar, frontParkingSensor, rearParkingSensor, etc.
4. **Convenience Features**: keylessStart, wirelessPhoneCharger, powerTailgate, etc.
5. **Entertainment Features**: premiumSpeaker, wiredCarPlayAndroidAuto, etc.
6. **Interior/Exterior Features**: spareTire, metalPedals, paddleShifters, etc.

## Interactive Features

### Row Highlighting System
- **Click any parameter row** to toggle highlighting (blue/accent color)
- **Multiple rows can be highlighted** simultaneously
- When highlighted, show all values across that row with conditional formatting:
  - `true` values: light green background
  - `false` values: light red background
  - Package names (string values): light blue background with package name
  - Numeric values: neutral background with value display
  - "N/A" values: gray background

### Filtering System (Top Right Corner)
- **"Reset Filters" button**: Clears all highlights and resets all filters
- **"Hide non-satisfying variants" checkbox**: When checked, hide columns where highlighted features are false
- **Min-Max sliders for numeric parameters**: 
  - Show current range values as user adjusts
  - Apply filtering in real-time
  - Only show sliders for parameters that have numeric values across the dataset

### Price Calculation Integration
- Use the `calculatePrice()` method from the CarModel class
- In column headers, display:
  - **Base price** (always visible)
  - **Calculated price** (when features are selected via row highlighting)
  - Visual indicator when calculated price differs from base price
  - List of required packages affecting the price

## Visual Design Requirements

### Modern UI/UX Design
- **Clean, professional appearance** suitable for car comparison
- **High contrast** for easy reading of data
- **Smooth animations** for highlighting and filtering
- **Clear visual hierarchy** with proper typography
- **Loading states** while data is being fetched
- **Responsive grid system** that works on all screen sizes

### Color Scheme
- Primary: Professional blue (#2563eb)
- Success (true values): Light green (#dcfce7)
- Error (false values): Light red (#fecaca)
- Package (string values): Light blue (#dbeafe)
- Neutral: Gray shades for N/A values
- Background: Clean white/light gray

### Typography
- Headers: Bold, easily readable
- Data: Monospace for numeric values, sans-serif for text
- Clear font size hierarchy

## Technical Implementation

### Performance Optimization
- **Efficient DOM manipulation** for large tables
- **Debounced filtering** to avoid excessive re-rendering
- **Optimized scroll handling** for fixed headers/columns

### Browser Compatibility
- Modern ES6+ JavaScript
- CSS Grid and Flexbox for layout
- No external dependencies beyond the car data loader

### Data Handling
- Handle missing/N/A values gracefully
- Proper type checking for different data types
- Error handling for malformed data

## Specific Functionality Requirements

1. **Feature Selection**: Only through row highlighting system (no separate checkboxes)
2. **Package Display**: Show package names in cells, don't show prices in cells
3. **Price Updates**: Automatically recalculate prices when features are highlighted/unhighlighted
4. **Filtering Logic**: Hide variants where highlighted features are false (when checkbox is enabled)
5. **Range Filters**: Show min/max values and current selection, update in real-time
6. **Scroll Behavior**: Maintain fixed headers and first column during scroll
7. **Mobile Adaptation**: Touch-friendly interface with appropriate spacing

## Expected Deliverable

Create a website file that:
- Loads the car data using the provided method
- Implements all the interactive features described
- Has a polished, professional appearance
- Works smoothly on both desktop and mobile devices
- Handles edge cases gracefully (missing data, no variants matching filters, etc.)

The website should feel like a premium car comparison tool that car buyers would want to use to make informed decisions.