//Object

/*

Object is an unordered collection of key-value pairs where each key-value pair is called a property.

The key can be a string and the value can be any valid Javascript value like string,number,an array or even a function.

When we declare a function as a property of an object, we can call method instead of function.


*/

//Example 1

/*
let object1 = {

};

console.log(object1);

console.log(typeof object1);
*/

//Example 2

// person object with two properties firstName and lastName with the corresponding values Rajesh and Singh.

/*
let person = {

    firstName: "Rajesh",
    lastName: "Singh"
};

console.log(person);
*/

//Example 3

//How to access properties?
//object.propertyName
//We can access property of an object using dot notation [objectName.propertyName]
/*
let person = {

    firstName: "Rajesh",
    lastName: "Singh"
};

console.log(`Firstname is ${person.firstName}`);
console.log(`Lastname is ${person.lastName}`);
*/

//Example 4

// Array notation for accessing properties

// objectName["propertyName"]
/*
let person = {

    firstName: "Rajesh",
    lastName: "Singh"
};

console.log(`Firstname is ${person["firstName"]}`);
console.log(`Lastname is ${person['lastName']}`)
*/

//Example 5

/*
let person = {

    name: "Sam",
    age: "35",
    "Full Address": "Mumbai,Andheri West",
    job: "Designer",
    dob: 1985,
    1986: "Year"
};

console.log(person);

console.log(`Person name is ${person.name}`);

console.log(`Person age is ${person.age}`);

console.log(`Person full address is ${person["Full Address"]}`);

console.log(`DOB of a person is ${person["dob"]}`);

console.log(`Year:${person[1986]}`);
*/

//Example 6

/* Modifying the value of a property */
/*
let person = {

    firstName: "Rajesh",
    lastName: "Singh"
};

console.log(person.firstName);

//We can chnage the value of a property by using aa (assignment operator)

person.firstName = "Suresh";

console.log(person);

console.log(person.firstName);
*/

//Example 7
/*
let movieRatings = {
    "Mission Impossible": 9.1,
    "Inception": 8.8,
    "Dark Knight": 8.9,
    "Superman": 7.7
};

//console.log(movieRatings);
console.log(movieRatings["Inception"]);

console.log(movieRatings["Dark Knight"]);

movieRatings["Dark Knight"] = 5.5;

movieRatings["Inception"] = 7.8;

//console.log(movieRatings);
//Add new propertyName

movieRatings["Venom3"] = 9.5;
console.log(movieRatings);

*/

//Example 8
/*
let palette = {

    red: "#eb4d4b",
    yellow: "#f9ca24",
    blue: "#30336b"
};

console.log(palette.red, palette.yellow, palette.blue);

palette.yellow = "#dfgr55";
console.log(palette.red, palette.yellow, palette.blue);

//Updating one more property

palette["blue"] = "#6ghtgh";
console.log(palette.red, palette.yellow, palette.blue);

//New property not added inside the object

let mysteryColor = "#45tyhg";
console.log(palette[mysteryColor]);
*/

//Example 9
/*
let userReviews = {};

userReviews["Mission Impossible"] = 8.8;

userReviews.Inception = 9.2;

userReviews["Dark Knight"] = 9.8;

console.log(userReviews);
*/

//Example 10
/*
let person = {

    firstName: "Rajat",
    lastName: "Sharma",
    age: 2022 - 1990,
    job: "Designer",
    friends: ["Sam", "Ravi", "Kiran"]
};

console.log(person);

console.log(`First Name: ${person.firstName}\nLast Name: ${person.lastName}\nAge: ${person.age}\nJob: ${person.job}\nFriend 1: ${person.friends[0]} Friend 2: ${person.friends[1]} Friend 3: ${person.friends[2]}`);

let nameKey = 'Name';

console.log(person['last' + nameKey]);
console.log(person['first' + nameKey]);

//let interestedIn = prompt('What do you want to know about this person? Choose between ////firstName, lastName, age, job and friends');

//if (person[interestedIn])
//{
//    console.log(person[interestedIn]);
///}
//else {
//    console.log("Wrong request!!! Choose between firstname, lastname, age, job and friends");
//}

person.location = "San Francisco";

person["twitter"] = "@rajatshm";

console.log(person);
*/

//Example 11

//Methods

/*
let person = {

    firstName: "Rohit",
    lastName: "Kumar",
    age: 25
};

//We have used in this example a function expression to create a function and assigned it to the welcome property of the person object.
//Then we call the function via the welcome property as welcome()
person.welcome = function () {
    console.log("Welcome Rohit!!!");
}
console.log(person);
person.welcome();
*/

//Example 12
/*
let person = {
    firstName: "Rohit",
    lastName: "Kumar",
    age: 25
};
function welcome() {
    console.log("Welcome Rohit!!!");
}
function call_Person() {
    console.log("Person called...");
}
person.welcome = welcome;
//console.log(person);
person.welcome();
person.callPerson = call_Person;
console.log(person);
person.callPerson();
console.log(person.welcome());


//Example 13

//It is possible to define methods of an object using the object literal syntax which is as shown in this example.

// ES6 (EcmaScript 6) provides us with the method syntax that allows us to make it shorter to define a method for an object.
/*
let person = {
    firstName: "Rohit",
    lastName: "Kumar",
    age: 25,
    welcome: function () {
        console.log("Welcome Rohit");
    },
    callPerson: function () {
        console.log("Person Called!!!");
    }
};

person.welcome();
person.callPerson();
*/

//Example 14
/*
let person = {
    firstName: "Rohit",
    lastName: "Kumar",
    job: "Designer",
    friends: ["Suraj", "Seema", "Teena"],
    calcAge1: function (birthYear) {
        return 2022 - birthYear;
    },
    calcAge2: function (birthYear) {
        let age = 2022 - birthYear;
        return age;
    }
};

let age1 = person.calcAge1(1987);

let age2 = person.calcAge2(1975);

console.log(`First age:${age1}`);

console.log(`Second age:${age2}`);
*/

//Example 15

/*
let name1 = "Javascript";

function fnc() {
    console.log(name1);
}

fnc();

window.fnc();
*/

//Example 16
//this keyword

/*
this references the object of which the function is a property, we can say in other words this references the object that is currently calling the function.

The next() function is the property of the counter object,so inside the next() function, this references the counter object.
*/

/*
let counter = {
    count: 0,
    next: function () {
        return this.count = this.count + 1
    }
};

let result = counter.next();

result = counter.next();
result=counter.next();
console.log(result);
*/

//Example 17

//this references in this example to the global object which is the window object on the web browser

//console.log(this);

//console.log(this === window);

//If we assign a property to this object in the global context, Javascript will add the property to the global object as shown in the below example.

//this.counter = 0;

//window.counter = window.counter + 1;

//console.log(++window.counter);

//Example 18

/*
let mobile = {
  
    brand: "Samsung",
    
    getbrand: function () {
        
        return this.brand;
    }

};

//console.log(mobile.brand);

//console.log(`this keyword references to the mobile here ${mobile.getbrand()}`);

let brand = mobile.getbrand();

console.log(brand);

//In the below code, we are getting undefined instead of Samsung because when we call a method without specifying its object, Javascript sets this to the global object(window object).

let brand2 = mobile.getbrand;

console.log(brand2);

console.log(brand2());

//So to fix this issue we can use bind() method,which creates a new function whose this keyword is set to a specified value.
//Now when we call brand3() , this keyword is bound to the mobile object.

let brand3 = mobile.getbrand.bind(mobile);

console.log(brand3());

*/

//Example 19
/*
let person = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1991,
    job: "Designer",
    friends: ["Rajat", "Rakesh", "Kiran"],
    hasDriverLicense: true,
    calcAge1: function () {
        return 2022 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge1()} years old.\nHe has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
    }

};

console.log(person.getSummary());

console.log(person.calcAge1());
*/

//Example 20
/*
let person = {
  
    firstName: "Raj",
    lastName: "Kumar",
    greet: function () {
        return `Hello ${this.firstName}`;
    },
    getFullName: function () {
        
        return `${this.firstName} ${this.lastName}`;
    }

};

console.log(`${person.greet()} Your Full name is ${person.getFullName()}`);
*/

//Example 21
/*
let person = {  
    firstName: "Raj",
    lastName: "Kumar",
};

//The in operator returns true if the propertyName exists in the objectName.

//In this example we have created person object which uses the in operator to check if the firstName and age properties exist in the object.

//Syntax: propertyName in objectName

console.log('firstName' in person);

console.log('age' in person);
*/

//Example 22
//delete a propety of an object
/*
let person = {  
    firstName: "Raj",
    lastName: "Kumar",
};

//We can delete a propety of an object using the delete operator.

//Syntax: delete objectName.propertyName

delete person.lastName;

//We have deleted the lastName propety from the person object.

//After the delete operation if we attempt to access the lastName property again, we will get undefined.

console.log(person);

console.log(person.lastName);
*/

//Example 23

//BMI Calculator
/*
let Raj = {    
    fullName: "Raj Kumar",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

let Kiran = {
    fullName: "Kiran Shetty",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

Raj.calcBMI();
Kiran.calcBMI();

if (Raj.bmi > Kiran.bmi) 
{
    console.log(`${Raj.fullName}'s BMI (${Math.floor(Raj.bmi)}) is higher than ${Kiran.fullName}'s BMI (${Math.floor(Kiran.bmi)})`);
}
else if (Kiran.bmi > Raj.bmi) {
    console.log(`${Kiran.fullName}'s BMI (${Math.floor(Kiran.bmi)}) is higher than ${Raj.fullName}'s BMI (${Math.floor(Raj.bmi)})`);

}
*/
