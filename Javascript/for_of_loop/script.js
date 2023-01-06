//for of loop

//for of loop can be used to iterate over iterable objects (arrays,strings,maps,sets etc.)

/*

Syntax:

for(element of iterable)
{
    body of for of loop
}

Here iterable can be any iterable object like arrays,sets,strings etc, element can be items in the iterable.

*/

//Normal for loop

/*
let students = ["Ravi", "Raj", "Dev", "Kiran", "Mohit"];

for (let i = 0; i < students.length; i++){
    
    console.log(students[i]);
}
*/

//for of loop
/*
let students = ["Ravi", "Raj", "Dev", "Kiran", "Mohit"];

for (let element of students)
{
    console.log(element);
}
*/

// for of loop (Example 2)

let string1 = "Javascript";

for (let name of string1)
{
    console.log(name);
}


