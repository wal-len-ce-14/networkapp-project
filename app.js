const fs = require("fs")
const path = require("path");
const express = require("express")
const homepage = require("./router/homepage")
const port = 8080;

const app = express();
// app.use('/', express.static(path.join(__dirname, 'html')));
app.set('views', path.join(__dirname, "webpage"));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', homepage)


app.listen(port, ()=>{
    console.log(`App is listening on port ${port}...`)
});




