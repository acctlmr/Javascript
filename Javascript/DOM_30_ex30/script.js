/*

The concept of event bubbling is used where the event handlers are invoked when one element is nested on to the other element and are part of the same event. This technique or method is known as event bubbling.

Thus, while performing event flow for a web page, event bubbling is used.

We can understand event bubbling as a sequence of calling the event handlers when one element is nested in another element,and both the elements have registered lsiteners for the same event.

*/

const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Adding new element';
    ul.appendChild(li);
});

const items = document.querySelectorAll('li');


items.forEach(item => {
    item.addEventListener('click', e => {
        console.log('Event in LI');
        e.stopPropagation();
        e.target.remove();
    });
});


ul.addEventListener('click', e => {
    console.log('Event in UL');
    //console.log(e.target.tagName);
    if (e.target.tagName === 'LI')
    {
        e.target.remove();
        }
});

document.body.addEventListener('click', function () {
    console.log("Event in Body");
});