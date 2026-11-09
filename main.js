// ============================================================
// Week 4: JavaScript Fundamentals
// Lesson 7 (Tasks 7.1 - 7.4) and Lesson 8 (Tasks 8.1 - 8.4)
// ============================================================


// ------------------------------------------------------------
// Task 7.1: JavaScript Setup & Variables
// ------------------------------------------------------------

const myName = "Catherine";                      // string
const myAge = 22;                                // number
const isStudent = true;                          // boolean
const favoriteColors = ["blue", "green", "purple"]; // array
const todayDate = new Date();                    // today's date

console.log("My name is", myName);
console.log("My age is", myAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are", favoriteColors);
console.log("Today's date is", todayDate);

// typeof operator
console.log(typeof myName);    // string
console.log(typeof myAge);     // number
console.log(typeof isStudent); // boolean

// let vs const
let score = 100;
score = 150;  // Works!
console.log("Score:", score);

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned

// CHANGE THIS to your real birth year (22 in Nov 2026 means 2004 or 2003)
const birthYear = 2004;


// ------------------------------------------------------------
// Task 7.2: Data Types & Operators
// ------------------------------------------------------------

// Exercise 1: Number Operations
let a = 10;
let b = 3;

console.log(a + b);   // 13   Addition
console.log(a - b);   // 7    Subtraction
console.log(a * b);   // 30   Multiplication
console.log(a / b);   // 3.3333333333333335   Division
console.log(a % b);   // 1    Modulus (remainder)
console.log(a ** b);  // 1000 Exponentiation

// Increment/Decrement
let incrementDecrementCount = 0;
incrementDecrementCount++;  // now 1
incrementDecrementCount--;  // now 0

// Exercise 2: String Operations
let firstName = "Catherine";
let lastName = "Nduku";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals (preferred)
let greeting = `Hello, ${firstName}!`;
let message = `${firstName} has ${firstName.length} letters.`;
console.log(greeting);
console.log(message);

// String methods
console.log(fullName.toUpperCase());        // CATHERINE NDUKU
console.log(fullName.toLowerCase());        // catherine nduku
console.log(firstName.charAt(0));           // C
console.log(fullName.includes("Catherine")); // true

// Exercise 3: Comparison & Logical Operators
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

console.log(true && true);   // AND -> true
console.log(true || false);  // OR  -> true
console.log(!true);          // NOT -> false

// Challenge
const myAgeInDays = myAge * 365;
const myAgeInHours = myAgeInDays * 24;
const yearTurning100 = birthYear + 100;

console.log(`I am approximately ${myAgeInDays} days old.`);    // 8030
console.log(`I am approximately ${myAgeInHours} hours old.`);  // 192720
console.log(`I will turn 100 in the year ${yearTurning100}.`);


// ------------------------------------------------------------
// Task 7.3: Functions
// ------------------------------------------------------------

// Exercise 1: Function Declarations

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Catherine")); // Hello, Catherine!

// Function expression
const add = function (a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(4, 6)); // 24

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};
console.log(divide(10, 2)); // 5

// Exercise 2: Build These Functions

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    const names = fullName.split(" ");
    let initials = "";
    for (let i = 0; i < names.length; i++) {
        initials += names[i].charAt(0).toUpperCase();
    }
    return initials;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(calculateArea(10, 5));              // 50
console.log(celsiusToFahrenheit(25));           // 77
console.log(isEven(4));                         // true
console.log(getInitials("Catherine Nduku"));    // CN
console.log(reverseString("Hello, World!"));    // !dlroW ,olleH

// Exercise 3: Default Parameters
// (renamed so it doesn't replace the greet function above)
function greetWithDefaults(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefaults());             // Hello, Guest!
console.log(greetWithDefaults("Alice"));      // Hello, Alice!
console.log(greetWithDefaults("Bob", "Hi"));  // Hi, Bob!

// Build: calculateTip(bill, tipPercent = 15) returns the tip amount
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}
console.log(calculateTip(100));      // 15
console.log(calculateTip(100, 20));  // 20


// ------------------------------------------------------------
// Task 7.4: Control Flow
// ------------------------------------------------------------

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

console.log(getGrade(85));  // B
console.log(getGrade(72));  // C
console.log(getGrade(59));  // F

// Exercise 2: Switch Statements
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}
console.log(getDayName(1));  // Monday
console.log(getDayName(5));  // Friday
console.log(getDayName(9));  // Invalid day

// Exercise 3: Loops

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// For...of (arrays)
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

// Build these programs:

// 1. Print numbers 1-100
const oneToHundred = [];
for (let i = 1; i <= 100; i++) {
    oneToHundred.push(i);
}
console.log(oneToHundred);

// 2. Print only even numbers 1-50
const evenUpTo50 = [];
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        evenUpTo50.push(i);
    }
}
console.log(evenUpTo50);

// 3. FizzBuzz
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

// 4. Print a triangle of stars
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}


// ------------------------------------------------------------
// Task 8.1: Arrays
// ------------------------------------------------------------

// Exercise 1: Array Basics
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

console.log(fruits[0]);     // apple
console.log(fruits.length); // 3

fruits.push("grape");       // Add to end
console.log(fruits);        // ["apple", "banana", "orange", "grape"]
fruits.unshift("mango");    // Add to start
console.log(fruits);        // ["mango", "apple", "banana", "orange", "grape"]
fruits.pop();               // Remove from end
console.log(fruits);        // ["mango", "apple", "banana", "orange"]
fruits.shift();             // Remove from start
console.log(fruits);        // ["apple", "banana", "orange"]

// Exercise 2: Array Methods (uses the numbers array from above)

// forEach - do something with each element
numbers.forEach(num => console.log(num * 2));

// map - transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - keep elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// find - get first element that passes the test
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

// reduce - combine all elements
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// includes - check if element exists
console.log(numbers.includes(3)); // true

// Build: use array methods on an array that has negatives and big numbers
const testNumbers = [4, -2, 15, 7, -9, 12];

// 1. Double all numbers
const doubledNumbers = testNumbers.map(num => num * 2);
console.log(doubledNumbers); // [8, -4, 30, 14, -18, 24]

// 2. Filter out negative numbers
const nonNegative = testNumbers.filter(num => num >= 0);
console.log(nonNegative); // [4, 15, 7, 12]

// 3. Find the first number greater than 10
const firstOver10 = testNumbers.find(num => num > 10);
console.log(firstOver10); // 15

// 4. Calculate the product of all numbers (start at 1, not 0)
const product = testNumbers.reduce((total, num) => total * num, 1);
console.log(product); // 90720


// ------------------------------------------------------------
// Task 8.2: Objects
// ------------------------------------------------------------

// Exercise 1: Object Basics
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

console.log(person.firstName);     // Brian   (dot notation)
console.log(person["lastName"]);   // Kamau   (bracket notation)
console.log(person.address.city);  // Nairobi (nested)

person.age = 31;                   // Modify
person.phone = "0712 345 678";     // Add new property
delete person.isStudent;           // Remove property

console.log(person);
// output: { firstName: 'Brian', lastName: 'Kamau', age: 31,
//           hobbies: [ 'reading', 'coding', 'football' ],
//           address: { city: 'Nairobi', country: 'Kenya' },
//           phone: '0712 345 678' }

// Exercise 2: Object Methods
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    // Shorthand method syntax
    subtract(a, b) {
        return a - b;
    },
    // Arrow function
    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(6, 7));  // 42

// Exercise 3: Object Iteration
const scores = {
    math: 95,
    english: 88,
    science: 92
};

console.log(Object.keys(scores));    // ["math", "english", "science"]
console.log(Object.values(scores));  // [95, 88, 92]
console.log(Object.entries(scores)); // [["math", 95], ["english", 88], ["science", 92]]

for (const [subject, mark] of Object.entries(scores)) {
    console.log(`${subject}: ${mark}`);
}


// ------------------------------------------------------------
// Task 8.3: Array of Objects
// ------------------------------------------------------------

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names
const names = students.map(student => student.name);
console.log(names); // ["Alice", "Bob", "Charlie", "Diana", "Eve"]

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log(highAchievers); // Alice, Charlie, Diana, Eve

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log(charlie); // { name: "Charlie", age: 23, grade: 90, major: "CS" }

// 4. Calculate average grade
const avgGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log(avgGrade); // 86

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log(csMajors); // Alice, Charlie, Eve

// 6. Sort by grade (highest first) - copy first so the original isn't changed
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade); // Eve, Charlie, Diana, Alice, Bob

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log(hasTopStudent); // true

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log(allPassing); // true


// ------------------------------------------------------------
// Task 8.4: JSON - Data as Text
// ------------------------------------------------------------

const json = '{"name":"Wanjiku","grades":{"math":88,"english":92}}';

// Text -> object
const student = JSON.parse(json);
console.log(student.grades.math); // 88

// Object -> text (2 = indent, for readability)
const backToText = JSON.stringify(student, null, 2);
console.log(typeof backToText);   // "string"

// Exercise: posts
const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

// 1. Parse it into an array
const posts = JSON.parse(postsJson);
console.log(posts);

// 2. Keep only published posts
const publishedPosts = posts.filter(post => post.published);
console.log(publishedPosts); // ids 1 and 3

// 3. Sort by likes, highest first (copy first so publishedPosts isn't changed)
const sortedPosts = [...publishedPosts].sort((a, b) => b.likes - a.likes);
console.log(sortedPosts); // id 3 (30 likes), then id 1 (12 likes)

// 4. Map them to strings like "Week 4 recap (30 likes)"
const postStrings = sortedPosts.map(post => `${post.title} (${post.likes} likes)`);
console.log(postStrings); // [ 'Week 4 recap (30 likes)', 'Welcome (12 likes)' ]

// 5. JSON.stringify the filtered array back to text
const filteredJson = JSON.stringify(sortedPosts, null, 2);
console.log(filteredJson);

// Rules to remember: JSON keys and strings use double quotes; no trailing
// commas; no functions or undefined. JSON.parse on invalid text throws a
// SyntaxError, so wrap it in try/catch when the text comes from outside.