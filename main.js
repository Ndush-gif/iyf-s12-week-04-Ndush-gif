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
let incrementDecrementCount = 0;
incrementDecrementCount++;  // count is now 1
incrementDecrementCount--;  // count is now 0

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
console.log(greet("Catherine")); // output: Hello, Catherine!

// Function expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // output: 8

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(4, 6)); // output: 24                  

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};
console.log(divide(10, 2)); // output: 5

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
    for (let i = 0; i < names.length; i++) {
        initials += names[i].charAt(0).toUpperCase();
    }
    return initials;
}

// reverseString(str) - reverses a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(calculateArea(10, 5)); // output: 50
console.log(celsiusToFahrenheit(25)); // output: 77
console.log(isEven(4)); // output: true
console.log(getInitials("Catherine Nduku")); // output: CN
console.log(reverseString("Hello, World!")); // output: !dlroW ,olleH   

// Exercise 3: Default Parameters

function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());              // Hello, Guest!
console.log(greet("Alice"));       // Hello, Alice!
console.log(greet("Bob", "Hi"));   // Hi, Bob!

// Build: A function calculateTip(bill, tipPercent = 15) that returns the tip amount.

function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}
console.log(calculateTip(100));        // output: 15
console.log(calculateTip(100, 20));    // output: 20


// Task 7.4: Control Flow 🟡
// Exercise 1: If/Else Statements
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(85));  // output: B
console.log(getGrade(72));  // output: C
console.log(getGrade(59));  // output: F


// Exercise 2: Switch Statements
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        // ... add remaining days
        default:
            return "Invalid day";
    }
}
console.log(getDayName(1));  // output: Monday
console.log(getDayName(5));  // output: Invalid day

// Exercise 3: Loops

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;}

// For...of (arrays)
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}


// Build these programs:

// Print numbers 1-100
const numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}
console.log(numbers);
// Print only even numbers 1-50
const evenNumbers = [];
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}
console.log(evenNumbers);
// FizzBuzz (print "Fizz" for multiples of 3, "Buzz" for 5, "FizzBuzz" for both)
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
// Print a triangle of stars
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}


// Lesson 8 Tasks
// Task 8.1: Arrays 🟢
// Exercise 1: Array Basics

// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements
console.log(fruits[0]);     // apple
console.log(fruits.length); // 3

// Modifying arrays
fruits.push("grape");        // Add to end
console.log(fruits);        // ["apple", "banana", "orange", "grape"]
fruits.unshift("mango");     // Add to start
console.log(fruits);        // ["mango", "apple", "banana", "orange", "grape"]
fruits.pop();                // Remove from end
console.log(fruits);        // ["mango", "apple", "banana", "orange"]
fruits.shift();              // Remove from start
console.log(fruits);        // ["apple", "banana", "orange"]

// Exercise 2: Array Methods

const numbers = [1, 2, 3, 4, 5];

// forEach - do something with each element
numbers.forEach(num => console.log(num * 2));

// map - transform each element
const doubled = numbers.map(num => num * 2);

// filter - keep elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);

// find - get first element that passes test
const firstEven = numbers.find(num => num % 2 === 0);

// reduce - combine all elements
const sum = numbers.reduce((total, num) => total + num, 0);

// includes - check if element exists
console.log(numbers.includes(3)); // true

// Build: Use array methods to:

// Double all numbers in an array
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
// Filter out negative numbers
const positiveNumbers = numbers.filter(num => num > 0);
console.log(positiveNumbers); // [1, 2, 3, 4, 5]
// Find the first number greater than 10
const firstGreaterThan10 = numbers.find(num => num > 10);
console.log(firstGreaterThan10); // undefined
// Calculate the product of all numbers
const product = numbers.reduce((total, num) => total * num, 1);
console.log(product); // 120

// Task 8.2: Objects 🟢
// Exercise 1: Object Basics
// Creating objects
const person = {
    firstName: "Brian",
    lastName: "Kamau",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "football"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Accessing properties
console.log(person.firstName);         // Dot notation
// output: Brian
console.log(person["lastName"]);       // Bracket notation
// output: Kamau
console.log(person.address.city);      // Nested
// output: Nairobi

// Modifying properties
person.age = 31;
person.phone = "0712 345 678";         // Add new property
delete person.isStudent;               // Remove property

console.log(person);{;
    output: {
     firstName: 'Brian',
     lastName: 'Kamau',
     age: 31,   
     hobbies: [ 'reading', 'coding', 'football' ];
     address: { city: 'Nairobi',;
    country: 'Kenya' };
     phone: '0712 345 678' };
