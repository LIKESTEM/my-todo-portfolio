// Exercise 1: Temperature Check - if/else
var temperature = 20;

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// Exercise 1: Temperature Check - switch
switch (true) {
    case temperature < 0:
        console.log("It's freezing!");
        break;
    case temperature >= 0 && temperature <= 15:
        console.log("It's cold.");
        break;
    case temperature >= 16 && temperature <= 25:
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}

// Exercise 2: Divisibility Check - if/else
var number = 6;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// Exercise 2: Divisibility Check - switch
switch (true) {
    case number % 2 === 0 && number % 3 === 0:
        console.log("Divisible by both.");
        break;
    case number % 2 === 0:
        console.log("Divisible by 2.");
        break;
    case number % 3 === 0:
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For Loops

// 1. Print numbers from 1 to 10
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print all even numbers between 1 and 20
for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. Sum of all numbers from 1 to 100
var total = 0;
for (var i = 1; i <= 100; i++) {
    total += i;
}

console.log('Sum 1 - 100: ' + total);

// 4. Print each element in the array
const numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 5. Find the largest number in the array
const numbers2 = [3, 7, 2, 5, 10, 6];
var largest = numbers2[0];

for (var i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }
}

console.log('Largest number: ' + largest);

// Exercise 4: While Loops

// 1. Print numbers from 1 to 10
var i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

// 2. Print all even numbers between 1 and 20
var i = 1;

while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// 3. Sum of all numbers from 1 to 100
var total = 0;
var i = 1;

while (i <= 100) {
    total += i;
    i++;
}

console.log('Sum 1-100: ' + total);

// 4. Print all multiples of 5 less than 50
var i = 5;

while (i < 50) {
    console.log(i);
    i += 5;
}

// Exercise 5: Do While Loops

// 1. Print numbers from 1 to 10
var i = 1;

do {
    console.log(i);
    i++;
} while (i <= 10);

// 2. Sum of all numbers from 1 to 100
var total = 0;
var i = 1;

do {
    total += i;
    i++;
} while (i <= 100);

console.log('Sum 1-100: ' + total);

// 3 & 4: Using readline for Node.js user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    // 3. Prompt the user to enter a number greater than 10
    var input;

    do {
        input = parseInt(await ask('Enter a number greater than 10: '));
    } while (input <= 10);

    console.log('You entered: ' + input);

    // 4. Guessing game: guess a number between 1 and 10
    var secretNumber = 7;
    var guess;

    do {
        guess = parseInt(await ask('Guess a number between 1 and 10: '));
        if (guess !== secretNumber) {
            console.log('Wrong! Try again.');
        }
    } while (guess !== secretNumber);

    console.log('Correct! The number was ' + secretNumber);

    rl.close();
}

main();
