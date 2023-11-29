const express = require("express");
const fs = require("fs");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
const taskfile = './mytask/task.json'

router.get('/', (req, res)=>{
    const taskJson = JSON.parse(fs.readFileSync(taskfile, 'utf8'));
    express().set('view engine', 'ejs');
    res.status(200).render('taskpage.ejs',taskJson.task[req.query.taskid])
})

module.exports = router