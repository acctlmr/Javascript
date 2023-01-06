//childNodes - It returns all childNodes including whitespace which is treated as a text node


const ul_selected = document.querySelector("#fruits");

console.log(ul_selected);

const allChildren = ul_selected.childNodes;

console.log(allChildren);

console.log(ul_selected.firstChild);

console.log(ul_selected.lastChild);