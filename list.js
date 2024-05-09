const toDoInput = document.getElementById('toDoInput');
        const addButton = document.getElementById('addButton');
        const toDoList = document.getElementById('toDoList');

        // Add a new task when the Add button is clicked
        addButton.addEventListener('click', function() {
            const task = toDoInput.value.trim();
            if (task !== '') {
                addTask(task);
                toDoInput.value = ''; // Clear the input
            }
        });

        // Add a new task to the list
        function addTask(task) {
            const listItem = document.createElement('li');
            listItem.textContent = task;

            // Create a delete button for the task
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.style.marginLeft = '10px';

            // Add event listener to delete the task when the button is clicked
            deleteButton.addEventListener('click', function() {
                toDoList.removeChild(listItem);
            });

            // Append the delete button to the list item
            listItem.appendChild(deleteButton);

            // Append the list item to the to-do list
            toDoList.appendChild(listItem);
        }
