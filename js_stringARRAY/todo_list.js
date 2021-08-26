let tasks = []
const txtTask = document.querySelector('#task_input');
const btnInsert = document.querySelector('#insert_button');


function refresh_list() {
    lstTask.innerHTML = tasks
    for(let task in tasks){
        lstTask.innerHTML += '<li>' + tasks[task] + '</li>'
    }
    lstTask.innerHTML = tasks.map(task => `<li>${task}</li>  <button> Edit </button> `).join('')
}


btnInsert.addEventListener('click', function () {
    let task = txtTask.value;
    tasks.push(task)
    txtTask.value = '';
    txtTask.focus();
    console.table(tasks);
    refresh_list();
});