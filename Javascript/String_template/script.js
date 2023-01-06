/*
let name1 = "Rahul";

let age = 25;

let sentence = "My name is " + name1 + " and my age is " + age;

console.log(sentence);
*/

//Template Literal

//Template Literal use backticks(``), with this template literal we can use both double and single quotes inside a string.It also allows multiline strings.

//It provides an easy way to interpolate variables and expressions into strings, which is called string interpolation.(${})

/*
let name1 = "Rahul";

let age = 25;

let sentence = `My name is ${name1} and I am ${age} years old.`;

console.log(sentence);

*/

//firstName - Camel Case

//FirstName - Pascal Case

//first_name - Snake Case

/*
let firstName = "Sam";

let lastName = "Shetty";

let job = "Designer";

let birthYear = 1990;

let year = 2022;

let sentence = "Full name is " + firstName + " " + lastName + ". " + "Role is " + job + ". " + "Age is " + (year - birthYear) + " years old."

console.log(sentence);

let sentence2 = `Full name is ${firstName} ${lastName}.\nAge is ${year - birthYear} years old.\nRole is ${job}.`

console.log(sentence2);
*/

let sentence3 = `Addition of 35 and 55 is ${35 + 55}`;

console.log(sentence3);