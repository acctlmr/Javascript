/* select items */

const form = document.querySelector(".grocery-form");

const alert = document.querySelector(".alert");

const grocery = document.getElementById("grocery");

const submitBtn = document.querySelector(".submit-btn");

const container = document.querySelector(".grocery-container");

const list = document.querySelector(".grocery-list");

const clearBtn = document.querySelector(".clear-btn");

//edit option
let editElement;
let editFlag = false;
let editID = "";

/* event listeners */

//submit form
form.addEventListener("submit", addItem);
//clear list
clearBtn.addEventListener("click", clearItems);
//display items onload
window.addEventListener("DOMContentLoaded", setUpItems);


//addItem function

function addItem(e)
{
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value != "" && !editFlag)
    {
        const element = document.createElement("article");
        
        let attr = document.createAttribute("data-id");
        
        attr.value = id;

        //console.log(id);
        element.setAttributeNode(attr);//<article data-id="232323236"></article>

        element.classList.add("grocery-item");//<article class="grocery-item" data-id="232323236"></article >

        element.innerHTML = `
        
        <p class="title">${value}</p>
        <div>
        <!--edit btn-->
        <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
        </button>

        <!--delete btn-->
        <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
        </button>
        </div>                
        `;

        //add event listeners to both buttons
        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItem);

        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItem);
        //append child 
        list.appendChild(element);

        //display alert message
       displayAlert("Item added to the List", "success");
        container.classList.add("show-container");
        //set Local Storage
        addToLocalStorage(id, value);
        //set back to default
        setBackToDefault();
    }
    else if (value !== "" && editFlag) {
        
        editElement.innerHTML = value;
        displayAlert("Value Changed", "success");

        //edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
    } else {
        displayAlert("Please enter value", "danger");
    }
}


//display alert function

function displayAlert(text, action)
{
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove alert

    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);

}

//clear items function
function clearItems() {

    const items = document.querySelectorAll(".grocery-item");
    //console.log(items);

    if (items.length > 0) {
        
        items.forEach(function (item) {
            list.removeChild(item);
        });
    }

    container.classList.remove("show-container");
    displayAlert("Empty List", "danger");

    setBackToDefault();

    localStorage.removeItem("list");

}

//delete item function

function deleteItem(e)
{
    const element = e.currentTarget.parentElement.parentElement;
    
    const id = element.dataset.id;
    
    list.removeChild(element);

    if (list.children.length === 0) {
        container.classList.remove("show-container");
    }

    displayAlert("Item Removed", "danger");

    setBackToDefault();

    //remove from local Storage
    removeFromLocalStorage(id);
}

//edit item function

function editItem(e)
{
    //console.log(e.currentTarget);
    //console.log(e.currentTarget.parentElement);
    const element = e.currentTarget.parentElement.parentElement;
    //targeting article html element=>element
    //console.log(element);
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //targeting p whose class is title=>editElement
    //console.log(editElement);
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    //console.log(editID);
    submitBtn.textContent = "edit";
}

//set back to default function

function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "Submit";
}

/* Local Storage */

function addToLocalStorage(id, value) {
    
    const grocery = { id, value };
    
    let items = getLocalStorage();
    
    items.push(grocery);

    localStorage.setItem("list",JSON.stringify(items));
    
}

function getLocalStorage() {

    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

function editLocalStorage(id, value) {
    
    let items = getLocalStorage();
    
    //map function

    items=items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });

    localStorage.setItem("list",JSON.stringify(items));

}

function removeFromLocalStorage(id)
{
    let items = getLocalStorage();   
    //filter out items
    items=items.filter(function (item) {
        
        if (item.id !== id) { //1201!==1201
            return item;
        }
    });

     localStorage.setItem("list",JSON.stringify(items));

}

//setUpItems function

function setUpItems() {
    
    let items = getLocalStorage();
    
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value);
        });

        container.classList.add("show-container");
    }
}


function createListItem(id, value) {

     const element = document.createElement("article");
        
        let attr = document.createAttribute("data-id");
        
        attr.value = id;

        //console.log(id);
        element.setAttributeNode(attr);//<article data-id="232323236"></article>

        element.classList.add("grocery-item");//<article class="grocery-item" data-id="232323236"></article >

        element.innerHTML = `
        
        <p class="title">${value}</p>
        <div>
        <!--edit btn-->
        <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
        </button>

        <!--delete btn-->
        <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
        </button>
        </div>                
        `;

        //add event listeners to both buttons
        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItem);

        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItem);
        //append child 
        list.appendChild(element);
}