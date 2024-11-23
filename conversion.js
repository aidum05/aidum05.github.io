// conversion.js

function convertUnits(value, fromUnit, toUnit) {
    const conversionFactors = {
        // Define conversion factors for mass
        g: 1,
        mg: 1e-3,
        ug: 1e-6,
        ng: 1e-9,

        // Define conversion factors for volume
        L: 1,
        mL: 1e-3,
        uL: 1e-6,

        // Define conversion factors for molarity
        M: 1,
        mM: 1e-3,
        uM: 1e-6,
        nM: 1e-9,
    };

    // Convert to base unit (e.g., grams or liters) then to target unit
    return (value * conversionFactors[fromUnit]) / conversionFactors[toUnit];
}
