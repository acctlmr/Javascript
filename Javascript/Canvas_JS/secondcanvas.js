const canvasEl = document.querySelector("canvas");

const canvasContext = canvasEl.getContext("2d");

//console.log(window.innerWidth);
//console.log(window.innerHeight);

canvasEl.height = window.innerHeight;

canvasEl.width = window.innerWidth;

/****Drawing Rectangles/Squares Randomly********/
/*
for (let i = 1; i < 11; i++)
{
    let x = Math.random() * window.innerWidth;
    
    let y = Math.random() * window.innerHeight;
    
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(x, y, 50, 50);
}
*/

//Randomizing the color and location

/*
for (let i = 1; i < 23; i++)
{
    let x = Math.random() * window.innerWidth;
    
    let y = Math.random() * window.innerHeight;

    let red = Math.ceil(Math.random() * 255);
    let green = Math.ceil(Math.random() * 255);
    let blue = Math.ceil(Math.random() * 255);
    
    
    canvasContext.fillStyle = `rgb(${red},${green},${blue})`;
    canvasContext.fillRect(x, y, 50, 50);
}
*/

//Randomizing the color and location and size


for (let i = 1; i < 23; i++)
{
    let x = Math.random() * window.innerWidth;
    
    let y = Math.random() * window.innerHeight;

    let red = Math.ceil(Math.random() * 255);
    let green = Math.ceil(Math.random() * 255);
    let blue = Math.ceil(Math.random() * 255);

    let width = Math.random() * 200;
    let height = Math.random() * 200;
    
    
    canvasContext.fillStyle = `rgb(${red},${green},${blue})`;
    canvasContext.fillRect(x, y, width, height);
}