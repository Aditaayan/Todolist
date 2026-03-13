# Ex03 To-Do List using JavaScript
## Date:13.03.2026

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>To Do List</h1>
        <div class="input-area">
            <input type="text" id="taskInput" placeholder="Enter a task">
            <button id="addTask">Add Task</button>
        </div>
        <ul class="task-list" id="taskList">
        </ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
style.css
```
body {
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f4f4f4;
    margin: 0;
}
.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}
h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}
.input-area {
    display: flex;
    margin-bottom: 15px;
}
.input-area input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 5px;
}
.input-area button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
}
.input-area button:hover {
    background-color: #367c39;
}
.task-list {
    list-style: none;
    padding: 0;
}
.task-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
}
.task-list li:last-child {
    border-bottom: none;
}
.task-list li span {
    flex-grow: 1;
}
.task-list li button {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 6px 10px;
    border-radius: 4px;
    cursor: pointer;
}
.task-list li button:hover {
    background-color: #da190b;
}
```
script.jss
```
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
```

## OUTPUT
![alt text](<Screenshot 2026-03-13 104159.png>)


## RESULT
The program for creating To-do list using JavaScript is executed successfully.