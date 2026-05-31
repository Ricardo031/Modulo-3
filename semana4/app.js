const apiUrl = 'http://localhost:3000/tareas';
let tareaInput = document.getElementById('tarea');
let btnAgregar = document.getElementById('btnAgregar');
let btnSync = document.getElementById('btnSync');
let listaTareas = document.getElementById('listaTareas');

//% Global array to store tasks in memory
let globalTasks = [];

/**
 * Updates the entire application state at once:
 * Syncs Memory, LocalStorage, and Renders the DOM.
 */
function updateState(newTasks) {
    globalTasks = newTasks;
    localStorage.setItem('persistent_tasks', JSON.stringify(globalTasks));
    renderTasks();
}

/**
 * GET: Fetches tasks from the server.
 * Uses LocalStorage as a fallback if the server is offline.
 */
async function loadTasks() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Server error');
        const data = await response.json();
        console.log('Successfully synced with server');
        updateState(data);
    } catch (error) {
        console.warn('Server offline. Loading local backup.');
        const backup = JSON.parse(localStorage.getItem('persistent_tasks')) || [];
        updateState(backup);
    }
}

/**
 * POST: Adds a new task to the server first, then updates local state.
 */
async function addTask(text) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ texto: text })
        });
        if (!response.ok) throw new Error('Could not add task');
        const newTask = await response.json();
        console.log('POST successful:', newTask);
        updateState([...globalTasks, newTask]);
    } catch (error) {
        console.error('Error in POST:', error);
        alert('Could not connect to the server to save the task.');
    }
}

/**
 * PUT: Updates an existing task on the server and then locally.
 */
async function editTask(id, newText) {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ texto: newText })
        });
        if (!response.ok) throw new Error('Could not update task');
        const updatedTask = await response.json();
        console.log('PUT successful:', updatedTask);
        updateState(globalTasks.map(t => t.id === id ? updatedTask : t));
    } catch (error) {
        console.error('Error in PUT:', error);
        alert('Error updating the task on the server.');
    }
}

/**
 * DELETE: Removes a task from the server and then from local state.
 */
async function deleteTask(id) {
    try {
        const response = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Could not delete task');
        console.log('DELETE successful for id:', id);
        updateState(globalTasks.filter(t => t.id !== id));
    } catch (error) {
        console.error('Error in DELETE:', error);
        alert('Error deleting the task from the server.');
    }
}

/**
 * Renders the task list in the DOM based on the global state.
 */
function renderTasks() {
    listaTareas.innerHTML = '';

    if (globalTasks.length === 0) {
        listaTareas.style.display = 'flex';
        listaTareas.innerHTML = '<p class="empty-msg">No tasks found. Click "Sync List" or add a new one!</p>';
        return;
    }

    listaTareas.style.display = 'flex';
    globalTasks.forEach((task) => {
        let li = document.createElement('li');
        li.classList.add('tarea-item');
        li.innerHTML = `
            <div class="tarea-content"> 
                <p class="tarea-texto">${task.texto}</p>
                <div class="acciones">
                    <button class="btn-editar">Edit</button>
                    <button class="btn-eliminar">Delete</button>
                </div>
            </div>`;

        // Delete Logic
        li.querySelector('.btn-eliminar').onclick = () => deleteTask(task.id);

        // Edit Logic
        li.querySelector('.btn-editar').onclick = () => {
            const newText = prompt('Edit your task:', task.texto);
            if (newText !== null && newText.trim() !== '') {
                editTask(task.id, newText.trim());
            }
        };

        listaTareas.appendChild(li);
    });
}

//% Event listener for the "Add" button
btnAgregar.addEventListener('click', async function (event) {
    event.preventDefault();
    const taskText = tareaInput.value.trim();

    if (taskText === '') {
        alert('Please write a task.');
        return;
    }

    await addTask(taskText);
    tareaInput.value = '';
});

//% Event listener for manual Sync
btnSync.addEventListener('click', async () => {
    btnSync.textContent = 'Syncing...';
    btnSync.disabled = true;
    await loadTasks();
    btnSync.textContent = 'Sync List';
    btnSync.disabled = false;
});

//% Initial application load
loadTasks();
