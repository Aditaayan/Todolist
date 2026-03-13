document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; // Clear input after adding task
        }
    });
        taskInput.addEventListener('keypress', function(e) {
         if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">X</button>
        `;
        taskList.appendChild(listItem);
        const deleteButton = listItem.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });
    }
});