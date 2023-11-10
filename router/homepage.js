const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
// router.use(express.static(path.join(__dirname, 'public')));

const taskfile = 'mytask/task.json'
const taskJson = JSON.parse(fs.readFileSync(taskfile, 'utf8'));

router.get('/', (req, res)=>{
    // router.engine('ejs', engine);
    express().set('view engine', 'ejs');
    res.render('index.ejs',{
        title: "My Network App project!!!",
        tasks: taskJson.task
    });
    
});

router.post('/', (req, res)=> {
    express().set('view engine', 'ejs');
    let task = "Add " + req.body.todo
    if(task != "Add " && req.body.todo != null) {
        taskJson.task.push(req.body.todo)
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
    express().set('view engine', 'ejs');
    const d_task = req.params.task
    taskJson.task.splice(d_task,1)
    console.log(taskJson.task)
    res.redirect('/todo');
    fs.writeFileSync(taskfile, JSON.stringify(taskJson, null, 2), 'utf8')
})


module.exports = router