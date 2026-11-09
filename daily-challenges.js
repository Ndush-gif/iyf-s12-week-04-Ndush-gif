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
// Using built-in methods
function reverseString(str) {
    return str.split("").reverse().join("");
}
// Using a loop
function reverseStringLoop(str) {
    let reversed = "";  
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello")); // "olleh"
console.log(reverseStringLoop("hello")); // "olleh"

// Day 3: Find Largest Number 🟢
// Write a function that finds the largest number in an array.

// Don't use Math.max() - use a loop!
// Then try with reduce()

// Using a loop
function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}   
// Using reduce()
function findLargestNumberReduce(arr) {
    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}   
console.log(findLargestNumber([1, 3, 2, 5, 4])); // 5
console.log(findLargestNumberReduce([1, 3, 2, 5, 4])); // 5

// Day 4: Remove Duplicates 🟡
// Write a function that removes duplicates from an array.

// Input: [1, 2, 2, 3, 4, 4, 5] → Output: [1, 2, 3, 4, 5]
// Try with Set, try with filter
// Using Set
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// Using filter
function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicatesFilter([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// Day 5: Palindrome Checker 🟡
// Write a function that checks if a string is a palindrome.

// "racecar" → true
// "hello" → false
// Ignore case and spaces: "A man a plan a canal Panama" → true

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true   
