//Destructuring

/* 
ES6 provides a new feature called destructuring assignment that allows us to destructure properties of an object or elements of an array into individual variables.
*/
//Example 1
/*
function getData() {
    
    let arr = [12, 14, 16];

    return arr;
}
let data = getData();

console.log(data);

let a = data[0];

let b = data[1];

let c = data[2];

console.log(a, b, c);
let [x, y, z] = data;
console.log(x, y, z);

let [p, q, r, s] = data;
console.log(p, q, r, s);
*/


//Example 2

/*
let a, b;

[a, b,c] = [20, 30];

console.log(a, b, c);
*/

//Example 3

/*
function getItems()
{
    return [11, 12, 13, 1, 5];

}

let [x, y, z,p,q,r] = getItems();

console.log(x, y, z, p, q, r);


function getItems1()
{
    return [11, 12];

}

let items = getItems1();

let thirdItem = items[2] != undefined ? items[2] : 0;

console.log(thirdItem);

*/

//Example 4
/*
function getItems() {
    
    return null;
}


let [x = 1, y = 2] = getItems() || [];

console.log(x, y);
*/

//Example 5
/*
function getProfile() {

    return [

        'Sam',
        'Shetty',
        ['Java', 'C++', 'Javascript']
    ];

}


let [firstName, lastName, [prog1, prog2, prog3]] = getProfile();

console.log(prog1, prog2, prog3);
*/


//Example 6

//Swap two numbers
/*
let x = 12,

    y = 23;

[x, y] = [y, x];

console.log(x, y);
*/


//Example 7

/*
function display(a, b)
{

    return [

        a + b,
        (a + b) / 2,
        a * b,
        a-b
    ]
}

let [sum, average, multiplication, subtraction] = display(20, 5);

console.log(sum, average, multiplication, subtraction);
*/


//Example 8
/*
const rahul = {
    
    firstName: 'Rahul',
    lastName: 'Kumar',
    city: 'Hyderabad',
    siblings: {
        sister: 'Reena',
    },
};


const {

    firstName: first,
    lastName,
    city,
    siblings: { sister: favoriteSibling },
} = rahul;

console.log(first,lastName,city,favoriteSibling);
*/



