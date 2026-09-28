let tasks = [
  { id: 1, text: "Check the rover battery", done: false },
  { id: 2, text: "Review the Mars landing map", done: true },
  { id: 3, text: "Brief Rania on the launch plan", done: false }
];

// The id the NEXT new task will get. Increase it after every add.
let nextId = 4;

/* Selecting necessary selectors */

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const emptyMsg = document.getElementById("empty-msg")
const counterMsg = document.getElementById("counter");
const clearBtn = document.getElementById("clear-done");


/* Preparing the tasks list function to render the tasks */

function renderTasks(){
taskList.innerHTML = "";

for (const task of tasks){
   const listElement = document.createElement("li");
   listElement.dataset.id = task.id;
   const span = document.createElement("span")
   span.textContent = task.text;
   span.classList.add("task-text");
    
   const deleteBtn =document.createElement("button");
   deleteBtn.textContent= "Delete";
   deleteBtn.classList.add("delete-btn");
    
   listElement.appendChild(span);
   listElement.appendChild(deleteBtn);

   if(task.done){
      listElement.classList.add("done");
   }

   taskList.appendChild(listElement);
   updateCounter();

}
}

renderTasks();



/* Adding Update counter function */

function updateCounter() {
  let counter=0;
  for (const task of tasks){
     if (task.done === false){counter++;}
  }
   counterMsg.textContent = counter + " task(s) remaining";
   if (tasks.length === 0){emptyMsg.classList.remove("hidden");}
     else {emptyMsg.classList.add("hidden");} 
}

updateCounter();


/* Add new to do task */

taskForm.addEventListener("submit", function(event){
   event.preventDefault();
   let inputText = taskInput.value.trim();
   if (inputText === ""){return;}
   const newTask= {id: nextId, text: inputText, done: false}
   tasks.push(newTask);
   nextId++;
   taskInput.value= "";
   renderTasks();
});


/* delete button */

taskList.addEventListener("click", function(event){
   const target= event.target;
   let taskID= Number(target.parentElement.dataset.id);
   if (target.classList.contains("task-text")){
      for (const task of tasks){
         if (task.id === taskID){task.done = !task.done}
      }
   }
   if (target.classList.contains("delete-btn")){
      const newTasks =[];
      for (const task of tasks){
         if (task.id !== taskID)
            newTasks.push(task);
      }
      tasks=newTasks;
   }
  renderTasks();
})

/* Clear Completed Tasks Button */

clearBtn.addEventListener("click", function(event){
  const newFalseArray= []
  for (const task of tasks){if (task.done===false){newFalseArray.push(task)}}
  tasks= newFalseArray;
  renderTasks();
})

