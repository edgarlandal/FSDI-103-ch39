/* 
Create a ToDo app where the user can: 
- Register a new Task using an input.
- Store the tasks in an tasksArray.
- Display the Task in the Todo list section, you have to use document.getElementById();
- Display the number of task that are registered in the app.
Extra challenge: 
Use a good CSS design to display it.
*/

const tasksArray = [];
const namesArray = [];

function registerTask() {
    var task = document.getElementById("txtTask").value
    var name = document.getElementById("txtName").value

    if (task == '' && name == '')  {
        alert("Error!");
        return;
    }
    tasksArray.push(task);
    namesArray.push(name);

    document.getElementById("txtTask").value = "";
    document.getElementById("txtName").value = "";

    displayTaskList();
}

function displayTaskList() {
    document.getElementById("taskList").innerHTML += `   
        <div class="element">     
            <div class="header-task">
                <p>Number ${tasksArray.length}</p>
            </div>
            <div class="body-task">
                <p>${namesArray[namesArray.length - 1]} - ${tasksArray[tasksArray.length - 1]}</p>
            </div>
        </div>
    `;
}

