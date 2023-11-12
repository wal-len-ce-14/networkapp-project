let input_todo = document.getElementById("taskname")
let tododescribe = document.getElementById("taskdescribe")
let input_todo_form = document.querySelector(".todo-form")

input_todo.addEventListener('click', ()=>{
    tododescribe.style.display = 'block'
})
tododescribe.addEventListener('blur', ()=>{
    tododescribe.style.display = 'none'
})


let tasks = document.querySelectorAll('.task')
let doneSubmit = document.querySelectorAll('.done-submit')

tasks.forEach((task, idx) => {
    task.style.backgroundColor = `rgb(${10*idx+25},80, ${240-10*idx} )`
    doneSubmit[idx].style.borderColor = `rgb(${10*idx+25},80, ${240-10*idx} )`
    task.addEventListener('click', ()=>{
        window.location.href = `/todo/task?taskid=${tasks.length-idx-1}`;
    })
});



