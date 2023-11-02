const fs = require("fs")
const path = require("path");
const express = require("express")
const bodyParser = require('body-parser');
const port = 8080;


app = express();
// app.use('/', express.static(path.join(__dirname, 'html')));
app.set('views', path.join(__dirname, "webpage"));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.render('index.jade',{
        title: "My Network App project!!!"
    });
});

app.post('/', (req, res)=>{
    task = "Add " + req.body.todo
    if(task=="Add ") task = "Task cannot be blank"

    res.render('index.jade',{
        title: "My Network App project!!!",
        addthing: `${task}`
    });
    return req.body.todo
})

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}...`)
});




