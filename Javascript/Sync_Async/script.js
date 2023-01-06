//Synchronous

/*
function hello() {
    console.log("Hello JS");
}

console.log("Hello Java");

hello();

console.log("Hello Dart");

*/

//Asynchronous JS
function hello() {
    console.log("Hello JS");
}

console.log("Hello Java");

setTimeout(hello, 12000);

console.log("Hello Dart");

console.log("Hello HTML");
