const form = document.getElementById('form');

const name1 = document.getElementById("name");

const password = document.getElementById("password");

form.addEventListener('submit', function (e) {
    //The preventDefault() method cancels the event if it is cancelable,meaning that the default action that belongs to the event will not occur.
    e.preventDefault();
    console.log("Form submitted");
    console.log(name1.value);
    console.log(password.value);
});