const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'violet', '#DB8754', '#12FF4D', '#7E62A4', '#FF86B2'];

const btn = document.getElementById('btn1');

const color = document.querySelector('.color');


btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
   // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {

    return Math.floor(Math.random() * colors.length);
}