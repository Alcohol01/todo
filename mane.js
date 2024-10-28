const todo = {
    add: document.getElementById('add'),
    test : document.getElementById('test'),
    task_list : document.getElementById('task_list')
}

const tasks = []; 

todo.test.addEventListener('click', () => {
    const newTaskText = todo.add.value;
    if (newTaskText && isNotHaveTask(newTaskText, tasks)) {
        addTask(newTaskText);
        todo.add.value = '';
        tasksRender(tasks);
    }
})

function addTask(text) {
    const timestamp = Date.now();
    const task ={
        id: timestamp,
        text,
        iscompleted: false
    }
    tasks.push(task);
    console.log(tasks);
}

function isNotHaveTask(text, list) {
    let isNotHave = true;

    list.forEach((task) => {
        if (task.text === text) {
            alert('Задача ' + task.id + ' уже существует')
            isNotHave = false;
        }
    })
    return isNotHave;
}

function tasksRender(list) {
    let htmlList = '';

    list.forEach((task) => {
        const taskHtml = `
        <div id="${task.id}" class = "task_list">
        <input type="text" id="text-task" placeholder="${task.text}"></input>
        <div id="button-task-list">
        <span class="click_delete_task" data-click-delete="deleted">&#10006;</span>
        <span class="click_confirm_task" data-click-confirm="confirm">&#10003;</span>
        </div>
        </div>
        `

        htmlList = htmlList + taskHtml;
    })

    todo.task_list.innerHTML = htmlList
}