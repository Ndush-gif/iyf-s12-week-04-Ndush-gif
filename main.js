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

     // Exercise 2: Object Methods
     const calculator = {
    add: function(a, b) {
        return a + b;
    },
    // Shorthand method syntax
    subtract(a, b) {
        return a - b;
    },
    // Arrow function
    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));
output: 8
console.log(calculator.subtract(10, 4));
output: 6
console.log(calculator.multiply(6, 7));
// output: 42

// Exercise 3: Object Iteration

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log(Object.keys(scores));   // ["math", "english", "science"]

// Get values
console.log(Object.values(scores)); // [95, 88, 92]

// Get entries
console.log(Object.entries(scores)); // [["math", 95], ["english", 88], ...]

// Loop through
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

// Task 8.3: Array of Objects 🔴
// Exercise: Working with Real Data

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// Your tasks - use array methods:

// 1. Get all student names
const names = students.map(student => student.name)
console.log(names); // ["Alice", "Bob", "Charlie", "Diana", "Eve"]

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log(highAchievers); // [{name: "Alice", ...}, {name: "Charlie", ...}, {name: "Diana", ...}, {name: "Eve", ...}]
// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log(charlie); // {name: "Charlie", age: 23, grade: 90, major: "CS"}

// 4. Calculate average grade
const avgGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log(avgGrade); // 88.4

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log(csMajors); // [{name: "Alice", ...}, {name: "Charlie", ...}, {name: "Eve", ...}]

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade); // [{name: "Eve", ...}, {name: "Charlie", ...}, {name: "Diana", ...}, {name: "Alice", ...}, {name: "Bob", ...}] 

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log(hasTopStudent); // true

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log(allPassing); // true


// Task 8.4: JSON — Data as Text 🟡
const json = '{"name":"Wanjiku","grades":{"math":88,"english":92}}';

// Text → object
const student = JSON.parse(json);
console.log(student.grades.math);        // 88

// Object → text (2 = indent, for readability)
const backToText = JSON.stringify(student, null, 2);
console.log(typeof backToText);          // "string"

// Exercise: given this JSON string of posts, parse it, then:

const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

// Parse it into an array
const posts = JSON.parse(postsJson);
console.log(posts); // Array of post objects
output: [
  { id: 1, title: 'Welcome', likes: 12, published: true },
  { id: 2, title: 'Draft ideas', likes: 0, published: false },
  { id: 3, title: 'Week 4 recap', likes: 30, published: true }
]
// Keep only published posts
const publishedPosts = posts.filter(post => post.published);
console.log(publishedPosts); // [{id: 1, ...}, {id: 3, ...}]
output: [
  { id: 1, title: 'Welcome', likes: 12, published: true },
  { id: 3, title: 'Week 4 recap', likes: 30, published: true }
]   
// Sort them by likes, highest first
const sortedPosts = publishedPosts.sort((a, b) => b.likes - a.likes);
console.log(sortedPosts); // [{id: 3, ...}, {id: 1, ...}]
output: [
  { id: 3, title: 'Week 4 recap', likes: 30, published: true },
  { id: 1, title: 'Welcome', likes: 12, published: true }
]
// Map them to strings like "Week 4 recap (30 likes)"
const postStrings = sortedPosts.map(post => `${post.title} (${post.likes} likes)`); 
console.log(postStrings); // ["Week 4 recap (30 likes)", "Welcome (12 likes)"]  
output: [ 'Week 4 recap (30 likes)', 'Welcome (12 likes)' ] 
// JSON.stringify the filtered array back to text
const filteredJson = JSON.stringify(sortedPosts, null, 2);
console.log(filteredJson); // JSON string of the filtered posts
output: `[
  {
    "id": 3,
    "title": "Week 4 recap",
    "likes": 30,
    "published": true
  },
  {
    "id": 1,
    "title": "Welcome",
    "likes": 12,
    "published": true
  }
]`
// Rules to remember: JSON keys and strings use double quotes; no trailing commas; no functions or undefined. JSON.parse on invalid text throws a SyntaxError — wrap it in try/catch when the text comes from outside your code.

