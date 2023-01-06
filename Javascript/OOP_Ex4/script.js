//Constructor Function

// creates new object, points to it, and omit return

function Person(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
    
    this.fullName = function () {
        
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    };
    console.log(this);
}

const rahul = new Person('Rahul', 'Shetty');

rahul.fullName();

const seema = new Person("Seema", "Gupta");

seema.fullName();