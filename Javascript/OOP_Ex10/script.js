function Workshop(teacher) {
    
    this.teacher = teacher;
}

Workshop.prototype.ask = function (desc) {
    console.log(this.teacher, desc);
}


let js = new Workshop("Rajeev");

let js2 = new Workshop("Rakesh");

js.ask("is a great teacher");

js2.ask("is also a great teacher");

console.log(typeof js);

console.log(typeof js2);



