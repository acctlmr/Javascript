/*

Prototype Inheritance Model

Javascript uses prototypal inheritance model.

That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class.

So any properties and methods or prototype can be accessed by every instance.

Prototype property returns a object.

*/

function Account1(name, initialBalance) {
    
    this.name = name;
    this.balance = initialBalance;
    //this.bank = 'DBS';
    
}

function Account2(name, initialBalance) {
    
    this.name = name;
    this.balance = initialBalance;
    
    
}
/***Account 2 */
const kiran = new Account2('Kiran', 600);

console.log(kiran.name);
console.log(kiran.balance);

console.log(kiran);

/***Account 1 */

const rajesh = new Account1('Rajesh', 500);

const rakesh = new Account1('Rakesh', 200);
const seema = new Account1('Seema', 300);




Account1.prototype.bank = 'DBS';

Account1.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(`Hi ${this.name},your balance is ${this.balance}`);
}

console.log(rajesh);

console.log(rajesh.bank);

rajesh.deposit(1200);

console.log(rakesh); 

console.log(rakesh.bank);

rakesh.deposit(800);

console.log(seema.bank)

seema.deposit(1300);

//kiran.deposit(1200); (Not possible to access deposit method, bec this deposit method is inside a prototype property of Account1, but here kiran object is from Account2, hence Account2 prototype property dont have deposit method.)






