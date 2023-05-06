let addBtn = document.querySelector('#addBtn');
let listTask = document.querySelector('#list');
let inputTask = document.querySelector('#taskInput');

let tasks = [];

function writeLS() {
    localStorage.setItem('taskLS', JSON.stringify(tasks));
}

function createItem() {
    let btns = document.createElement('div');
    btns.classList.add('btnsGroup');

    let compliteBtn = document.createElement('button');
    compliteBtn.classList.add('compliteBtn');
    compliteBtn.innerHTML = 'Complite';
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerHTML = 'X';

    btns.append(compliteBtn);
    btns.append(deleteBtn);

    let newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerHTML = inputTask.value;
    newItem.append(btns);

    listTask.append(newItem);

    let itemData = {
        id: Date.now(),
        text: inputTask.value,
        complite: false
    }

    tasks.push(itemData);

    writeLS();

    inputTask.value = '';

    compliteBtn.addEventListener('click', () => {
        newItem.style.background = '#84F576';
        newItem.removeChild(btns);
        let compliteText = document.createElement('span');
        compliteText.classList.add('compliteText');
        compliteText.innerText = 'Complite task!';
        deleteBtn.classList.add('singleDeleteBtn')
        newItem.append(compliteText);
        newItem.append(deleteBtn);
    });

    deleteBtn.addEventListener('click', () => {
        listTask.removeChild(newItem);
    });
}

addBtn.addEventListener('click', createItem);

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && inputTask.value !== '') createItem()
});