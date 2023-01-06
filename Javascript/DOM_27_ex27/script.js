//currentTarget - It always refers to the element to which the event handler has been attached to.

//target- It always identifies the element on which the event occured.

const btns = document.querySelectorAll('.btn');

console.log(btns);

btns.forEach(btn => {
   
    btn.addEventListener('click', function (e) {
       // console.log(e.currentTarget);
       // e.currentTarget.style.color = "black";
        
        console.log(e.currentTarget);

        console.log(e.target);

        e.target.style.color = "blue";
    });
});