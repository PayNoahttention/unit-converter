// let unitType = document.getElementById('unit');
let unit = parseInt(unitType.value)

// Length Converter
let feet = unit * 3.28084;
let meter = unit * 0.3048;

// Volume Converter
let liter = unit * 3.78541;
let gallon = unit * 0.264172;

// Mass  Converter 
let kilo = unit * 0.453592;
let pound = unit * 2.20462;

function convert() {
    document.getElementById("meters").textContent = meter
}

console.log(unit); 