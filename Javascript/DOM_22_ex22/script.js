const list = document.getElementById('first');

const div = document.getElementById('second');

const item = document.querySelector('.item');

//console.log(list.innerHTML);
//console.log(div.textContent);
//console.log(list.textContent);
const newValue1 = 'New value 1';
const newValue2 = 'New value 2';
const newValue3 = 'New value 3';

const ul = document.createElement('ul');

ul.innerHTML = `
<li class="item">${newValue1}</li>
<li>${newValue2}</li>
<li>${newValue3}</li>
`;

document.body.appendChild(ul);
div.textContent = "Dynamically content added";