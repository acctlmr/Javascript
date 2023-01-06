/*

Promise->
A promise is an object that encapsulates the result of an asynchronous operation.

A promise object can have the following states:

->Pending

->Fulfilled with a value

->Rejected with an error

here pending indicates that the asynchronous operation is in progress, the state either chnages to fuldilled or rejected depending on the result of the asynchronous operation.

fulfilled state indicates that the asynchronous operation was completed successfully.

rejected state indicates that the asynchronous operation was rejected or failed.


We will use Promise() constructor to create a promise object.

Promise() constructor accepts a callback function that typically performs an asynchronous operation.

The two callback functions with the name resolve and reject.

If the asynchronous operation completes successfully then resolve() function called to change the sate of the promise from pending to fulfilled with a value.

In case of error,the reject() function called to change the state of the promsie from pending to rejected with the error reason.

A promise cannot go from the fulfilled to rejected state or it cannot go from rejected to fulfilled state or it cannot go back from  the fulfilled or rejected state to the pending state.

To get the value of a promise when its fulfilled we call the then() method of the promise object.

If we get the error only when the state of the promise is rejected, then we can use the catch() method of the promise object.

*/

let myFirstPromise = new Promise((resolve, reject) => {
    
    setTimeout(function () {
        resolve("Success");
        //reject("Error");
    }, 5000);
});


/*
myFirstPromise.then((successMsg) => {
    console.log(successMsg);
},
    (errorMsg) => {
        console.log(errorMsg);
    }

);
*/

myFirstPromise.then((successMsg) => {
    console.log(successMsg);
})
.catch((errorMsg) => {
        console.log(errorMsg);
});