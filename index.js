//Creating an http server using Express library
// node default library ==> NO

const express = require('express');

const app = express();

//Adding a route

app.get("/", function(req, res){
    res.send('Hello World');
})

app.listen(3000);