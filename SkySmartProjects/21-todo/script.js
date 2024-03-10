const addBtn = document.querySelector('#add');
const taskInput = document.querySelector('.form-task');
const taskList = document.querySelector('#task-list');

addBtn.addEventListener('click', addNewItem);

function addNewItem(event) {
    event.preventDefault();
    const task = taskInput.value;

    if (!task) return;

    const newItem = document.querySelector('#template').cloneNode(true).content;

    newItem.querySelector('.item__text').value = task;

    newItem.querySelector('.item__delete').addEventListener('click', deleteItem);

    taskList.append(newItem);

    taskInput.value = '';
    taskInput.focus();
}


function deleteItem(event) {
    event.preventDefault();
    const target = event.target.parentElement;
    target.remove();
}