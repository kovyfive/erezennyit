Create the following structure in TS in /src/model/model.ts
The structure will represent a car model with all of its variants and motor types. Please use appropriate names where applicable, instead what I wrote (if its better). This model will be the base for extracting information of flyers from different manufacturers for different car models. The data is the subset of all information possibly present on flyers, only those which i currently focusing on. 

Each car types will implement this as a data object. Eg. Kia Ceed will the have a /src/data/kia-ceed-sw.ts file, with the following variations: Silver, Gold, Gold Sport, Platinum and Platinum Gt Line. There are 2 engine types: 100 T-GDI and 140 T-GDI, also automatic gears option for all variants and types. Create a logical structure to represent all information with the following data for each variants. I'll add some description for what these means for clarity if needed. The structure must be logical, with minimal data repitition - the model itself can be big, but instanciating objects based on the type must be as small as it can be- you can introduce custom constructors for it, to manage file size for actual objects. the goal is to minimaze file size for the actual object, because an AI agent will fill out the details (give the flyer as an input) so writing and reading should be as minimal context for it. It could be big if there are like 6 variants and 10 engine types - so the class should be accounting for this

All of these are mandatory attributes, so if a flyer is not including any of them, it should be marked as NOT_AVAILABLE (if not instructed otherwise) - it will be later on picked up by another agent, to try to find these online. 

- Manufacturer
- ModelName
- VariantName
- ListedEngineName
    - this is the name of the engine option in the document
- EngineType
    - diesel, benzin, mild-hybrid, full-hybrid, phev, or ev
- TransmissionType
    - This is tricky, because its either included in the offer, with the motor type (eg it has 3 option manual, automatic, or hybrid which includes the automatic) or it could be just an option to add it to any of the variants, so its just a price. Maybe it would 2 attribute - TrasmissionType and AutomaticPrice if its an option - but that could be an issue, because in the example there are already 10 options (5 variants * 2 engine type) this would double the data - or if it would be in a normal form, and it would be hard to calculate the full price for it. Also there are certain features only available if automatic is chosen, which makes it also difficult to mark those, which is is available for it - this is crucial to get it right 
- Price
    - it should include the registration price as well, as it will not be listed separately 
    - from now on, all prices are in HUF, but for data storage it doesnt really matter
    - also its always gross price
- DiscountedPrice 
    - if available, this can be empty if not listed
- DiscountTarget
    - Private or Business or Both - there are dealerships which only lists discounts for individual non-business people
- CustomColorPrices
    - list of prices - the minimal should be used for calculations
- EngineDisplacement
- HP (Horsepower)
- Consumption
- Acceleration0to100
- TopSpeed
- FuelTankCapacity
- CargoVolumeSeatsUp
- Range
- SpeakerCount
- Packages: 
    - Name and Price
    - Does not need to include all details, because it will be referenced for attributes that is only included if the package is bought
    - Sometimes, the packages are only available for certain variants, but this information also does not need to be included - because it will only be reference if needed in that certain variant



These next attributes should always be added as features, so hard code them in the object instead of adding as a abstract list. The attributes should be grouped in a logical manner, with subclasses. These should be either true if included, false if not included, or the reference for the package name which includes that feature. If a feature needs a package to be bought in order to be included, it will be later added to the price as necessary price option. If there is a single option to buy it and not a package, for example spare tire, the tire should be added as a package with the price, and should be referenced. If there are multiple attributes for the advanced techs, like PowerTailgate and PowerTailgateWithFootSensor the lower should also be yes, if the advanced is also yes (just fyi). 

- LKA (LaneKeepAssist)
- CruiseControl
- SCC (SmartCruiseControl)
- SCCSG (SmartCruiseControlWithStopAndGo)
- BCA (BlindSpotCollisionAvoidanceAssist)
    - typically implemented in the side mirrors
- ISOFIX
- ReversingRadar
- FrontParkingSensor
- RearParkingSensor
- ParkingCameras
    - if itdoes not state it is 360, its just cameras all around, without a head view
- ParkingCameras360View
- EPB (ElectricParkingBrake)
- KeylessStart
- WirelessPhoneCharger
- PowerTailgate
- PowerTailgateWithFootSensor
- FrontPowerWindows
- RearPowerWindows
- HeatedFrontSeats
- HeatedRearSeats
- DualZoneAC
- SpareTire
- PremiumSpeaker
- WiredCarPlayAndroidAuto
- WirelessCarPlayAndroidAuto
    - if the wireless if true, the wired should also be true
    - there could be deals where the wired is default true, but the wireless is in package, or both in package
- MetalPedals
- PaddleShifters
- VelourFloorMats
- RubberMats
- TintedRearWindows
- SemiOrFullAutomaticParkingAssistant
- HeadUpDisplay
- RoofRails


Seat types are also tricky - because its either default cloth for all variants, and there are packages for all variants to replace cloths with leathers, and there are maybe multiple versions of leathers to choose from- maybe cloths too. The goal would be represent the price for a leather upgrade - should this be list of packages? maybe during calculation we could get the minimum price from them. But we need to represent the option for already included. 

- LeatherSeatPackages

add a method for calculating price based on filters. if there are no filter added for a model, the price should be the full price and the discounted price, both excluding all the packages mentioned in the features. filters will be the names of the attributes, marked by a user for special interest. if a filter is added like PowerTailgate, then the price should only include packages for the selected filters, and exlcude other options. if eg. the PowerTailgate is in Deluxe package then selecting this as a string filter, will include the Deluxe package in the price, but since other filters are not selected it will be excluded. if the given filters attribute value is no, meaning the requested feature is not included, return with maxvalue - it will he handled in the presenation layer


also create a unit test that can be run to test the data files in the /src/data folder. check if all 