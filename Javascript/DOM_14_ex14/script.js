/*
const para = document.querySelector("p");

console.log(para.parentElement);

const body1 = document.body;

console.log(body1.children);

console.log(body1.children[1]);
console.log(body1.children[3]);
console.log(body1.children[2]);

const item=document.querySelector("ul li:nth-child(1)");

console.log(item);

console.log(item.previousElementSibling);
console.log(item.nextElementSibling.nextElementSibling);
*/

/*
const image = document.querySelector("img");

console.log(image);

image.style.width = "700px";
image.style.border = "4px solid green";
*/

//const para = document.querySelector("p");

//para.style.backgroundColor = "coral";
//para.style.color = "white";
//para.style.padding = "20px";
//para.style.lineHeight = "1.8";
//para.style.fontSize = "20px";

//para.classList.add("newstyle");

//getComputedStyle

//The getComputedStyle() method returns an object that contains the computed style of an element.

const image = document.querySelector("img");

const imageProps = getComputedStyle(image);

console.log(imageProps);

image.style.width = "700px";

image.style.height = "600px";

console.log(imageProps.height, imageProps.width);

