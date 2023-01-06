/*

Class is a blueprint for creating objects.

A class encapsulates data and functions that manipulate data.

Unlike other programming languages such as Java, C#, Dart, Javascript classes are syntactic sugar over the prototypal inheritance.

Classes introduced in the ES6 version of Javascript language.

We can think class as a sketch(prototype) of a  house.
It contains all the details about the doors, floors,windows etc, so based on these descriptions we can build the house, so house is the object.

So many houses can be made from the same description, so we can create many objects from a class.
*/

class Account
{
    constructor(name, initialBalance) {
        this.name = name;
        this.balance = initialBalance;        
    }

    bank = 'DBS';
    deposit(amount) {
        this.balance += amount;
        console.log(`Hello ${this.name},your balance is ${this.balance}`);
    }
}

const rakesh = new Account('Rakesh', 300);
console.log(rakesh);
console.log(rakesh.name);
rakesh.deposit(1200);
console.log(rakesh.bank);

const seema = new Account('Seema', 1300);
console.log(seema);
console.log(seema.name);

seema.deposit(1000);

console.log(seema.bank);
