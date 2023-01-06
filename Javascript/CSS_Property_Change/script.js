let blockEl = document.querySelector('#block');
let horizontalPosition = document.querySelector("#position-x");
let verticalPosition = document.querySelector("#position-y");
let blockSize = document.querySelector("#size");
let shapeSelector = document.querySelector("#shape-select");
let okBtn = document.querySelector("#ok-btn");
let rgbaR = document.querySelector("#rgba-r");
let rgbaG = document.querySelector("#rgba-g");
let rgbaB = document.querySelector("#rgba-b");
let rgbaA = document.querySelector("#rgba-a");
let rgbaContainer = document.querySelector(".rgba-container");
let rgbaInputs=rgbaContainer.querySelectorAll("input");

//console.log(rgbaInputs);

//vertical position changer

verticalPosition.addEventListener("change", function () {
  //  console.log(verticalPosition.value);
    
    blockEl.style.top = verticalPosition.value + "px";
});

//horizontal position changer

horizontalPosition.addEventListener("change", function () {
    blockEl.style.left = horizontalPosition.value + "px";
});

//Size changer

blockSize.addEventListener("change", function () {
    blockEl.style.transform = "scale(" + blockSize.value + ")"; 
});

//Shape changer
okBtn.addEventListener("click", function () {
    let shapeOption = shapeSelector.value;
  //  console.log(shapeOption);    
    if (shapeOption === "1")
    {
        blockEl.style.borderRadius = "0";
    } else if (shapeOption === "2") {
        blockEl.style.borderRadius = "50%";
    }
});

//Background Color changer

for (let i = 0; i < rgbaInputs.length; i++){
    
    rgbaInputs[i].addEventListener("change", function () {
        blockEl.style.backgroundColor = "rgba("+rgbaR.value+","+rgbaG.value+","+rgbaB.value+","+rgbaA.value+")"; 
    });
}
