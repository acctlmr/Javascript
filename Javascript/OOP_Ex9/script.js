//Workshop class is a parent class
class Workshop
{
    constructor(teacher) {
        this.teacher = teacher;
        console.log('This is Workshop class')
    }
    ask(question) {
        console.log(this.teacher, question);
    }
}

//Here AnotherWorkshop is a child class or derived class which is inheriting WorkShop class(parent class)
class AnotherWorkShop extends Workshop {

    constructor(teacher)
    {
        super(teacher);//This is calling parent class which is Workshop class using super keyword
        this.teacher = teacher;
        console.log("This is AnotherWorkshop");
    }

    speakup(msg) {
        console.log(msg);
    }
    
}


let python = new AnotherWorkShop("Suraj");

console.log(python);

let css = new Workshop("Seema");

console.log(css);

//css.speakup("Message");

python.ask("teaches HTML");

python.speakup("teaches CSS and HTML both");