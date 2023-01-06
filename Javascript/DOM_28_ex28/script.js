
const items = document.querySelectorAll('li');


items.forEach(item => {
   
    item.addEventListener('click', e => {
       
       // console.log('item clicked');
       // console.log(e.target);
        e.target.style.backgroundColor = 'dodgerblue';
        console.log(item);
        e.target.style.textDecoration = 'line-through';
        


    });
    

});