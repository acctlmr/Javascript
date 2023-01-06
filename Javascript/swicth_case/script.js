// Switch Case

/*
Syntax:

switch(expression)
{
    case x: //code block
            break;
    
    case y: //code block;
            break;

    case z: //code block;
            break;

    default: //code block;
}

The switch expression is evaluated once,then the value of the expression is compared with the value of each case.If there is a match, then the associtaed block of code is executed.
Otherwise if no match then the deafult code is executed.

break -> When Javascript reaches break keyword, it breaks completely out of switch block, which means this will stop the execution inside the switch block.

The default keyword specifies the code to run if there is no case switch.

*/

/*
let score = 19;

switch (score) {
        
        case 10: console.log("This is case 10");
                break;
        
        case 9: console.log("This is case 9");
                break;
        case 8: console.log("This is case 8");
                break;
        default: console.log("This is default case,No match");
}
*/

/*
let dice = 6;

switch (dice) {

        case 1: console.log("You got one");
                break;
        case 2: console.log("You got 2");
                break;
        case 3: console.log("You got 3");
                break;
        case 4: console.log("You got 4");
                break;
        case 5: console.log("You got 5");
                break;
        case 6: console.log("You got 6");
                break;
        default: console.log("You did not roll the dice");
}
*/

/*
let day = prompt("Please type any day from Monday to Sunday: ");

switch (day)
{
        case "Monday": console.log("Monday Food Preparation");
                console.log("Gobi Manchurian");
                console.log("Dal recipe");
                break;
        
        case "Tuesday": console.log("Tuesday Food preparation");
                console.log("Aloo Gobi");
                break;
        
        case "Wednesday": console.log("Wednesday Food preparation");
                console.log("Paneer recipe");
                console.log("Aloo Paratha");
                break;
        
        case "Thursday": console.log("Thursday Food preparation");
                console.log("Kadai paneer recipe");
                console.log("Rice");
                break;
        
        case "Friday": console.log("Friday Food preparation");
                console.log("Veg Biryani Recipe");
                console.log("Pizza");
                break;
        
        
        case "Saturday": console.log("Saturday Food preparation");
                console.log("Noodles");
                console.log("Tofu recipe");
                console.log("Paneer fried rice");
                break;
        
        case "Sunday": console.log("Sunday Food preparation");
                console.log("Chole Bhature recipe");
                console.log("Sambar recipe");
                break;
        
        default: console.log("Not a valid day, Please type the day correctly...");
}
*/