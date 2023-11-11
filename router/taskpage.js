const express = require("express");
const fs = require("fs");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());


router.get('/:taskname', (req, res)=>{
    express().set('view engine', 'ejs');
    const taskname = req.params.taskname;
    res.status(200).send(taskname)
})

module.exports = router