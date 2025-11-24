// https://github.com/Jyotsna59/Javascript_practice.git

console.log(Math.random() * 10); // Prints a random number between 0 and 1
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(Math.random() * 43.8));
console.log(Number.isInteger(2017)); // Prints false

console.log('Teaching the world how to code'.length);
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim().startsWith("R"));

/* Declare a variable named favoriteFood and set it equal to your favorite food.
Then, declare a variable named numOfSlices and set it equal to the number of slices you would like to eat. 
Finally, use console.log() to print the variables. */

var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

//Let variable declaration and reassignment.

let changeMe = true;
changeMe = false;
console.log(changeMe); 

// Create a Variable: const

const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos' //TypeError: Assignment to constant variable
// const testing; //SyntaxError: Missing initializer in const declaration

//Mathematical Assignment Operators
let levelUp = 10;
levelUp += 5;   
console.log(levelUp);
let powerLevel = 9001;
powerLevel -= 100;
console.log(powerLevel);    
let multiplyMe = 32;
multiplyMe *= 11;
console.log(multiplyMe);
let quarterMe = 1152;   
quarterMe /= 4;
console.log(quarterMe); 


// increment and decrement operators
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;
console.log('gainedDollar = ' + gainedDollar);
console.log('lostDollar = ' + lostDollar);

//String Interpolation  
const myName = 'Jyotsna';
const myCity = 'Rotterdam';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);   