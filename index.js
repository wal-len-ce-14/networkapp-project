// const http = require("http");
const fs = require("fs")
const path = require("path");
const express = require("express")

app = express();
app.use('/', express.static(path.join(__dirname, 'html')));

app.get('/', (req, res)=>{
    // page = fs.readFileSync('public/index.html');
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
}).listen(8080);




