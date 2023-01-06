//const result = document.getElementById('result');
//console.log(result);

//const result = document.querySelector('#result');

//console.log(result);

//result.style.backgroundColor = 'green';
//result.style.color = 'white';


//const item = document.querySelector('.special');

//console.log(item);

//const lastItem = document.querySelector('li:last-child');
//console.log(lastItem);

const list=document.querySelectorAll('.special');

/*
list.forEach((item) => {
    console.log(item);
})

*/

list.forEach(function (item) {
    console.log(item);
    item.style.backgroundColor = 'dodgerblue';
    item.style.color = "white";
    item.style.padding = "12px";
    item.style.width = "120px";
});