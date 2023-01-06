
const getToDos = (callback) => {
    
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
       
        if (request.readyState === 4 && request.status === 200) {
            const data=JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('Could not fetch Data', undefined);
        }
    });

    request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

    request.send();
}








console.log("Displaying text 1");

console.log("Displaying text 2");

getToDos(

    (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    }


);


console.log("Displaying text 3");
console.log("Displaying text 4");