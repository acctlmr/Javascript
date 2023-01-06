const form = document.querySelector(".signup-form");

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form.username.value);
});

//Regular expression

//Regular expression is an object that describes a sequence of characters used for defining a search pattern.


const username = 'javascript';

const pattern = /^[a-z]{6,}$/;

let result = pattern.test(username);

console.log(result);


if (result) {
    
    console.log('reg exp test passed');
}
else {
    console.log('reg exp test failed');
}
