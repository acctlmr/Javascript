
/*
const headings = document.querySelectorAll('h1');

const result = document.getElementById('result');

//console.log(headings);

const text = [...headings];

//console.log(text);

const result2 = text.map(item => `<span>${item.textContent}</span><br/>`).join('');

result.innerHTML=result2;
*/

const person = { name: 'Rajat', job: 'Developer' };

const newPerson = { ...person, location: 'Hyderabad', name: 'Suresh' };

console.log(person);

console.log(newPerson);