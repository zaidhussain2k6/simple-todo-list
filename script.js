// JavaScript for adding tasks to the list
        const taskInput = document.getElementById("task");
        const addTaskButton = document.getElementById("addTask");
        const taskList = document.getElementById("taskList");

        addTaskButton.addEventListener("click", function () {
            const taskText = taskInput.value.trim();

            if (taskText !== "") {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <span>${taskText}</span>
                    <button class="delete-button">Delete</button>
                `;

                taskList.appendChild(listItem);
                taskInput.value = "";

                const deleteButton = listItem.querySelector(".delete-button");
                deleteButton.addEventListener("click", function () {
                    listItem.remove();
                });
            }
        });