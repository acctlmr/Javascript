const result = document.querySelector('#result');

const first = document.querySelector('.red');


const bodyDIv = document.createElement('div');

const text = document.createTextNode('Simple text');

bodyDIv.appendChild(text);

document.body.appendChild(bodyDIv);

document.body.insertBefore(bodyDIv, result);


const heading = document.createElement('h2');

const headingText = document.createTextNode('Dynamic heading');

heading.appendChild(headingText);

heading.classList.add('blue');

result.insertBefore(heading, first);