//Fetch API

/*

The Fetch API allows us to make HTTP requests to servers from web browsers.

We know XMLHttpRequest(XHR) object,the Fetch API can perform all the tasks as the XHR object does.

Fetch API is very simple to use, which uses Promise to deliver more flexible features to make requests to servers from web browsers.

Fetch API requires only one parameter which is the URL of the resource which we want to fetch. 

Fetch API returns a Promise so that we can use the then() and catch() methods to handle it.

When the request completes,the promise resolves with the complete contents of the fetched resource.

*/


fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        //console.log(response);
        return response.json();
    })//convert, read,parsing
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log(error);
    });