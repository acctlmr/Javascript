//indexOf() method

//The indexOf() method returns the index of the first occurence of substring in a string.

//Example 1

/*
let str1 = "Learning Javascript and CSS together";

let index = str1.indexOf('CSS');

console.log(index);
*/


//Example 2
/*
let str2 = "Javascript is a programming language and Java is another programming language, both are different programming language";

let count = 0;

let substr = 'programming';

let index = str2.indexOf(substr);

while (index !== -1)
{

    count++;

    index=str2.indexOf(substr, index + 1);

    
}
*/

/* 

Here first using the indexOf() method to find the first occurence of the substr in the str2.

Then we have used while loop to repeatedly find the next position of the substr in the str starting from the last found position+1.

*/

//console.log(count);

//Example 3

/*
let str1 = 'Javascript is using a extension js while saving the file.'

let substr = 'JS';

let index = str1.indexOf(substr);

console.log(index);

let index2 = str1.toLocaleLowerCase().indexOf(substr.toLocaleLowerCase());

console.log(index2);
*/


//includes() method

//The includes() method determines whether a string contains another string.

//includes() method
/*
let email = 'rahul@gmail.com';

console.log(email.includes('@'));


let str1 = 'JavaScript is a programming language';

console.log(str1.includes('Script'));

console.log(str1.includes('script'));
*/

//startsWith() method

//The startsWith() method returns true if a string begins with the characters of a specified string,otherwise false.

//Example 1

/*
const title = 'Rahul and Suraj both are learning Javascript';

console.log(title.startsWith('Rahul'));
console.log(title.startsWith('Suraj'));
console.log(title.startsWith('Suraj',10));
*/

//endsWith() method
//The endsWith() method returns true if a string ends with the characters of a specified string.
/*
const title = 'Rahul and Suraj both are learning Javascript';
console.log(title.endsWith('Javascript'));
*/

//Split method
//The split() method divides a string into an array of substrings.

/*
let str1 = "Javascript and Java both are different programming languages";

let substrings=str1.split(' ');

console.log(substrings);
*/

//concat() method

//The concat() method accepts a list of strings and returns a new string that contains the combined strings.

/*
let str1 = "Java";

let message = str1.concat(" ",'Javascript');

console.log(message);

let new_Str = message.concat(" ","C++"," ", 'C#');

console.log(new_Str);
*/


//substring() method

//The substring() method returns the part of the string between the start and the end indexes.

/*
let str1 = "Javascript SubString";

let substring = str1.substring(0, 10);

console.log(substring);

let sub2 = str1.substring(11);

console.log(sub2);

let email = 'rajeshwari@gmail.com';

let domain = email.substring(email.indexOf('@')+1);

console.log(domain);
*/

//trim() method

//The trim() method returns a new string stripped of whitespace from the beginning and end of the string.

/*
let str1 = "  Javascript     ";

console.log(str1);

let result = str1.trim();

console.log(result);

//trimStart() method returns a new string from the original string with the leading whitespace charcaters removed.

let result2=str1.trimStart();

console.log(result2);

//trimEnd() method returns a string from the original string with the ending whitespace stripped.

let result3=str1.trimEnd();
console.log(result3);
*/



