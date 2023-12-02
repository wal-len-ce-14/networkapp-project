const express = require("express");
const fs = require("fs");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
const taskfile = './mytask/task.json'

router.get('/', (req, res)=>{
    const taskJson = JSON.parse(fs.readFileSync(taskfile, 'utf8'));
    const taskid = req.query.taskid;
    express().set('view engine', 'ejs');
    res.status(200).render('taskpage.ejs',taskJson.task[taskid]);
})

router.post('/todo/task/edit', (req, res)=>{
    console.log("i am here");
    const taskJson = JSON.parse(fs.readFileSync(taskfile, 'utf8'));
    const edit_describe = req.body.edit-describe;
    console.log(edit_describe);
    express().set('view engine', 'ejs');
})

module.exports = router