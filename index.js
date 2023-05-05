const addButton = document.getElementById('add-button');
addButton.addEventListener('click', foo);

function foo() {
    const ul = document.getElementsByTagName('ul');
    let li = document.createElement('li');
    ul[0].appendChild(li);
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    span1.innerText = 'Gagik';
    li.appendChild(span1);
    span2.innerText = 'Satenik';
    li.appendChild(span2);
    span1.classList.add('name');
    span2.classList.add('delete');

}
