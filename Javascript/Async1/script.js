/*
XMLHttpRequest (XHR) objects are used to interact with servers.

XMLHttpRequest can be used to retrieve any type of data, not just XML.

An HTTP request can be made in 4 easy steps:

1 -> Instantiate a new XHR Object.

2 -> Create the Request (Request Set Up)

3 -> Decide what to do with the data received/fetched if the request is successful.

4 -> Send the request.

*/

const btn = document.querySelector("button");

const para = document.querySelector("p");

btn.addEventListener("click", textData);

function textData() {

    //Step 1
    const NewXHR = new XMLHttpRequest();

    //console.log(NewXHR);
   
    //Step 2
    NewXHR.open("GET", "info.txt", true);

    //Step 3
    NewXHR.onload = function () {
        
       // console.log(this);
        if (this.status === 200)
        {
            console.log(this.responseText);
            para.innerText = this.responseText;
        }
    }

    //Step 4
    NewXHR.send();

}


