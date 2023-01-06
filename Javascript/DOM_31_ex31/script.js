const container = document.querySelector('.container');

const btn = document.querySelector('.btn');


btn.addEventListener('click', function () {
    const element = document.createElement('h1');
    
    element.classList.add('heading');

    element.textContent = `Dynamic Content`;
    console.log('Button child called');
    container.appendChild(element);
});

container.addEventListener('click', function (e) {
    console.log('Container event parent called');
    if (e.target.classList.contains('heading')) {
        console.log('Heading class is present inside h1');
    }
});