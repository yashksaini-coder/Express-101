//Creating an http server using Express library
// node default library ==> NO

const express = require('express');

const app = express();

//Adding a route

app.get("/", function(req, res){
    // Add a paramerter to the send method
    const n = req.query.n;
    const name = req.query.name;
    console.log(n);
    console.log(name);
    res.send('Hi the user is ' + name + ' and the answer is ' + n);
})

app.listen(3000);