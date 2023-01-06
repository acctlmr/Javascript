const result = document.querySelector('#result');

const bodyDiv = document.createElement('div');//<div></div>

const text = document.createTextNode('Simple body div'); //Simple body div

bodyDiv.appendChild(text);//<div>Simple body div</div>

document.body.appendChild(bodyDiv);


const heading = document.createElement('h2');//<h2></h2>

const headingText = document.createTextNode('Dynamic heading');//Dynamic heading

heading.appendChild(headingText);//<h2>Dynamic heading</h2>


result.appendChild(heading);

console.log(result.children);