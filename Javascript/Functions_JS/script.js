//Function

//We can use function to avoid repeating the same code, so that we can wrap the code and reuse it.

//To declare a function we can use function keyword, followed by the function name, a list of parameters and the function body which is as shown below:

/*
function functioName(parameters)
{
//body of the function
}

Function names are basically in camescase and it starts with showData(),fetchData(),getData() etc.

A function can accept zero,or one or multiple parameters, if we will give multiple paramters, we need to use a comma to separate the paramaters.

*/

//Example 1
/*
function showMessage()
{
    console.log(`Hi ..This is function`);

}

//We can call the function which is also known as invoking the function,to call a function we must use its name followed by arguments enclosing in paranthesis, arguments are optional.

//functionName(arguments);

//When calling a function Javascript executes the code inside the function body.

showMessage();
showMessage();
showMessage();
*/


//Example 2

/*
function Rajeshwari() {

    console.log("Hi Rajeshwari...");
}

Rajeshwari();
Rajeshwari();
Rajeshwari();

*/


//Example 3
/*
function showMessage() {
    
    let message = "Rajeshwari is learning Javascript";

    alert(message);
}

showMessage();
*/

//Example 4

/*
let username = "Rajat";

function showMessage() {

    let message = `Hello ${username}`;

    console.log(message);
}

showMessage();
*/

//Example 5
/*
let username = "Rajat";

function showMessage() {

    username = "Suraj";

    let message = `Hello ${username}`;

    console.log(message);
}

//If a same variable name is declared inside the function then it shadows the outer variable name.

showMessage();

console.log(username);
*/

//Example 6

/*
let username = "Rajat"; //global variable

function showMessage() {

    let username = "Rahul"; //local variable

    let message = `Hello ${username}`;

    console.log(message);
}

//Variables declared outside of any function such as outer username are called global variables.

//Global variables are visisble from any function unless shadowed by locals.

console.log(`Before calling the function:${username}`);

showMessage();

console.log(`After calling the function:${username}`);

*/

//Example 7

/*
function showMessage(color1, color2, color3, color4, color5)
{
    let colors = `${color1} ${color2} ${color3} ${color4} ${color5}`;

    console.log(colors);
}

showMessage("Green", "Red", "Orange", "Violet", "Grey");

showMessage("Yellow", "Black", "Purple", "LightGreen", "Coral");

*/

//Example 8

//Default values

/*
function colors(color1, color2="Purple") {
    
    colors = color1 + " " + color2;

    console.log(colors);
}

colors("Violet");
*/


//Example 9

//Basic Arithmetic Operations

/*
function add(a, b) {
    
    let result = a + b;

    console.log(`The addition of two numbers: ${result}`);
}

function sub(a, b) {
    
    let result = a - b;

    console.log(`The subtraction of two numbers: ${result}`);
}

function mult(a, b) {
    
    let result = a * b;

    console.log(`The multiplication of two numbers: ${result}`);
}

function div(a, b) {
    
    let result = a / b;

    console.log(`The division of two numbers: ${result}`);
}

add(21, 31);

sub(31, 21);

mult(31, 21);

div(32, 2);

*/

//Example 10

//return statement in a function

// The return statement can be used to return the value to a function call.

//If nothing is returned, the function returns an undefined value.

/*
function add(a, b)
{
    return a + b;
}

function sub(a, b)
{
    return a - b;
}

function mult(a, b)
{
    return a * b;
}

function div(a, b)
{
    return a / b;
}

let addition = add(20, 21);

console.log(`The addition is:${addition}`);

let subtraction = sub(20, 21);

console.log(`The subtraction is:${subtraction}`);

let multiplication = mult(20, 21);

console.log(`The multiplication is:${multiplication}`);

let division = div(20, 2);

console.log(`The division is ${division}`);

*/

//Example 11

/*
function add(a, b)
{
    let result = `Addition is: ${a + b}`;
    return result;
}

function sub(a, b)
{
     let result = `Subtraction is: ${a - b}`;
    return result;
}

function mult(a, b)
{
     let result = `Multiplication is: ${a * b}`;
    return result;
}

function div(a, b)
{
     let result = `Division is: ${a / b}`;
    return result;
}

let addition = add(20, 21);

console.log(addition);

let subtraction = sub(20, 21);

console.log(subtraction);

let multiplication = mult(20, 21);

console.log(multiplication);

let division = div(20, 2);

console.log(division);

*/


//Functional expression
//Functions can also be defined as expressions.
/*
//Example 12
let addition=function add(a, b)
{
    return a + b;
}
//In this program, variable addition is used to store the function.
//Here the function is treated as an expression.Here the function is called using the variable name.

let result = addition(21, 31);
console.log(result);
console.log(addition(3, 4));

let subtraction=function add(a, b)
{
    return a - b;
}

console.log(subtraction(30, 5));

let multiplication=function add(a, b)
{
    return a * b;
}

console.log(multiplication(30, 5));

let division=function add(a, b)
{
    return a / b;
}
console.log(division(30, 5));
*/

//Example 13

/*
let square_of_a_number=function(number) {
    
    return number * number;
}

console.log(square_of_a_number(6));

let result = square_of_a_number(5);

console.log(`The square of a number 5 is: ${result}`);
*/

//Example 14
/*
let checkScore=function checkScore(currentScore, passingScore) {
    
    if (currentScore >= passingScore)
    {
        return "Passed";
    }
    else {
        return "Failed";
    }
}

let firstScore = checkScore(90, 55);

console.log(`The first result is ${firstScore}`);

let secondScore = checkScore(55, 45);

console.log(`The second result is ${secondScore}`);

let thirdScore = checkScore(45, 55);

console.log(`The third result is ${thirdScore}`);
*/

//Example 15

/*
let moviePerformance=function movie_Performance(movieName, boxOffice) {
    
    return `The ${movieName} has grossed ${boxOffice} billion`;
}

let first_movie_Performance = moviePerformance("Jurassic Park", 1.8);

console.log(first_movie_Performance);

let second_movie_Performance = moviePerformance("Venom", 1.1);

console.log(second_movie_Performance);

let third_movie_Performance = moviePerformance("Inception", 2.8);

console.log(third_movie_Performance);
*/

//Example 16
/*Calculate Age */
/*
let Current_Person_Age = function calculateAge(birthYear) {
    
    return 2022 - birthYear;

}

let first_Person_Age = Current_Person_Age(1980);

console.log(`The first person age is: ${first_Person_Age}`);

let second_Person_Age = Current_Person_Age(1990);

console.log(`The second person age is: ${second_Person_Age}`);

let third_Person_Age = Current_Person_Age(1975);

console.log(`The third person age is: ${third_Person_Age}`);
*/


//Example 17

//Function can be passed as values

/*
function add(a, b)
{
    return a + b;
}

let subtraction=function(a, b)
{
    return a - b;
}

function mult(a, b)
{
    return a * b;
}

let division=function(a, b)
{
    return a / b;
}

//We can store functions in an array
let arithmetic_operations = [add, subtraction, mult, division];

//Loop over all the functions in an array using for of loop
for (let func of arithmetic_operations)
{
    let result = func(20, 10);
    console.log(`The arithmetic operation:${result}`);
}
*/

//Example 18
//Function accepts another function as an argument
/*
function call_function(func) {
    
    func();
    func();
    func();
}

function shout() {
    console.log("Shouting...");
}

function cry()
{
    console.log("Crying...");
}
call_function(shout);
call_function(cry);

*/

//Exmaple 19

/*
function callTimes(fnc, numbers) {

    for (i = 1; i <= numbers; i++){
        fnc();
    }
    
}
function smile() {
    console.log("😀Smiling😉");
}

function happy() {
    console.log("😁Happy😁");
}

callTimes(smile, 3);

callTimes(happy, 6);
*/

//Example 20
/*
function pickOne(fnc1, fnc2) {
    let random = Math.random();
    console.log(random);
    if (random < 0.5)
    {
        fnc1();
    }
    else
    {
        fnc2();
    }
}
function smile() {
    console.log("😀Smiling😉");
}

function happy() {
    console.log("😁Happy😁");
}
pickOne(smile, happy);
*/

//Example 21
//Returning multiple values from a function using an array.
/*
function names() {
    
    let name1 = "Rahul";

    let name2 = "Suraj";

    let name3 = "Kiran";

    return [name1, name2, name3];
}

let name_list = names();

console.log(`List of names:${name_list}`);
*/

//Example 22
/*
function names(n1, n2, n3)
{
    let name1 = n1;

    let name2 = n2;

    let name3 = n3;

    return [name1, name2, name3];
}

let name_list1 = names("Raj", "Suraj", "Rahul");

let name_list2 = names("Kiran", "Sunil", "Akash");

console.log(`List of names:${name_list1}`);

console.log(`List of names:${name_list2}`);
*/

//Example 23

/* Function returns a function */

/*
function multiplyBy(num) {

    return function (n1) {
        
        return n1 * num;
    }
}

let triple = multiplyBy(3);
console.log(triple);
console.log(triple(4));
console.log(triple(5));
console.log(triple(7));


let halve = multiplyBy(0.5);
console.log(halve(5));
console.log(halve(6));
console.log(halve(50));

*/

//Example 24

/*
function makeBetweenFunc(x, y)
{
    return function (num) {
        
        return num >= x && num <= y;
    }
}

let range1 = makeBetweenFunc(0, 15);
console.log(range1);
console.log(range1(12));
console.log(range1(-12));
console.log(range1(17));
console.log(range1(2));

let isNineties = makeBetweenFunc(1990, 1999);
console.log(isNineties(1989));
console.log(isNineties(1995));

*/

//Example 25

//Anonymous Function

//An anonymous function is a function without a name.

//This function has no name between the function keyword and paranthesis ().

/*
let func = function () {
    
    console.log("Anonymous Function");
}


func();
func();
func();
*/

//Example 26

//Call the anonymous function after sometime..., so to do that we can use setTimeout() function.

//Built in function called setTimeout() function, this function will output the anonymous function after 5 second.

/*
setTimeout(
    function () {
        console.log("Calling Anonymous Function");
    },5000
);
*/

//Example 27
/*
function display() {
    
    console.log("Normal Function");
}


setTimeout(display, 3000);
*/

//Example 28

//IIFE(Immediately Invoked Function Expression)

//If we want to create a function that will execute immediately after the declaration.

//In this example we are using anonymous function.

/*
(
    function () {
        
        console.log("Immediately Invoked Function Expression");
    }

)();
*/

//Example 29

(
    function add(x, y) {
        let result = x + y;
        console.log(`The addition of ${x} and ${y}: ${result}`);
    }

)(21, 31);

