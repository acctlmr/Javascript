const changeBtn = document.querySelector(".change-bg");

const resetBtn = document.querySelector(".reset-bg");

/*
changeBtn.addEventListener("dblclick", function () {
    
    document.body.style.backgroundColor = "dodgerblue";
    console.log("Change Button clicked");

});

resetBtn.addEventListener("dblclick", function () {
    
    document.body.style.backgroundColor = "white";
    console.log("Reset Button clicked");
    
});
*/
/*
changeBtn.addEventListener("mouseover", function () {
    document.body.style.backgroundColor = "coral";
    console.log("The Change BG button has been moused over...");
});

resetBtn.addEventListener("mouseout", function () {
    document.body.style.backgroundColor = "#fff";
    console.log("The Change Button has been moused out...");
});
*/

window.addEventListener("scroll", function () {
    document.body.style.backgroundColor = "coral";

    document.body.style.color = "white";
});