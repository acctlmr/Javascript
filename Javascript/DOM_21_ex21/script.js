
const newH5 = document.createElement('h5');

const newH6 = document.createElement('h6');
newH5.innerText = "C++";
newH6.innerText = "Java";

console.log(newH5);
console.log(newH6);


const mainHeading = document.querySelector("h1");
mainHeading.append(newH5, newH6);
mainHeading.prepend(newH5, newH6);


const myitem = document.querySelector("ol li:nth-child(3)");
myitem.remove();