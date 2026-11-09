// Day 1: FizzBuzz 🟢
// Write a program that prints 1-100, but:
// For multiples of 3, print "Fizz"
// For multiples of 5, print "Buzz"
// For multiples of both, print "FizzBuzz"

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

// Day 2: Reverse a String 🟢
// Write a function that reverses a string.

// Input: "hello" → Output: "olleh"
// Try multiple approaches (loop, built-in methods)
// Day 3: Find Largest Number 🟢
// Write a function that finds the largest number in an array.

// Don't use Math.max() - use a loop!
// Then try with reduce()
// Day 4: Remove Duplicates 🟡
// Write a function that removes duplicates from an array.

// Input: [1, 2, 2, 3, 4, 4, 5] → Output: [1, 2, 3, 4, 5]
// Try with Set, try with filter
// Day 5: Palindrome Checker 🟡
// Write a function that checks if a string is a palindrome.

// "racecar" → true
// "hello" → false
// Ignore case and spaces: "A man a plan a canal Panama" → true