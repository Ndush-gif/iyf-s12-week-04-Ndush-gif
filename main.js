// Task 7.1: JavaScript Setup & Variables 🟢

// Variable declarations — use YOUR details
let name = "Amina";
let age = 21;
const birthYear = 2005;

// typeof operator
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const
let score = 100;
score = 150;  // Works!

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned

// Exercise: Variable Practice Declare variables for:

// Your name (string)
const myName = "Catherine";
// Your age (number)
const myAge = 22;
// Whether you're a student (boolean)
const isStudent = true;
// Your favorite colors (array - we'll learn more next lesson)
const favoriteColors = ["blue", "green", "purple"];
// Today's date (use new Date())
const todayDate = new Date();

console.log(myName);
// output: Catherine
console.log(myAge);
// output: 22
console.log(isStudent);
// output: true
console.log(favoriteColors);
// output: ["blue", "green", "purple"]
console.log(todayDate);
// output: Mon Nov 09 2026 02:32:33 GMT+0300 (East Africa Time)

// Task 7.2: Data Types & Operators 🟢
// Exercise 1: Number Operations
// Basic math
let a = 10;
let b = 3;

console.log(a + b);   // Addition
// output: 13
console.log(a - b);   // Subtraction
// output: 7
console.log(a * b);   // Multiplication
// output: 30
console.log(a / b);   // Division
// output: 3.333...
console.log(a % b);   // Modulus (remainder)
// output: 1
console.log(a ** b);  // Exponentiation
// output: 1000

// Increment/Decrement
let count = 0;
count++;  // count is now 1
count--;  // count is now 0

// Exercise 2: String Operations

let firstName = "Catherine";
let lastName = "Nduku";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals (preferred)
let greeting = `Hello, ${firstName}!`;
let message = `${firstName} has ${firstName.length} letters.`;

// String methods
console.log(fullName.toUpperCase());
// output: CATHERINE NDUKU
console.log(fullName.toLowerCase());
// output: catherine nduku
console.log(firstName.charAt(0));
// output: C
console.log(fullName.includes("Amina"));
// output: false

// Exercise 3: Comparison & Logical Operators

// Comparison
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

// Logical
console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT

// Challenge: Calculate and display:

// Your age in days (approximately)
const myAgeindays = myAge * 365;
// Your age in hours
const myAgeinhours = myAgeindays * 24;
// The year you'll turn 100
const yearTurning100 = birthYear + 100;

console.log(`I am approximately ${myAgeindays} days old.`);
// output: I am approximately 8030 days old.
console.log(`I am approximately ${myAgeinhours} hours old.`);
// output: I am approximately 192720 hours old.
console.log(`I will turn 100 in the year ${yearTurning100}.`);
// output: I will turn 100 in the year 2105.

// Task 7.3: Functions 🟡
// Exercise 1: Function Declarations

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Exercise 2: Build These Functions

// calculateArea(width, height) - returns area of rectangle
function calculateArea(width, height) {
    return width * height;
}   
// celsiusToFahrenheit(celsius) - converts temperature
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
// isEven(number) - returns true if even, false if odd
function isEven(number) {
    return number % 2 === 0;
}
// getInitials(fullName) - returns initials (e.g., "Catherine Nduku" → "CN")
function getInitials(fullName) {
    const names = fullName.split(" ");
    let initials = "";
// reverseString(str) - reverses a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(calculateArea)
output: 50
console.log(celsiusToFahrenheit(25)); // output: 77
output: true
console.log(isEven(4)); // output: true
output: true
console.log(getInitials("Catherine Nduku")); // output: CN