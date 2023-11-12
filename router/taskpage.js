const express = require("express");
const fs = require("fs");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
const taskfile = 'mytask/task.json'
const taskJson = JSON.parse(fs.readFileSync(taskfile, 'utf8'));

router.get('/', (req, res)=>{
    express().set('view engine', 'ejs');
    res.status(200).render('taskpage.ejs',taskJson.task[req.query.taskid])
})

module.exports = router