//while loop
/*
while(condition)
{
    //body of while loop

    //increment or decrement
}


*/

//Example 1
/*
let amount = 10;

while (amount > 0)
{

    console.log(`I have ${amount} dollars and I am going to mall`);
    amount--;

}
*/

//Example 2

/*
let i = 11;

while (i <= 15)
{
    console.log(i);
    i++;
}
*/

//Example 3

/*
let sum = 0;

//taking input from user

let number = parseInt(prompt("Please enter a number"));

while (number >= 0)
{
    //sum = sum + number;

    sum += number;

    //take input again if the number is positive
    number=parseInt(prompt("Please enter a number"));
}

console.log(`The sum is ${sum}`);

*/

//Example 4

let sum = 0;

//taking input from user

let number = parseInt(prompt("Please enter a number"));

while (number >= 0)
{
    //sum = sum + number;

    sum += number;

    number--;
}

console.log(`The sum is ${sum}`);