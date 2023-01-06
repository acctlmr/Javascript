const link = document.querySelector('a');

console.log(link);

console.log(link.getAttribute('href'));

console.log(link.textContent);

link.textContent = "Dynamically Adding Content";

console.log(link.textContent);

const mesg = document.querySelector('p');

console.log(mesg.getAttribute('class'));

mesg.setAttribute('class', 'success');

mesg.setAttribute('style', 'background-color:coral');


