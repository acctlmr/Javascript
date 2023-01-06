function Workshop(teacher) {
    
    this.teacher = teacher;
}

Workshop.prototype.ask = function (desc) {
    console.log(this.teacher, desc);
}


let jsClass = new Workshop("Kiran");

console.log(jsClass.constructor);

console.log(jsClass.constructor === Workshop);

console.log(Workshop);

console.log(Workshop.prototype);

console.log(jsClass.__proto__);

console.log(jsClass.__proto__ === Workshop.prototype);

console.log(Object);

console.log(Object.getPrototypeOf(jsClass));

console.log(Object.getPrototypeOf(jsClass)===Workshop.prototype);
