//const para = document.querySelector('p');

//console.log(para.innerText);

//para.innerText = "Learning web development";


//console.log(para.innerText);

//const paras = document.querySelectorAll('p');

//console.log(paras);

//console.log(paras[1]);

//paras.forEach(function (p) {
    //console.log(p);
    //console.log(p.innerText);
 //   p.innerText = 'New Item';
 //   console.log(p.innerText);
    
//});


const content = document.querySelector('.content');

//console.log(content.innerHTML);

//content.innerHTML += `<h2>This is a new h2</h2>`;

//content.innerHTML += `<h3>This is heading 3 added to the content`;

//console.log(content.innerHTML);

const people = ['Alan', 'Sam', 'Ruby'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
    console.log(person);
})