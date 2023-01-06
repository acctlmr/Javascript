const changeBtn = document.querySelector(".change-bg");

const resetBtn = document.querySelector(".reset-bg");

changeBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "dodgerblue";
    console.log("The Change Button has been clicked...");
});

resetBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "#fff";
    console.log("The Reset Button has been clicked...");
});