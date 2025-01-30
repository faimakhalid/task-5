// 1. Exponentiation Operator (**)
let base = 2;
let exponent = 3;
let result = base ** exponent; // 2^3 = 8
console.log("Exponentiation Result:", result); // Output: 8

// 2. ES6 Modules

const mathModule = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

console.log("Add Function Result:", mathModule.add(5, 3)); // Output: 8
console.log("Subtract Function Result:", mathModule.subtract(5, 3)); // Output: 2


// 3. JavaScript Generators

// Generator function
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// Using the generator
const generator = numberGenerator();
console.log("Generator Values:");
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3
console.log(generator.next().value); // Output: undefined 

// Infinite Generator 
function* infiniteSequence() {
  let num = 1;
  while (true) {
    yield num++;
  }
}

const infiniteGen = infiniteSequence();
console.log("Infinite Generator Values:");
console.log(infiniteGen.next().value); // Output: 1
console.log(infiniteGen.next().value); // Output: 2
console.log(infiniteGen.next().value); // Output: 3
