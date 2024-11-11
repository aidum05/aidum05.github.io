// conversion.js

function convertUnits(value, fromUnit, toUnit) {
    const conversionFactors = {
        // Define conversion factors for mass
        g: 1,
        mg: 1000,
        ug: 1000000,
        ng: 1000000000,

        // Define conversion factors for volume
        L: 1,
        mL: 1000,
        uL: 1000000,

        // Define conversion factors for molarity
        M: 1,
        mM: 1000,
        uM: 1000000,
        nM: 1000000000,
    };

    // Convert to base unit (e.g., grams or liters) then to target unit
    return (value * conversionFactors[fromUnit]) / conversionFactors[toUnit];
}
