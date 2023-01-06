const heading = document.querySelector('h1');

const btn = document.querySelector('.btn');

const link = document.getElementById("link");

//console.log(heading);

//console.log(btn);

//console.log(link);

heading.addEventListener('click', e => {
    console.log(e.currentTarget);
    console.log(this);
});

btn.addEventListener('click', function (e) {
    e.currentTarget.classList.add('blue');
    console.log(e.type);
});

function someFunc(e)
{
    console.log(e.currentTarget);
}

link.addEventListener('click', someFunc);