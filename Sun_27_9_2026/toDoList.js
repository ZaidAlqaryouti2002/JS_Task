// VARIABLES
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const emptyMsg = document.getElementById('empty-msg');
const counter = document.getElementById('counter');
const clearDoneBtn = document.getElementById('clear-done');
const charCount = document.getElementById('char-count');
const filterBtns = document.querySelectorAll('.filter-btn');

// LOAD DATA

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';


// SAVE DATA

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// RENDER TASKS
function renderTasks() {
    taskList.innerHTML = '';
    
    // Filter tasks
    let filteredTasks = tasks;
    if (currentFilter === 'active') filteredTasks = tasks.filter(t => !t.done);
    if (currentFilter === 'done') filteredTasks = tasks.filter(t => t.done);

    // Show/hide empty message
    if (tasks.length === 0) {
        emptyMsg.classList.remove('hidden');
    } else {
        emptyMsg.classList.add('hidden');
    }

    // Create task elements
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        
        if (task.done) li.classList.add('done');
        
        li.innerHTML = `
            <span class="task-text" data-id="${task.id}">${task.text}</span>
            <button class="delete-btn" data-id="${task.id}">Delete</button>
        `;
        taskList.appendChild(li);
    });

    // Update remaining tasks counter
    const activeTasksCount = tasks.filter(t => !t.done).length;
    counter.textContent = `${activeTasksCount} task(s) remaining`;
}


// ADD TASK
taskForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const text = taskInput.value.trim();
    if (!text) return; 
    
    tasks.push({ id: Date.now(), text, done: false });
    
    taskInput.value = '';
    charCount.textContent = '0 / 50';
    
    saveTasks();
    renderTasks();
});

// TOGGLE AND DELETE
taskList.addEventListener('click', (e) => {
    const taskId = Number(e.target.dataset.id);
    
    // Toggle task status
    if (e.target.classList.contains('task-text')) {
        const task = tasks.find(t => t.id === taskId);
        task.done = !task.done;
        saveTasks();
        renderTasks();
    }
    
    // Delete task
    if (e.target.classList.contains('delete-btn')) {
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasks();
        renderTasks();
    }
});

// CLEAR COMPLETED
clearDoneBtn.addEventListener('click', () => {
    tasks = tasks.filter(t => !t.done); 
    saveTasks();
    renderTasks();
});

// EXTRA FEATURES

// Update character count
taskInput.addEventListener('input', () => {
    charCount.textContent = `${taskInput.value.length} / 50`;
});

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});


renderTasks();