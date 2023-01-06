const btn = document.querySelector('.btn');

const heading=document.querySelector('h2');

btn.addEventListener("click", function () {
    console.log("Button clicked");
    heading.classList.add('blue');
});