// use to generic to provide what is the element we are selecting
// or they dont know it is a FORM
const taskForm = document.querySelector<HTMLFormElement>('.form')
const fromInput = document.querySelector<HTMLInputElement>('.form-input')
const taskListElement = document.querySelector<HTMLUListElement>('.list')

// task type
type Task = {
    description: string;
    isCompleted: boolean;
}

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask)

function loadTasks(): Task[] {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks? JSON.parse(storedTasks): []
}


taskForm?.addEventListener('submit', (event: SubmitEvent)=>{
    event.preventDefault();
    const taskDesciption = fromInput?.value;
    if (taskDesciption) {
        const task: Task = {
            description: taskDesciption,
            isCompleted: false,
        }
        addTask(task);
        renderTask(task);
        updateStorage();
        console.log('task:',taskDesciption);
        fromInput.value = '';
        return;
    }
    alert('please enter a task')
});

function addTask(task: Task): void{
    tasks.push(task);
    console.log('tasks now:', tasks);
}


function renderTask(task:Task): void {
    // const taskElement = document.createElement('li');
    // taskElement.textContent = task.description;
    // taskListElement?.appendChild(taskElement);
    if (!taskListElement) {
        console.warn('no tasklistelement')
        return;
    }
    const taskElement = document.createElement('li');
    taskElement.textContent = task.description;

    // checkbox
    const taskCheckbox = document.createElement('input')
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.isCompleted;

    //toggle checkbox
    taskCheckbox.addEventListener('change', ()=>{
        task.isCompleted = !task.isCompleted;
        updateStorage()
    })

    taskElement.appendChild(taskCheckbox);
    taskListElement?.append(taskElement);
}


function updateStorage():void{
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
