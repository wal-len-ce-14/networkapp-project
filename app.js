// const http = require("http");
const fs = require("fs")
const path = require("path");
const express = require("express")
const port = 8080;


app = express();
// app.use('/', express.static(path.join(__dirname, 'html')));
app.set('views', path.join(__dirname));
app.set('view engine', 'jade');

app.get('/', (req, res)=>{
    // page = fs.readFileSync('public/index.html');
    res.render('webpage/index.jade',{
        title: "My Network App project!!!"
    });
});

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}...`)
});




