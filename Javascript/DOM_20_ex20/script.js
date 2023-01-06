

//here the element is created
let newItem1 = document.createElement("li");

//console.log(newItem);

//the element is given texts or content
newItem1.innerText = "This is new list adding dynamically"


//here we need a parent to adopt this element
const list = document.querySelector("ul");
list.appendChild(newItem1);


const firstItem = document.querySelector("ul li:first-child");

//console.log(firstItem);

let newItem2 = document.createElement("li");

//console.log(newItem2);

newItem2.innerText = "Again adding new item dynamically...";

list.insertBefore(newItem2,firstItem);

