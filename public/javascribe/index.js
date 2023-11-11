let tasks = document.querySelectorAll('.task')
let doneSubmit = document.querySelectorAll('.done-submit')
tasks.forEach((task, idx) => {
    task.style.backgroundColor = `rgb(${10*idx+25},80, ${240-10*idx} )`
    doneSubmit[idx].style.borderColor = `rgb(${10*idx+25},80, ${240-10*idx} )`
    task.addEventListener('click', ()=>{
        window.location.href = `/todo/${task.firstElementChild.textContent}`;
    })
});


