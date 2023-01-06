class User
{
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

class Admin extends User{
    constructor(username, email, title) {
        super(username, email);
        this.title = title;
    }
    deleteUser(user) {
        users = users.filter(u => u.username !== user.username);
        return this;
    }
}

const userOne = new User('Suraj', 'suraj@gmail.com');

const userTwo = new User("Kiran", "kiran@yahoo.com");

const userThree = new Admin('Rakesh', 'rakesh@gmail.com','Developer');

let users = [userOne, userTwo, userThree];

//console.log(users);

userThree.deleteUser(userOne);
console.log(users);

console.log(userThree);

console.log(userOne);