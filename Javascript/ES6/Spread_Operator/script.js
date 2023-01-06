//Spread Operator
/*

ES6 provides a new operator called spread operator that consists of three dots(...).

The spread operator allows us to spread out elements of an iterable object such as array,set etc.


*/

//Exmaple 1
/*
let str1 = 'Java';

let result1 = [...str1];

console.log(result1);
*/

//Example 2

/*
let numbers = [1, 2, 3, 4, 5];

let combined = [...numbers, 'Dart', 'C#'];

console.log(combined);

let newArray = ['Samsung', ...numbers, 'Redmi', 101, ...combined];

console.log(newArray);
*/

//Example 3
/*

let initialletters = ['A', 'B', 'C'];

let moreNumbers = [101, 401];

let chars = [...initialletters, ...moreNumbers];

console.log(chars);

let chars2 = [...chars, 'R', 'E'];

console.log(chars2);

let chars3 = ['W', ...'XYZ', 'U'];

console.log(chars3);

*/


//Example 4
/*
const boys = ['Sam', 'Suraj', 'Rajat'];

const girls = ['Teena', 'Meena', 'Seema'];

const bestFriend = 'Rahul';

const friends = [...boys, bestFriend, ...girls];
*/

//console.log(friends);
/*
const newFriends = friends;

console.log(`Friends: ${friends}`);

console.log(`New Friends: ${newFriends}`);

newFriends[1] = "Suresh";

console.log("After updating...");
console.log(`Friends: ${friends}`);

friends[2] = "Priya";
console.log(`New Friends: ${newFriends}`);

console.log("Using spread operator");

const newFriends1 = [...friends];

newFriends1[4] = "Sachin";
console.log(`Friends: ${friends}`);
console.log(`New Friends: ${newFriends1}`);

*/


//Example 5
/*
const numbers = [23, 45, 66, 88, 234];

//console.log(Math.max(numbers));

console.log(Math.max(...numbers));

const rahul = ['Rahul', 'Sinha'];

const sayHi = (firstName, lastName) => {
    console.log(`Hi ${firstName} ${lastName}`);
}

sayHi(...rahul);
*/






