const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

const taskfile = 'mytask/task.json'
// const taskJson = JSON.parse(fs.readFileSync(taskfile, 'utf8'));

router.get('/', (req, res)=>{
    const taskJson = JSON.parse(fs.readFileSync(taskfile, 'utf8'));
    // router.engine('ejs', engine);
    express().set('view engine', 'ejs');
    res.render('index.ejs',{
        title: "My Network App project!!!",
        tasks: taskJson.task
    });
    
});

router.post('/', (req, res)=> {
    const taskJson = JSON.parse(fs.readFileSync(taskfile, 'utf8'));
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

    res.status(200).render('index.ejs',{
        title: "My Network App project!!!",
        addthing: `${task}`,
        tasks: taskJson.task
    });
    
    fs.writeFileSync(taskfile, JSON.stringify(taskJson, null, 2), 'utf8')
    
})

router.get('/delete/:task', (req,res)=>{
    const taskJson = JSON.parse(fs.readFileSync(taskfile, 'utf8'));
    express().set('view engine', 'ejs');
    const d_task = req.params.task
    taskJson.task.splice(d_task,1)
    console.log(taskJson.task)
    res.redirect('/todo');
    fs.writeFileSync(taskfile, JSON.stringify(taskJson, null, 2), 'utf8')
})

router.get('/json', (req,res)=>{
    const taskJson = JSON.parse(fs.readFileSync(taskfile, 'utf8'));
    // res.send('123');
    // console.log('123')
    res.json(taskJson);
})


taskpage = require("./taskpage")
router.use('/todo/task', taskpage)


module.exports = router