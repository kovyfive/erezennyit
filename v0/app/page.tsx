"use client"

import { useState, useEffect, useMemo } from "react"
import {
  CarModel,
  type CarVariant,
  type EngineVariant,
  DiscountTarget,
  EngineType,
  TransmissionType,
  NOT_AVAILABLE,
  MISSING,
  NOT_INCLUDED,
} from "../model/model"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Loader2, RotateCcw } from "lucide-react"

import { loadAllCarModels } from '../utils/carModelsLoader';
// generateMockCarData will be loaded asynchronously inside useEffect

interface NumericRange {
  min: number
  max: number
  current: [number, number]
}

interface NumericRanges {
  [key: string]: NumericRange
}

export default function CarComparisonPage() {
  const [carData, setCarData] = useState<CarModel[]>([])
  const [loading, setLoading] = useState(true)
  const [highlightedRows, setHighlightedRows] = useState<Set<string>>(new Set())
  const [hideNonSatisfying, setHideNonSatisfying] = useState(false)
  const [numericRanges, setNumericRanges] = useState<NumericRanges>({})

  // Load mock data
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      // Simulate loading delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const allCarModels = await loadAllCarModels();
      const mockData = Object.values(allCarModels);
      setCarData(mockData)

      // Initialize numeric ranges
      const ranges: NumericRanges = {}
      const numericFields = [
        "engineDisplacement",
        "horsepower",
        "consumption",
        "acceleration0to100",
        "topSpeed",
        "fuelTankCapacity",
        "cargoVolumeSeatsUp",
        "range",
        "speakerCount",
      ]

      numericFields.forEach((field) => {
        const values: number[] = []
        mockData.forEach((car) => {
          car.variants.forEach((variant) => {
            variant.engineVariants.forEach((engine) => {
              const value = (engine.technicalSpecs as any)[field]
              if (typeof value === "number") {
                values.push(value)
              }
            })
          })
        })

        if (values.length > 0) {
          const min = Math.min(...values)
          const max = Math.max(...values)
          ranges[field] = {
            min,
            max,
            current: [min, max],
          }
        }
      })

      ranges["cargoVolumeSeatsUp"].current = [450, ranges["cargoVolumeSeatsUp"].max]
      ranges["engineDisplacement"].current = [1250, ranges["engineDisplacement"].max]
      ranges["topSpeed"].current = [175, ranges["topSpeed"].max]

      setNumericRanges(ranges)
      setLoading(false)
    }

    loadData()
  }, [])

  // Get all car combinations (manufacturer > variant > engine)
  const carCombinations = useMemo(() => {
    const combinations: Array<{
      car: CarModel
      variant: CarVariant
      engine: EngineVariant
      basePrice: number
      calculatedPrice?: number
      requiredPackages: string[]
    }> = []

    carData.forEach((car) => {
      car.variants.forEach((variant) => {
        variant.engineVariants.forEach((engine) => {
          const selectedFeatures = Array.from(highlightedRows)
          try {
            const priceInfo = car.calculatePrice(variant.variantName, engine.listedEngineName, selectedFeatures)
            combinations.push({
              car,
              variant,
              engine,
              basePrice: engine.basePrice,
              calculatedPrice: priceInfo.basePrice !== engine.basePrice ? priceInfo.basePrice : undefined,
              requiredPackages: priceInfo.requiredPackages.map((p) => p.name),
            })
          } catch (error) {
            combinations.push({
              car,
              variant,
              engine,
              basePrice: engine.basePrice,
              requiredPackages: [],
            })
          }
        })
      })
    })

    return combinations
  }, [carData, highlightedRows])

  // Filter combinations based on highlighted features and numeric ranges
  const filteredCombinations = useMemo(() => {
    let filtered = carCombinations.filter((combo) => {
      // Check highlighted features first
      if (highlightedRows.size > 0) {
        const allFeatures = {
          ...combo.variant.features.safety,
          ...combo.variant.features.parkingAssistance,
          ...combo.variant.features.convenience,
          ...combo.variant.features.entertainment,
          ...combo.variant.features.interiorExterior,
        }

        for (const feature of highlightedRows) {
          const featureValue = (allFeatures as any)[feature]
          // If feature is false, this car doesn't satisfy the requirement
          if (featureValue === false) {
            return false
          }
        }
      }

      // Check numeric ranges
      for (const [field, range] of Object.entries(numericRanges)) {
        const value = (combo.engine.technicalSpecs as any)[field]
        if (typeof value === "number") {
          if (value < range.current[0] || value > range.current[1]) {
            return false
          }
        }
      }

      return true
    })

    // If hideNonSatisfying is enabled and we have highlighted features,
    // further filter out cars that don't satisfy the requirements
    if (hideNonSatisfying && highlightedRows.size > 0) {
      filtered = filtered.filter((combo) => {
        // If calculated price is MAX_VALUE, it means the car doesn't satisfy requirements
        return combo.calculatedPrice !== Number.MAX_VALUE
      })
    }

    return filtered
  }, [carCombinations, hideNonSatisfying, highlightedRows, numericRanges])

  // Define all parameter rows
  const parameterRows = [
    // Technical Specifications
    {
      category: "Technical Specifications",
      key: "engineDisplacement",
      label: "Engine Displacement (L)",
      type: "numeric",
    },
    { category: "Technical Specifications", key: "horsepower", label: "Horsepower (HP)", type: "numeric" },
    { category: "Technical Specifications", key: "consumption", label: "Fuel Consumption (L/100km)", type: "numeric" },
    { category: "Technical Specifications", key: "acceleration0to100", label: "0-100 km/h (s)", type: "numeric" },
    { category: "Technical Specifications", key: "topSpeed", label: "Top Speed (km/h)", type: "numeric" },
    { category: "Technical Specifications", key: "fuelTankCapacity", label: "Fuel Tank Capacity (L)", type: "numeric" },
    { category: "Technical Specifications", key: "cargoVolumeSeatsUp", label: "Cargo Volume (L)", type: "numeric" },
    { category: "Technical Specifications", key: "range", label: "Range (km)", type: "numeric" },
    { category: "Technical Specifications", key: "speakerCount", label: "Speaker Count", type: "numeric" },

    // Safety Features
    { category: "Safety Features", key: "laneKeepAssist", label: "Lane Keep Assist", type: "feature" },
    { category: "Safety Features", key: "cruiseControl", label: "Cruise Control", type: "feature" },
    { category: "Safety Features", key: "smartCruiseControl", label: "Smart Cruise Control", type: "feature" },
    {
      category: "Safety Features",
      key: "smartCruiseControlWithStopAndGo",
      label: "Smart Cruise Control with Stop & Go",
      type: "feature",
    },
    {
      category: "Safety Features",
      key: "blindSpotCollisionAvoidanceAssist",
      label: "Blind Spot Collision Avoidance",
      type: "feature",
    },
    { category: "Safety Features", key: "isofix", label: "ISOFIX", type: "feature" },

    // Parking Assistance
    { category: "Parking Assistance", key: "reversingRadar", label: "Reversing Radar", type: "feature" },
    { category: "Parking Assistance", key: "frontParkingSensor", label: "Front Parking Sensor", type: "feature" },
    { category: "Parking Assistance", key: "rearParkingSensor", label: "Rear Parking Sensor", type: "feature" },
    { category: "Parking Assistance", key: "parkingCameras", label: "Parking Cameras", type: "feature" },
    { category: "Parking Assistance", key: "parkingCameras360View", label: "360° Parking Cameras", type: "feature" },
    {
      category: "Parking Assistance",
      key: "semiOrFullAutomaticParkingAssistant",
      label: "Automatic Parking Assistant",
      type: "feature",
    },
    { category: "Parking Assistance", key: "electricParkingBrake", label: "Electric Parking Brake", type: "feature" },

    // Convenience Features
    { category: "Convenience Features", key: "keylessStart", label: "Keyless Start", type: "feature" },
    { category: "Convenience Features", key: "wirelessPhoneCharger", label: "Wireless Phone Charger", type: "feature" },
    { category: "Convenience Features", key: "powerTailgate", label: "Power Tailgate", type: "feature" },
    {
      category: "Convenience Features",
      key: "powerTailgateWithFootSensor",
      label: "Power Tailgate with Foot Sensor",
      type: "feature",
    },
    { category: "Convenience Features", key: "frontPowerWindows", label: "Front Power Windows", type: "feature" },
    { category: "Convenience Features", key: "rearPowerWindows", label: "Rear Power Windows", type: "feature" },
    { category: "Convenience Features", key: "heatedFrontSeats", label: "Heated Front Seats", type: "feature" },
    { category: "Convenience Features", key: "heatedRearSeats", label: "Heated Rear Seats", type: "feature" },
    { category: "Convenience Features", key: "dualZoneAC", label: "Dual Zone A/C", type: "feature" },
    { category: "Convenience Features", key: "headUpDisplay", label: "Head-Up Display", type: "feature" },

    // Entertainment Features
    { category: "Entertainment Features", key: "premiumSpeaker", label: "Premium Speaker System", type: "feature" },
    {
      category: "Entertainment Features",
      key: "wiredCarPlayAndroidAuto",
      label: "Wired CarPlay/Android Auto",
      type: "feature",
    },
    {
      category: "Entertainment Features",
      key: "wirelessCarPlayAndroidAuto",
      label: "Wireless CarPlay/Android Auto",
      type: "feature",
    },

    // Interior/Exterior Features
    { category: "Interior/Exterior Features", key: "spareTire", label: "Spare Tire", type: "feature" },
    { category: "Interior/Exterior Features", key: "metalPedals", label: "Metal Pedals", type: "feature" },
    { category: "Interior/Exterior Features", key: "paddleShifters", label: "Paddle Shifters", type: "feature" },
    { category: "Interior/Exterior Features", key: "velourFloorMats", label: "Velour Floor Mats", type: "feature" },
    { category: "Interior/Exterior Features", key: "rubberMats", label: "Rubber Mats", type: "feature" },
    { category: "Interior/Exterior Features", key: "tintedRearWindows", label: "Tinted Rear Windows", type: "feature" },
    { category: "Interior/Exterior Features", key: "roofRails", label: "Roof Rails", type: "feature" },
    { category: "Interior/Exterior Features", key: "leatherSeats", label: "Leather Seats", type: "feature" },
    { category: "Interior/Exterior Features", key: "slidingCenterConsole", label: "Sliding Center Console", type: "feature" },
  ]

  const toggleRowHighlight = (key: string) => {
    const newHighlighted = new Set(highlightedRows)
    if (newHighlighted.has(key)) {
      newHighlighted.delete(key)
    } else {
      newHighlighted.add(key)
    }
    setHighlightedRows(newHighlighted)
  }

  const resetFilters = () => {
    setHighlightedRows(new Set())
    setHideNonSatisfying(false)
    const resetRanges = { ...numericRanges }
    Object.keys(resetRanges).forEach((key) => {
      resetRanges[key].current = [resetRanges[key].min, resetRanges[key].max]
    })
    setNumericRanges(resetRanges)
  }

  const updateNumericRange = (key: string, value: [number, number]) => {
    setNumericRanges((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        current: value,
      },
    }))
  }

  const getFeatureValue = (combo: any, key: string) => {
    const allFeatures = {
      ...combo.variant.features.safety,
      ...combo.variant.features.parkingAssistance,
      ...combo.variant.features.convenience,
      ...combo.variant.features.entertainment,
      ...combo.variant.features.interiorExterior,
    }
    return (allFeatures as any)[key]
  }

  const getTechnicalValue = (combo: any, key: string) => {
    return (combo.engine.technicalSpecs as any)[key]
  }

  const formatValue = (value: any) => {
    if (value === true) return "✅ S"
    if (value === false) return "➡️"
    if (value === NOT_AVAILABLE) return "⭕N/A"
    if (value === MISSING) return "⭕N/A"
    if (value === NOT_INCLUDED) return "❌"
    if (typeof value === "string") return "📦 " + value
    if (typeof value === "number") return value.toString()
    return "⭕N/A"
  }

  const getCellClassName = (value: any, isHighlighted: boolean) => {
    if (!isHighlighted) return ""

    if (value === true) return "bg-green-100 text-green-800"
    if (value === false) return "bg-red-100 text-red-800"
    if (typeof value === "string" && value !== NOT_AVAILABLE) return "bg-blue-100 text-blue-800"
    if (value === NOT_AVAILABLE) return "bg-gray-100 text-gray-600"
    return "bg-gray-50"
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-lg text-gray-600">Loading car comparison data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Car Comparison Tool</h1>
          <p className="text-gray-600">Compare features, specifications, and pricing across different car models</p>
        </div>

        {/* Filter Controls */}
        <Card className="mb-6 p-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button onClick={resetFilters} variant="outline" className="flex items-center gap-2 bg-transparent">
              <RotateCcw className="h-4 w-4" />
              Reset Filters
            </Button>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="hide-non-satisfying" 
                checked={hideNonSatisfying} 
                onCheckedChange={(checked) => setHideNonSatisfying(checked === true)} 
              />
              <label htmlFor="hide-non-satisfying" className="text-sm font-medium">
                Hide non-satisfying variants
              </label>
            </div>

            {/* Numeric Range Sliders */}
            <div className="flex flex-wrap gap-4">
              {Object.entries(numericRanges).map(([key, range]) => (
                <div key={key} className="min-w-[200px]">
                  <label className="text-xs font-medium text-gray-700 mb-1 block">
                    {parameterRows.find((row) => row.key === key)?.label || key}
                  </label>
                  <div className="px-2">
                    <Slider
                      value={range.current}
                      onValueChange={(value) => updateNumericRange(key, value as [number, number])}
                      min={range.min}
                      max={range.max}
                      step={(range.max - range.min) / 100}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{range.current[0].toFixed(1)}</span>
                      <span>{range.current[1].toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {filteredCombinations.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Headers */}
                <thead className="bg-gray-100 sticky top-0 z-10">
                  <tr>
                    <th className="sticky left-0 bg-gray-100 p-3 text-left font-semibold text-gray-900 border-r border-gray-300 min-w-[200px]">
                      Parameter
                    </th>
                    {filteredCombinations.map((combo, index) => (
                      <th
                        key={index}
                        className="p-3 text-center font-semibold text-gray-900 border-r border-gray-200 min-w-[180px]"
                      >
                        <div className="space-y-1">
                          <div className="text-sm font-bold text-blue-600">{combo.car.manufacturer}</div>
                          <div className="text-sm font-medium">{combo.car.modelName}</div>
                          <div className="text-xs text-gray-600">{combo.variant.variantName}</div>
                          <div className="text-xs text-gray-500">{combo.engine.listedEngineName}</div>
                          <div className="text-xs">
                            <div className="font-medium">{combo.basePrice.toLocaleString()} Ft</div>
                            {combo.calculatedPrice && combo.calculatedPrice !== Number.MAX_VALUE && (
                              <div className="text-blue-600 font-medium">{combo.calculatedPrice.toLocaleString()} Ft</div>
                            )}
                            {combo.calculatedPrice === Number.MAX_VALUE && (
                              <div className="text-red-600 font-medium text-xs">Not Available</div>
                            )}
                            {combo.requiredPackages.length > 0 && combo.calculatedPrice !== Number.MAX_VALUE && (
                              <div className="text-xs text-gray-500 mt-1">
                                +{combo.requiredPackages.length} package{combo.requiredPackages.length > 1 ? "s" : ""}
                              </div>
                            )}
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Body */}
                <tbody>
                  {parameterRows.map((row, rowIndex) => {
                    const isHighlighted = highlightedRows.has(row.key)
                    const isFirstInCategory = rowIndex === 0 || parameterRows[rowIndex - 1].category !== row.category

                    return (
                      <tr
                        key={row.key}
                        className={`border-b border-gray-200 hover:bg-gray-50 cursor-pointer ${
                          isHighlighted ? "bg-blue-50" : ""
                        } ${isFirstInCategory ? "border-t-2 border-t-gray-400" : ""}`}
                        onClick={() => toggleRowHighlight(row.key)}
                      >
                        <td className="sticky left-0 bg-white p-3 font-medium text-gray-900 border-r border-gray-300">
                          {isFirstInCategory && (
                            <div className="text-xs font-bold text-gray-600 mb-1">{row.category}</div>
                          )}
                          <div className={isHighlighted ? "text-blue-600 font-semibold" : ""}>{row.label}</div>
                        </td>
                        {filteredCombinations.map((combo, colIndex) => {
                          const value =
                            row.type === "numeric" ? getTechnicalValue(combo, row.key) : getFeatureValue(combo, row.key)

                          return (
                            <td
                              key={colIndex}
                              className={`p-3 text-center border-r border-gray-200 ${getCellClassName(value, isHighlighted)}`}
                            >
                              {formatValue(value)}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="max-w-md mx-auto">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0m6 0V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v2.306"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Cars Match Your Criteria</h3>
                <p className="text-gray-600 mb-4">
                  {highlightedRows.size > 0
                    ? "None of the available cars satisfy all the selected features. Try adjusting your requirements or use the 'Reset Filters' button to start over."
                    : "No cars match the current numeric filter ranges. Try adjusting the sliders above or reset all filters."}
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  {highlightedRows.size > 0 && (
                    <div>
                      <strong>Selected features:</strong>
                      <div className="mt-1">
                        {Array.from(highlightedRows)
                          .map((feature) => {
                            const row = parameterRows.find((r) => r.key === feature)
                            return row ? row.label : feature
                          })
                          .join(", ")}
                      </div>
                    </div>
                  )}
                  {Object.entries(numericRanges).some(
                    ([key, range]) => range.current[0] !== range.min || range.current[1] !== range.max,
                  ) && (
                    <div>
                      <strong>Active numeric filters:</strong>
                      <div className="mt-1">
                        {Object.entries(numericRanges)
                          .filter(([key, range]) => range.current[0] !== range.min || range.current[1] !== range.max)
                          .map(([key, range]) => {
                            const row = parameterRows.find((r) => r.key === key)
                            return `${row?.label || key}: ${range.current[0].toFixed(1)} - ${range.current[1].toFixed(1)}`
                          })
                          .join(", ")}
                      </div>
                    </div>
                  )}
                </div>
                <Button onClick={resetFilters} className="mt-4">
                  Reset All Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
