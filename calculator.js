// Mini-Project: Calculator 🔴ggg
// Time: 60 minutes

// Build an interactive calculator in the console.

// Requirements:

// Functions for add, subtract, multiply, divide
// A main calculate(num1, operator, num2) function
// Handle division by zero
// Support these operators: +, -, *, /, % (modulus), ** (power)

// Starter Code:
 
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);  
        // Add remaining cases
        default:
            return "Invalid operator";
    }
}

// Test
console.log(calculate(10, "+", 5));  // 15
console.log(calculate(10, "-", 5));  // 5
console.log(calculate(10, "*", 5));  // 50
console.log(calculate(10, "/", 5));  // 2
console.log(calculate(10, "/", 0));  // Error message]