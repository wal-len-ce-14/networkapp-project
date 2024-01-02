const fs = require("fs")
const path = require("path");
const express = require("express")
const homepage = require("./router/homepage")
// const homepage_elec = require("./router/homepage_elec")
const port = 8080;

const app = express();
app.use('/', express.static(path.join(__dirname, 'html')));
app.set('views', path.join(__dirname, "webpage"));

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.use('/', homepage)
app.use('/todo', homepage)
// app.use('/todo_electron', homepage_elec)


app.listen(port, ()=>{
    console.log(`App is listening on port ${port}...`)
});

module.exports = app;



