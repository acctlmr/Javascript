const canvasEl = document.querySelector("canvas");

const canvasContext = canvasEl.getContext("2d");

canvasEl.height = window.innerHeight;

canvasEl.width = window.innerWidth;

//Drawing Lines Randomly
/*
for (let i = 0; i < 20; i++)
{
    let XStart = Math.random() * window.innerWidth;
    let YStart = Math.random() * window.innerHeight;
    
    let XEnd = Math.random() * window.innerWidth;
    let YEnd = Math.random() * window.innerHeight;

    canvasContext.beginPath();
    canvasContext.moveTo(XStart, YStart);
    canvasContext.lineTo(XEnd, YEnd);
    canvasContext.strokeStyle = "white";
    canvasContext.stroke();
}
*/

//Drawing Arcs
/*
for (let i = 0; i < 20; i++)
{
    let XStart = Math.random() * window.innerWidth;
    let YStart = Math.random() * window.innerHeight;
    
    let radius = (Math.random() * window.innerWidth) / 10;
    
    canvasContext.beginPath();

    canvasContext.arc(XStart, YStart, radius, 0, Math.PI);

    canvasContext.strokeStyle = "white";

    canvasContext.stroke();
}
*/

//Drawing Circles

for (let i = 0; i < 20; i++)
{
    let XStart = Math.random() * window.innerWidth;
    let YStart = Math.random() * window.innerHeight;
    
    let radius = (Math.random() * window.innerWidth) / 10;
    
    canvasContext.beginPath();

    canvasContext.arc(XStart, YStart, radius, 0, Math.PI*2);

    canvasContext.strokeStyle = "white";

    canvasContext.stroke();
}

