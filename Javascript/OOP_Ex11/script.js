function Workshop(teacher) {
    
    this.teacher = teacher;
}

Workshop.prototype.ask = function (desc) {
    console.log(this.teacher, desc);
}

function AnotherWorkshop(teacher) {
     Workshop.call(this,teacher)
}

AnotherWorkshop.prototype=Object.create(Workshop.prototype);

AnotherWorkshop.prototype.speakup = function (msg) {
    this.ask(msg);
   
}

const js1 = new Workshop("Rakesh");
console.log(js1);
js1.ask("teaches CSS");

const js2 = new AnotherWorkshop("Rajesh");
console.log(js2);
js2.speakup("teaches Javascript");
