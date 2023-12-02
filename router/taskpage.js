const express = require("express");
const fs = require("fs");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
const taskfile = './mytask/task.json'
var taskid;

router.get('/', (req, res)=>{
    const taskJson = JSON.parse(fs.readFileSync(taskfile, 'utf8'));
    taskid = req.query.taskid;
    express().set('view engine', 'ejs');
    res.status(200).render('taskpage.ejs',taskJson.task[taskid]);
})

router.post('/', (req, res)=>{
    const taskJson = JSON.parse(fs.readFileSync(taskfile, 'utf8'));
    express().set('view engine', 'ejs');
    const editdescribe = req.body.editdescribe;

    // console.log(taskid);
    taskJson.task[taskid].describe = editdescribe;
    fs.writeFileSync(taskfile, JSON.stringify(taskJson, null, 2), 'utf8');
    console.log(taskJson);
    console.log(editdescribe);
    res.redirect('/');

})

module.exports = router