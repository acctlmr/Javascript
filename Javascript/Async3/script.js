
const getDataBtn = document.querySelector("button");

getDataBtn.addEventListener("click", getData);


function getData() {

    const data = new XMLHttpRequest();

    data.addEventListener("readystatechange", function () {
        //console.log(this);
        if (this.status === 200 && this.readyState === 4)
        {
            let users = JSON.parse(this.responseText);  
            console.log(users);
        }
    });

    data.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    data.send();
}
