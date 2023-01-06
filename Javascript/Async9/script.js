/*

The async keyword allows us to define a function that handles asynchronous operations.

We place the async keyword infront of the function keyword to define an async function.

It returns a Promise.

If we use async keyword we must use await keyword to wait for a Promise to settle either on resolved or rejected state.


*/

async function getPosts() {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    const data = await response.json();

    if (response.status !== 200) {
        throw new Error("Error Fetching Data");
    }
    
    return data;
}

console.log("Learning Javascript");

getPosts().then((data) => {
    
    console.log(data);

})
    .catch((error) => console.log(error.message));


console.log("Learning CSS");