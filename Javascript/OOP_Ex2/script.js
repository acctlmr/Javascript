//this points to the left of the dot

const rahul = {    
    firstName: 'Rahul',
    lastName: 'Sharma',
    fullName: function () {
        console.log(this);
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
};

const seema = {    
    firstName: 'Seema',
    lastName: 'Shetty',
    fullName: function () {
        console.log(this);
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
};

rahul.fullName();
seema.fullName();
