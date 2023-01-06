//Ternary Operator

// A ternary operator evaluates a condition and executes a block of code based on the condition.

//Syntax:

// condition ? expression1 : expression2

// If the condition evaluates to true then expression 1 is executed.
// If the condition evaluates to false then expression 2 is executed.

// Ternary operator is also known as conditional operator.


//Example 1

/*
let age = 15;

let result = (age >= 18) ? "Eligible to vote" : "Not ELigible";

console.log(result);

*/


//Example 2

/*
let marks = prompt("Please enter your marks: ")

let result = (marks >= 35) ? "Passed" : "Failed";

console.log(`You ${result} the exam`);
*/

//Nested ternary operators

// We can nest one ternary operator as an expression inside another ternary operator.

let a = 10;

let result = (a >= 0) ? (a == 0 ? "Zero" : "Positive") : "Negative";

console.log(`The number is ${result}`);