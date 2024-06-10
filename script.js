document.getElementById('addTodoButton').addEventListener('click', function() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Please enter a task.');
        return;
    }

    addTask('todoList', todoText);
    todoInput.value = '';
});

function addTask(listId, taskText) {
    const list = document.getElementById(listId);

    const listItem = document.createElement('li');
    listItem.className = 'task-item';

    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;

    const moveButton = document.createElement('button');
    moveButton.textContent = getNextSectionText(listId);
    moveButton.addEventListener('click', function() {
        const nextSectionId = getNextSectionId(listId);
        list.removeChild(listItem);
        addTask(nextSectionId, taskText);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', function() {
        list.removeChild(listItem);
    });

    listItem.appendChild(textSpan);
    listItem.appendChild(moveButton);
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);
}

function getNextSectionText(currentSectionId) {
    if (currentSectionId === 'todoList') return 'Move next';
    if (currentSectionId === 'inProgressList') return 'Move next';
    if (currentSectionId === 'doneList') return 'Completed';
    return '';
}

function getNextSectionId(currentSectionId) {
    if (currentSectionId === 'todoList') return 'inProgressList';
    if (currentSectionId === 'inProgressList') return 'doneList';
    if (currentSectionId === 'doneList') return 'doneList'; // No move for tasks in "Done" section
    return '';
}
