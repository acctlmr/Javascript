class User
{
    //Javascript class is similar to the Javascript constructor function.
    //The constructor() method inside a class gets called automatically each time an object is created.
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login()
    {
        console.log(`${this.username} just logged in.`);
        return this;
    }
    logOut()
    {
        console.log(`${this.username} just logged out.`);
        return this;
    }
    inScore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

const userOne = new User('Suraj', 'suraj@gmail.com');

const userTwo = new User("Kiran", "kiran@yahoo.com");

console.log(userOne, userTwo);

//new keyword => creates empty object,it binds the value of this to the new empty object
//it calls the constructor function to build the object.

//let suraj_login = userOne.login();

userOne.logOut();

userTwo.login();

userTwo.logOut();
//console.log(suraj_login);

userOne.inScore();
userOne.inScore();
userOne.inScore();

//console.log(suraj_login);

userTwo.inScore();
userTwo.inScore();
userTwo.inScore();

userOne.login()
    .inScore()
    .inScore()
    .inScore();
