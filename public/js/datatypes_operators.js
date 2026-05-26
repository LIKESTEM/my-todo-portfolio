// Exercise 1: Numbers
let integerNum = 15;
let floatNum = 3.14;

let addition = integerNum + 5;
let subtraction = integerNum - 5;
let multiplication = integerNum * 5;
let division = integerNum / 5;
let modulus = integerNum % 5;
let exponentiation = integerNum ** 2;

console.log('Integer: ' + integerNum);
console.log('Float: ' + floatNum);
console.log('Addition: ' + addition);
console.log('Subtraction: ' + subtraction);
console.log('Multiplication: ' + multiplication);
console.log('Division: ' + division);
console.log('Modulus: ' + modulus);
console.log('Exponentiation: ' + exponentiation);

// Exercise 2: Boolean and Operators
let x = 8;
let y = 12;

console.log('x > y: ' + (x > y));
console.log('x <= y: ' + (x <= y));
console.log('x === y: ' + (x === y));
console.log('x !== y: ' + (x !== y));

let a = true;
let b = false;

console.log('a AND b: ' + (a && b));
console.log('a OR b: ' + (a || b));
console.log('NOT a: ' + (!a));

let p = 10;

p += 5;
console.log('p += 5: ' + p);

p -= 3;
console.log('p -= 3: ' + p);

p *= 2;
console.log('p *= 2: ' + p);

p /= 4;
console.log('p /= 4: ' + p);

p %= 3;
console.log('p %= 3: ' + p);
