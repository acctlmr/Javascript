//filter method

//The filter method returns a new array with all elements that pass the test defined by the given function.

//Example 1

/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function chk_Even(number) {

    if (number % 2 == 0)
        return true;
    else
        return false;
    
}


let evenNumbers = numbers.filter(chk_Even);

console.log(evenNumbers);
*/


//Example 2

/*
const scores = [10, 30, 15, 25, 50, 40, 5];

const highScores = scores.filter(score => score > 20);

console.log(highScores);
*/

//Example 3

/*
const users = [
  
    { name: 'Rajesh', learning_js: true },
    { name: 'Kiran', learning_js: false },
    { name: 'Suraj', learning_js: true },
    { name: 'Saheli', learning_js: true },
    {name:'Seema',learning_js: false}

];

const js_learner = users.filter(user => user.learning_js)

console.log(js_learner);
*/

/***********Map method **************** */

//The map() method returns a new array with the results of calling a function for every array element.

//Example 1

/*
let numbers = [2, 3, 5, 6, 8, 9];

function square(number)
{ 
    return number * number;
}


let new_numbers = numbers.map(square);

console.log(new_numbers);
*/

//Example 2

/*
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salesPrices = prices.map(price => price / 2);

console.log(salesPrices);
*/

//Example 3

/*
const products = [

    { name: 'Oil', price: 50 },   
    { name: 'Mushroom', price: 40 },   
    { name: 'Rice', price: 35 },    
    {name:'Biscuit',price:25}

];

const sale_Products=products.map(prod => {  
    if (prod.price > 35) {
        
        return {name:prod.name,price:prod.price/2}
    }
    else {
        return prod;
    }
});

console.log(`Old Product Details:\n ${products[0].name}-Rs.${products[0].price}\n${products[1].name}-Rs.${products[1].price}\n${products[2].name}-Rs.${products[2].price}\n${products[3].name}-Rs.${products[3].price}`);

console.log(`New Product Details:\n ${sale_Products[0].name}-Rs.${sale_Products[0].price}\n${sale_Products[1].name}-Rs.${sale_Products[1].price}\n${sale_Products[2].name}-Rs.${sale_Products[2].price}\n${sale_Products[3].name}-Rs.${sale_Products[3].price}`);
*/

/*************************Reduce() method*********************/

//reduce() method executes a reducer function on each element of the array and returns a single output value.
//reduce() executes the given function for each value from left to right.
//reduce() method does not change the original array.

//Example 1
/*
const scores = [10, 20, 60, 40, 70, 90, 30];

const result=scores.reduce((accumulator, currentvalue) => {
   
    if (currentvalue > 20)
    { 
        accumulator++;
    }
    return accumulator;

},0);

console.log(result);

*/

//Example 2

/*
const numbers = [1, 2, 3, 4, 5, 6];

function total_sum_reducer(acc, cur) {
    return acc + cur;
}

let sum = numbers.reduce(total_sum_reducer);

console.log(sum);

//Here we have used arrow function

let total = numbers.reduce((ac, cr) => ac + cr);

console.log(total);

*/

//Example 3
/*
const expenses = [2000, 3000, 4000, 500, 300];

const salary = 15000;//15000-2000-3000-4000-500-300

let remaining_amount = expenses.reduce((acc, curr) => acc - curr, salary);

console.log(`Salary :${salary}\nAmount left after expenses:${remaining_amount}`);
*/

//Example 4

/*
const scores = [
    { player: 'Sachin', score: 60 },    
    { player: 'Kohli', score: 50 },    
    { player: 'Sachin', score: 70 },    
    {player:'Rahul',score:90}
];

const player_Score=scores.reduce((acc, cur) => {
    
    if (cur.player === 'Sachin') {
        acc += cur.score;
    }
    return acc;
}, 0);

console.log(player_Score);

*/

/**********************Find Method***********************/

//The find() method returns the first element in an array that satisfies a provided function.

//Example 1
/*
let numbers = [1, 2, 3, 4, 5];

console.log(numbers.find(e => e % 2 == 0));
*/

//Example 2

/*
const scores = [10, 5, 0, 90, 60, 10, 20, 70];

const firstHighScore = scores.find(score => score > 50);

console.log(firstHighScore);

*/

//Example 3

/*
let customers = [
    
    { name: 'ABC', credit: 100 },
    
    { name: 'XYZ', credit: 200 },
    
    {name:'ZSC',credit:300}

];

let result = customers.find(cr => cr.credit > 100);

console.log(result);

*/

/***********Sort Method**************/


let numbers = [0, 1, 2, 3, 10, 20, 30];

//numbers.sort();

//console.log(numbers);

/*
numbers.sort(function (a, b) {
   
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
*/

/*
numbers.sort((a, b)=> {
   
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
*/
/*
numbers.sort((a, b) => a - b);
numbers.sort((a, b) => b - a);
console.log(numbers);
*/
// function compare (a,b) is less than 0, the sort() method sorts a to a lower index than b, in other words a will come first.

//if compare(a,b) is greater than 0, the sort method sort b to a lower index than a, that is b will come first.

//if compare(a,b) returns 0, the sort method considers a equal b and leaves their position unchanged.


//Example 2

//In this example to sort the elements of the animal array in ascending order we can use sort() method without passing the compare function.

/*
let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];

//animals.sort();

//console.log(animals);

animals.sort((a, b) => {
    if (a > b) return -1;

    if (a < b) return 1;


    return 0;
});

console.log(animals);

animals.sort((a, b) => a - b);
//animals.sort((a, b) => b - a);

console.log(animals);

animals.sort((a, b) => b - a);

console.log(animals);

*/

//Example 3
/*
let employees = [
    
    { name: 'Raj', salary: 90000, hireDate: "July 2,2020" }, 
    
    { name: 'Seema', salary: 75000, hireDate: "January 1 2019" },

    {name:'Teena',salary:80000,hireDate: "December 1 2018"}
    


];

employees.sort(function (a, b) {
    
    return a.salary - b.salary;
});

console.log(employees);
*/


//Example 4

const products = [
    
    { name: 'Rice', price: 35 },
    { name: 'Biscuit', price: 45 },
    { name: 'Mushroom', price: 60 },
    { name: 'Oil', price: 78 },
    {name:'Potato',price:20}
];

const filtered = products.filter(product => product.price > 30);

//console.log(filtered);

//const final_product=filtered.map(product => {
//    return `The ${product.name} price is ${product.price / 2}`;
//});

//console.log(final_product);


const final_product2 = products
    .filter(product => product.price > 30)
    .map(product => `The ${product.name} price is ${product.price / 2}`);

console.log(final_product2);


