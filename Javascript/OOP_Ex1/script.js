//Nested Objects

const age = 40;
let random = 'random-value';
random = 'age';

const person = {
    name: 'Kiran',
    age: age,
    married: true,
    siblings: ['Ram', 'Kaustav'],
    greet: function (name) {
        console.log(`Hello, my name is ${name}`);
    },
    sayHello(name) {
        console.log(`Hello, my name is ${name}`);
    },
    job: {
        title: 'Developer',
        company: {
            name: 'Accenture',
            address: '123 main street',
        },
    },

    'random-value': 'random',

};

console.log(person);

console.log(person.job.title);

console.log(person.job.company.address);

console.log(person['name']);

console.log(person['random-value']);

console.log(person[random]);