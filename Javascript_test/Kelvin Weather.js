// Define Kelvin with 293 fixed value
const kelvin = 293; 

// Define constant variable celcius = kelvin - 273 to the variable.
const celsius = kelvin - 273;

//Calculate temperature in fehrenheit 
let fahrenheit = celsius * (9 / 5) + 32;

// round off fahrenheit number
fahrenheit = Math.floor(fahrenheit);
console.log(`${kelvin} kelvin is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33/100);

// Round down
newton = Math.floor(newton);

console.log(`${kelvin} kelvin is ${newton} degrees Newton.`);