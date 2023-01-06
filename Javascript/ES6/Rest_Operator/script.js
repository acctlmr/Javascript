//Rest Operator
/*

ES6 provides a new kind of parameter that has a prefix of three dots (...).
A rest paramter allows us to represent an indefinite number of arguments as an array.

Rest Operator gather and collects items.
*/

//Example
/*
function sum(...args) {


    let total = 0;
    for (let x of args) {
        
        total += x;
    }
    return total;
}



let result = sum(2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
console.log(result);
*/

/*
const fruits = ['Apple', 'Orange', "Pineapple", 'Mango', 'Blueberries'];

const [fruit1, fruit2, fruit3, ...rest] = fruits;

console.log(fruit1, fruit2, fruit3, rest);
*/

//Example
/*
const person = { name: 'Rahul', 'lastName': 'Deb', job: 'Developer' };

const { job, ...rest } = person;

console.log(person);
*/


//Example

const testScores = [76, 98, 56, 44, 101, 67];
const getAverage = (name, ...scores) =>
{
    console.log(name);
    let total = 0;
    for(const score of scores)
    {
        total += score;
    }
    console.log(`${name}'s average score is ${(total) / scores.length}`);

}
const person = { name: 'Rahul', 'lastName': 'Deb', job: 'Developer' };
getAverage(person.name, ...testScores);
