//select elements
const taskInput=document.getElementById('taskInput');
const addTaskBtn=document.getElementById('addTaskBtn');
const taskList=document.getElementById('tasks');

//Add a new task
const addTask=()=>{
    const task=taskInput.value.trim();
    if(task!==""){
        //Create list item
        const li=document.createElement('li');
        li.innerHTML=`
        ${task}
        <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);
        taskInput.value="";//clear input
    }else{
        alert('Please enter a task');
    }
};


//Remove a task
const removeTask=(btn)=>{
    btn.parentElement.remove();
}

//Event Listeners
addTaskBtn.addEventListener('click',addTask);
taskInput.addEventListener('keypress',(e)=>{
    if(e.key==='Enter')addTask();
});