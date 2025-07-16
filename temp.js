
function convertTemperature(value, unit) {
    if (unit.toLowerCase() === "c") {
        return `${value}°C = ${((value * 9) / 5 + 32).toFixed(2)}°F`;
    } else if (unit.toLowerCase() === "f") {
         return `${value}°F = ${((value-32)*5/9).toFixed(2)}°C`;
    } else {
        return "Please provide a valid unit: 'c' for celsius or 'F' for Fahrenheit. ";
    }
}

console.log(convertTemperature(100, 'C'));
console.log(convertTemperature(100, 'F'));