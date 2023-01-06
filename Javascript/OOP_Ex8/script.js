class Workshop
{
    constructor(teacher)
    {
        this.teacher=teacher;
    }

    ask(question) {
        console.log(this.teacher, question);
    }

}

let w1 = new Workshop("Suraj");

console.log(w1);

console.log(typeof Workshop);

let js = new Workshop('Teena');

console.log(js);

w1.ask("teaches CSS???");

js.ask("teaches Javascript???");
