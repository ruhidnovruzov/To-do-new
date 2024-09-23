const taskList = document.getElementById('taskList');
const taskTitle = document.getElementById('taskTitle');
const taskPriority = document.getElementById('taskPriority');
const addTaskButton = document.getElementById('addTask');

addTaskButton.addEventListener('click', () => {
    const title = taskTitle.value;
    const priority = taskPriority.value;

    if (title) {
        addTask(title, priority);
        taskTitle.value = '';
    } else {
        alert('Enter title.');
    }
});

function addTask(title, priority) {
    const listItem = document.createElement('li');
    
    const titleSpan = document.createElement('div');
    titleSpan.innerHTML = `<p>${title}</p> <span>${priority}</span>`;
    listItem.appendChild(titleSpan);

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = title;
    editInput.style.display = 'none';

    const editPriority = document.createElement('select');
    editPriority.innerHTML = `
        <option value="high">High</option>
        <option value="Medium">Medium</option>
        <option value="low">Low</option>
    `;
    editPriority.value = priority;
    editPriority.style.display = 'none';

    const editButton = document.createElement('button');
    editButton.classList.add('edit')
    editButton.innerHTML = '<img src="UI/edit.png" alt="">';
    editButton.onclick = () => {
        if (editInput.style.display === 'none') {
            editInput.style.display = 'inline';
            editPriority.style.display = 'inline';
            titleSpan.style.display = 'none';
            editButton.innerHTML = '<img src="UI/save.png" alt="">';
        } else {
            const newTitle = editInput.value;
            const newPriority = editPriority.value;

            titleSpan.innerHTML = `<p>${newTitle}</p> <span>${newPriority}</span>`;
            editInput.style.display = 'none';
            editPriority.style.display = 'none';
            titleSpan.style.display = 'inline';
            editButton.innerHTML = '<img src="UI/edit.png" alt="">';
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('bin')
    deleteButton.innerHTML = '<img src="UI/bin.png" alt="">';
    deleteButton.onclick = () => taskList.removeChild(listItem);

    listItem.appendChild(editInput);
    listItem.appendChild(editPriority);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
}
