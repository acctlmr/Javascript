const chart = document.querySelector(".gpie");

const canvas = document.createElement("canvas");

//Dimensions

canvas.height = 120;
canvas.width = 120;


chart.appendChild(canvas);


//Initializing a 2D context
const context2D = canvas.getContext("2d");

context2D.lineWidth = 10;

const radius = 50;

//drawCircle function

function drawCircle(color, ratio, anticlockwise)
{

    context2D.strokeStyle = color;
    context2D.beginPath();
    context2D.arc(60, 60, radius, 0, ratio * Math.PI * 2, anticlockwise);
    context2D.stroke();

}


//drawCircle("red", 0.25, false);
//drawCircle("green", 0.25, true);


function updateChart(income, outcome)
{

    context2D.clearRect(0, 0, canvas.width, canvas.height);
    
    let ratio = income / (income + outcome); // 3/4=>0.75

    drawCircle("lawngreen", -ratio, true);//anticlockwise
    
    drawCircle("tomato",1-ratio,false);//clockwise


}



