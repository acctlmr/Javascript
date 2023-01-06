
/*
const raj = {  
    firstName: 'Raj',
    lastName: 'Kumar',
    fullName: function () {        
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    }


};
const rahul = {  
    firstName: 'Rahul',
    lastName: 'Kumar',
    fullName: function () {        
        console.log(`My full name is ${this.firstName} ${this.lastName}`);        
    }
};

raj.fullName();
rahul.fullName();
*/


function createPerson(firstName, lastName)
{
    return {

    firstName: firstName,
    lastName: lastName,
        fullName: function ()
        {        
        console.log(`My full name is ${this.firstName} ${this.lastName}`);        
        }
    

    };
}

const raj = createPerson('Raj', 'Kumar');

raj.fullName();

const seema = createPerson('Seema', 'Gupta');

seema.fullName();