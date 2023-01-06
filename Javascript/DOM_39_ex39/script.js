//JSON.stringify() - this is used to convert from object or array into a string.
//JSON - Javascript Object Notation

//JSON.parse() - this is used to convert string into an object or array.

const friends = ['Sam', 'Peter', 'Bob'];

localStorage.setItem('friends', JSON.stringify(friends));


const values = JSON.parse(localStorage.getItem('friends'));

console.log(values[2]);

let fruits;

if (localStorage.getItem('fruits')) {
    fruits=JSON.parse(localStorage.getItem('fruits'));
} else {
    fruits = [];
}

console.log(fruits);

fruits.push('Apple');

fruits.push('Orange');

fruits.push('Lemon');

localStorage.setItem('fruits', JSON.stringify(fruits));