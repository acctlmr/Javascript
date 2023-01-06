let message = document.querySelector(".message");

console.log(message);

//Here we are using getComputedStyle() method to get all the computed style of the paragraph element.

let style = getComputedStyle(message);

console.log(style);

console.log(style.color);

console.log(style.backgroundColor);