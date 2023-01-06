//Localstorage object allows us to save key/value pairs in the browser.

//Web Storage API - provided by browser.


localStorage.setItem('name', 'Rahul');

localStorage.setItem('friend', 'Peter');

localStorage.setItem('job', 'developer');

localStorage.setItem('address', 'street 123');


const name1 = localStorage.getItem('name');

console.log(name1);

localStorage.removeItem('name');

const anotherName = localStorage.getItem('name');

console.log(anotherName);

localStorage.clear();


