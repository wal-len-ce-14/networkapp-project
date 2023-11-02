// const http = require("http");
const fs = require("fs")
const path = require("path");
const express = require("express")
const port = 8080;


app = express();
// app.use('/', express.static(path.join(__dirname, 'html')));
app.set('views', path.join(__dirname, "webpage"));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.render('index.jade',{
        title: "My Network App project!!!",
        numoftask: 1
    });
});

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}...`)
});




