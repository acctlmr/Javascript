//All objects in Javascript have access to constructor property that returns a constructor function that created it.

//Built in constructor function.

//Arrays and functions are objects in Javascript.


function Person(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
    
    this.fullName = function () {
        
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    };
   
}

const rahul = new Person("Rahul", "Gupta");

console.log(rahul);

console.log(rahul.constructor);

const rakesh = {};

console.log(rakesh);

console.log(rakesh.constructor);

const list = [];

console.log(list);

console.log(list.constructor);

const hello = function () {
    
};

console.log(hello);
console.log(hello.constructor);

const teena = new rahul.constructor('Teena', 'Sinha');
//const teena=new Person('Teena','Sinha');

teena.fullName();

console.log(teena);

console.log(teena.constructor);


const suraj = new teena.constructor('Suraj', 'Shetty');

suraj.fullName();