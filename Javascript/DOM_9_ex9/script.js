
const first = document.querySelector('.first');

//console.log(first.nextSibling.nextSibling);

const second = first.nextSibling.nextSibling.style.color = "red";

console.log(second);


const last = document.querySelector('.last');
console.log(last);

const third = last.previousSibling.previousSibling;

console.log(third);

console.log(last.nextSibling.nextSibling);