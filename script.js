  function appendNewElement() {
            const title = document.getElementById('todoTitle').value;
            const desc = document.getElementById('todoDesc').value;
            if (title && desc) {
                const taskList = document.getElementById('output');
                const task = document.createElement('p');
                task.className = "task"
                task.innerHTML = `${title} - ${desc} <button class="done" onclick="markDone(this)">Done</button> <button class="delete" onclick="deleteTask(this)">Delete</button>`;
                taskList.appendChild(task);
                document.getElementById('todoTitle').value = '';
                document.getElementById('todoDesc').value = '';
            }
        }
        function markDone(button) {
            const task = button.parentElement;
            task.style.textDecoration = 'line-through';
            task.style.backgroundColor = '#dcedc8';
        }
        function deleteTask(button) {
            const task = button.parentElement;
            task.remove();
        }