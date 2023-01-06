//Variables in Javascript

/*

A variable name can be any valid identifier. 

Rules to be followed:

-> Variable names are case-sensitive. This means that name and Name are different variables.

-> Variable names can only contain letters,numbers,underscores, or dollar signs and cannot contain spaces.Variable names must begin with letter,an underscore(_) or dollar sign($).

-> Variable names cannot use the reserved words.

-> Variable names can use camelcase like yourName, youAge,MyName etc.

To declare a variable we can use var keyword, let keyword or const keyword.
*/

//Valid Variable Name

//var x = 25;
//console.log(x);

//var _value = 12;
//console.log(_value);

//var $x = 55;
//console.log($x);

//Incorrect variable name

//var 1a = 44;

//var n ame = "Javascript";

//Reassignment of variable

/*
var name1 = "Javascript";

console.log(name1);

name1 = "Python";

console.log(name1);

name1 = 35;

console.log(name1);

var name1 = "C++";

console.log(name1);

//In case of var we are not getting error as we redeclared again the same varibale name
*/

//let name1 = "Javascript";

//console.log(name1);

//name1 = "C++";

//console.log(name1);

//let name1 = "Python";

//console.log(name1);

//In Case of let if we redeclare the same variable name we will get error.

const Name1 = "Rajat";
//If we declare variable name using const keyword once, then we cannot able to re-assign the same variable name again.

//Name1 = "Suraj";

console.log(Name1);
