//do while loop

/*

do{
    //body of do while loop
    //increment or decrement

}while(condition);


*/
/*
let i = 1;

do {
    console.log(i);
    i++;
} while (i < 5);
*/

//Example 2

let sum = 0;

let number = 0;

number = parseInt(prompt("Please enter a number: "));

do {
    sum += number;
    number--;
} while (number >= 0);

console.log(`The sum is: ${sum}`);