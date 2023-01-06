function User(username, email)
{
    this.username = username;
    this.email = email;
}

User.prototype.login = function () {
    console.log(`${this.username} has logged in`);
    return this;
}

User.prototype.logOut = function () {
    console.log(`${this.username} has logged out`);
    return this;
}

function Admin(username, email)
{
   User.call(this,username,email);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user) {
    
}

const u1 = new User('Rajesh', 'rajesh@gmail.com');

const u2 = new User('Raj', 'raj@gmail.com');

const u3 = new Admin('Suraj', 'suraj@gmail.com');

console.log(u1);
console.log(u2);

u1.login();
u1.logOut();

u1.login().logOut();

u2.login().logOut();

console.log(u3);

u3.login();