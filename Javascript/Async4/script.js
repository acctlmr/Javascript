
const getDataBtn = document.querySelector("button");

const dog1 = document.querySelector(".dog1");

const dog2 = document.querySelector(".dog2");

getDataBtn.addEventListener("click", getData);

function getData() {
    
    let getToDos = (callback) => {
      
        const data = new XMLHttpRequest();
        
        data.addEventListener("readystatechange", function () {
           
            if (this.status === 200 && this.readyState === 4) {
                
                const dataRetrieved = JSON.parse(this.responseText);
                callback(undefined,dataRetrieved);
                               
            }
            else if (this.readyState === 4) {
                callback("Error Fetching Data",undefined);
            }
        });

        data.open("GET", "https://jsonplaceholder.typicode.com/users", true);
        data.send();
    };

    dog1.classList.add("show");

    getToDos(
        (error, toDoData) => {
            if (error) {
                console.log(error);
            } else {
                console.log(toDoData);
            }
        }


    );

    dog2.classList.add("show");


}