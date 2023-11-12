const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

const taskfile = 'mytask/task.json'
const taskJson = JSON.parse(fs.readFileSync(taskfile, 'utf8'));

router.get('/', (req, res)=>{
    express().set('view engine', 'ejs');
    res.render('index_elec.ejs',{
        tasks: taskJson.task
    });
});

router.post('/', (req, res)=> {
    express().set('view engine', 'ejs');
    let task = "Add " + req.body.todo
    if(task != "Add " && req.body.todo != null) {
        let task_info = {
            "title": req.body.todo,
            "describe": req.body.taskdescribe
        }
        taskJson.task.push(task_info)
        // 
        console.log(taskJson)
    }else {
        task = "Task cannot be blank"
    }   

    res.status(200).render('index_elec.ejs',{
        title: "My Network App project!!!",
        addthing: `${task}`,
        tasks: taskJson.task
    });
    fs.writeFileSync(taskfile, JSON.stringify(taskJson, null, 2), 'utf8')
    
})

router.get('/delete/:task', (req,res)=>{
    express().set('view engine', 'ejs');
    const d_task = req.params.task
    taskJson.task.splice(d_task,1)
    console.log(taskJson.task)
    res.redirect('/todo_electron');
    fs.writeFileSync(taskfile, JSON.stringify(taskJson, null, 2), 'utf8')
})

taskpage = require("./taskpage")
router.use('/todo/task', taskpage)

module.exports = router