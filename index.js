//Creating an http server using Express library
// node default library ==> NO
// Express need to be installed locally using npm ==> npm install express
const express = require('express');

const app = express();

//Adding a route

// req, res ==> request and response objects
app.get("/", function(req, res){
    // Add a paramerter to the send method
})

app.listen(3000);