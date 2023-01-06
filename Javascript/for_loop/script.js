// Example 1
/*
let i = 0;

for (i = 0; i <4; i++){
    console.log(i);
}
*/

/* 

-> [1=0] -> Initially i is 0 that means that it executes once upon entering the loop.

-> [i<4] -> It checked before every loop iteration, if false the loop stops.

-> [console.log(i)] -> Body of the loop runs again and again until the condition is true.

-> (i++) -> It executes or increments after the body on each iteration.

Syntax:

for(initialization;test-condition;iteration)
{
    //Body of for loop
}
*/

//Example 2

//Skipping parts inside for loop
/*
let i = 0;

for (; i < 5; i++)
{
    console.log(i);
}
*/

//We can omit the beginning or start mode inside the for loop, if we don't need to do anything at the loop start.

//Example 3

/*
let i = 0;
for (; i < 6;)
{
    console.log(i);
    i++;
}
*/

// We can also remove the starting point or ending point inside the for loop as shown in the above example.

//We can actually remove everything, if we do that we will create infinite loop.
/*
for (; ;)
{

}
*/

//Here we can see that inside the for loop we must specify ; otherwise we will get syntax error.

/*
for (let number = 11; number >= 0; number--){
    
    console.log(`Number is :${number}`);
}
*/

for (let i = 1; i <= 10; i++){
    if (i % 2 == 0) {
        console.log(`Even number:${i}`);
    }
    else {
        console.log(`Odd number:${i}`);
    }
    
}
