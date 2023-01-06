const copy = document.querySelector(".copy-me");

copy.addEventListener('copy', () => {
    console.log(`My content is copyrighted!!!`);
});


const box = document.querySelector('.box');

//The offsetX property returns the x-corordinate of the mouse pointer,relative to the target element.

//The offsetY property returns the y-corordinate of the mouse pointer,relative to the target element.
box.addEventListener('mousemove', e => {
   // console.log(e);
   // console.log(e.offsetX, e.offsetY);
    
    box.textContent=`x pos - ${e.offsetX} - ${e.offsetY}`;
});


