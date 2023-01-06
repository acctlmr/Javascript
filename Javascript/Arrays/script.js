//Arrays

//Arrays in Javascript is an object that represents a collection of similar types or different types of elements.

//Syntax

/*
<type> var_name = [value1,value2,value3...valueN];
*/

//Example 1
/*
let fruits = ["Apple", "Pineapple", "Orange", "Mango", "Grapes"];

console.log(fruits);

console.log(fruits[2]);

console.log(fruits[3]);

console.log(fruits[4]);
*/

//Example 2
/*
let vegetables = [];

//console.log(vegetables);

vegetables[0] = "Potato";

vegetables[1] = "Onion";

vegetables[2] = "Tomato";

vegetables[3] = "Peas";

vegetables[4] = "Cabbage";

console.log(vegetables);

console.log(typeof vegetables);

vegetables[2] = "Cauliflower";

console.log(vegetables);
*/

//Example 3

/*
let mixed = ["Apple", 45, "Onion", undefined, null, 44.55, true,"Tomato"];

console.log(mixed);

console.log(mixed[1]);

let value = mixed[1];

console.log(`Value is ${value}\nType:${typeof value}`);

let food_items = mixed[0] + " " + mixed[2] + " " + mixed[7];

console.log(`Food items:${food_items}\nType:${typeof food_items}`);
*/

//Methods

//toString() method

// This method converts an array to a string of common separated values.

/*
let fruits = ["Apple", "Pineapple", "Orange", "Mango", "Grapes"];

console.log(`Arrays:${fruits}\nType:${typeof fruits}`);

console.log("Converting from Array to String using toString() method...");

let new_items = fruits.toString();

console.log(`Strings:${new_items}\nType:${typeof new_items}`);
*/

//join method

//This method joins all array elements into a string.
//So basically it behaves like toString() method, but along with that we need to specify the separator.

/*
let fruits = ["Apple", "Pineapple", "Orange", "Mango", "Grapes"];

console.log(`Arrays:${fruits}\nType:${typeof fruits}`);

console.log("Converting from Array to String using join() method...");

let new_items = fruits.join("-");

console.log(`Strings:${new_items}\nType:${typeof new_items}`);
*/

//pop method

//This method removes the last element from an array.

/*
let fruits = ["Apple", "Pineapple", "Orange", "Mango", "Grapes"];

fruits.pop();

console.log(fruits);

let removed_item = fruits.pop();

console.log(removed_item);

console.log(fruits);
*/

//pop method (Example 2)
/*
let fruits = ["Apple", "Pineapple", "Orange", "Mango", "Grapes"];

let arr_length = fruits.length;

console.log(`The length of fruits:${arr_length}`);

for (let i = 0; i < arr_length; i++)
{
    console.log(`Extracted element: ${fruits.pop()}\n`);
}
*/

//push method
//The push() method adds one or more elements to the end of the given array.
//This method changes the length of the original array.
/*
let fruits = ["Apple", "Pineapple", "Orange", "Mango", "Grapes"];

let arr_length = fruits.length;

console.log(`Original array:${fruits}\n\nLength of Original array: ${arr_length}`);

fruits.push("Peach");

fruits.push("Blueberries");

fruits.push("Lemon");

console.log(`Modified array:${fruits}...\nLength of modified array:${fruits.length}`);

//for loop
for (let i = 0; i < fruits.length; i++)
{
    console.log(`Elements present inside the array fruits:${fruits}`);
}
*/

//concat method

//This method combines two or more arrays and returns a new string;

//Example 1

/*
let fruits1 = ["Apple", "Banana", "Pineapple"];

let fruits2 = ["Orange", "Lemon", "Peach"];

let fruits = fruits1.concat(fruits2);

console.log(`Fruits:${fruits}`);

console.log(`Fruits:${fruits2.concat(fruits1)}`);

*/


//Example 2
/*
let fruits1 = ["Apple", "Banana", "Pineapple"];

let fruits2 = ["Orange", "Lemon", "Peach"];

let fruits3 = ["Blackberries", "Mango", "Blueberries"];

let fruits = fruits1.concat(fruits2, fruits3);

console.log(fruits);
*/

//Example 3

/*
let fruits1 = ["Apple", "Banana", "Pineapple"];

let fruits = fruits1.concat("Orange", "Blueberries", "Grapes", "Blackberries");

console.log(`Fruits:${fruits}`);

*/

//Example 4
//splice method

//The splice() method returns an array by adding or removing its elements in place.

//Syntax:

// arr.splice(start,deleteitem,item1...itemN)

/*
let numbers = [2, 3, 4, 7, 8, 12, 14];

let removedItem = numbers.splice(4, 1, 25);

console.log(`Item removed:${removedItem}`);

console.log(`New items added:${numbers}`);

*/

//SLice 2nd example

/*
let fruits = ["Apple", "Orange", "Banana", "Pineapple"];

let removedItem = fruits.splice(2, 2, "Blueberries", "Grapes");

console.log(`Removed Item:${removedItem}`);

console.log(`New Items Added:${fruits}`);

//Adding elements without deleting existing elements

removedItem = fruits.splice(1, 0, "Cherry", "Mango");

console.log(`Removed Item:${removedItem}`);

console.log(`New Items Added:${fruits}`);

//removed 3 items without adding any Items

removedItem = fruits.splice(2, 3);

console.log(`Removed Item:${removedItem}`);

console.log(`Exisitng Items:${fruits}`);

*/

//Example 3

//let fruits = ["Apple", "Orange", "Banana", "Pineapple"];

//console.log(fruits.length);


//If start position is greater than length of array, then it does not delete anything, and starts adding to the end of the array.
//let removedItems = fruits.splice(5, 2, "Lemon");

//console.log(`Removed Item:${removedItems}`);

//console.log(`New Items Added:${fruits}`);


//If start<0, the index is counted from backwards and items all added in the last position after removing.
//let removedItem = fruits.splice(-1, 1, "Blueberries", "Grapes", "Lemon");

//console.log(`Removed Items:${removedItem}`);

//console.log(`New Items Added:${fruits}`);

//If deletecount is omitted, or is greater than the number of items left in the array, it deletes all elements from start to the end of array.

//let removedItems = fruits.splice(1);

//console.log(`Removed Item:${removedItems}`);

//console.log(`New Items Added:${fruits}`);


//if deleteCount is negative or 0, then no items will be removed.
//let removedItem = fruits.splice(1, -2, "Blueberries", "Grapes", "Lemon");

//console.log(`Removed Item:${removedItem}`);

//console.log(`New Items Added:${fruits}`);

//Example 4 (Slice method)
//The slice method returns a copy of a portion of an array into a new array object.

//Syntax: arr.slice(start,end)


//let numbers = [2, 3, 4, 5, 11, 13, 22];

//let newArray = numbers.slice(3, 6);

//let newArray = numbers.slice(2);

//slicing the array from start to second to last
//let newArray = numbers.slice(0, -1);

//slicing the array from third to last
//let newArray = numbers.slice(-3);

//console.log(newArray);


//Example 5 (Shift method)

//The shift() method removes the first element from an array and returns that element.

//let numbers = [2, 3, 4, 5, 11, 13, 22];

//let first = numbers.shift();

//console.log(first);

//console.log(numbers);

//Nested array

/*
let numbers = [
    
    [1, 2, 3],
    [4, 5, 6],
    [-5,-4,-3]
];

console.log(numbers);

console.log(`Index number 1:${numbers[0]}`);

console.log(`Index number 2:${numbers[1]}`);

console.log(`Index number 3:${numbers[2]}`);

console.log(`Extract second index:${numbers[0][1]}`);

console.log(`Extract third index:${numbers[1][2]}`);

console.log(`Extract first index:${numbers[2][0]}`);


console.log(numbers.shift());

console.log(`Numbers:${numbers}`);

*/

//Unshift method

//The unshift method adds one or more elements to the beginning of the array and returns the new length of the array.

/*
let numbers = [2, 3, 4, 5, 11, 13, 22];

let result = numbers.unshift("CSS");

console.log(numbers);

console.log(`The length of the array:${result}`);

console.log(`The length of the array:${numbers.length}`);

result = numbers.unshift(12, 65, "C++");

console.log(numbers);

console.log(`The length of the array:${result}`);

*/


//Array.of method

//Array.of method creates a new array instance from the given arguments.

/*
let numbers = Array.of(5); //let numbers=[5];

console.log(numbers);


console.log(`The length of the array:${numbers.length}`);

numbers = Array.of(3, 44, 55, 77, 99);

console.log(numbers);

console.log(`The length of the array:${numbers.length}`);

*/

//isArray method

//isArray method checks if the given argument is an array or not.

let value1 = "Array";

console.log(Array.isArray(value1));

let array2 = [10, 12, 55, 66, 77];

console.log(Array.isArray(array2));

let array3 = Array.of(88, 40, 55, 66, 90);

console.log(Array.isArray(array3));



