//Creating an http server using Express library
// node default library ==> NO
// Express need to be installed locally using npm ==> npm install express
const express = require('express');

const app = express();

//Request methods ==> GET, POST, PUT, DELETE
// Get ==> Fetch data from the server
// POST ==> Send data to the server
// PUT ==> Update data on the server
// DELETE ==> Delete data on the server

// Status Codes ==> 200, 404, 500, 403, 401, 400
// 200 ==> OK
// 404 ==> Not Found
// 500 ==> Internal Server Error
// 403 ==> Forbidden
// 401 ==> Unauthorized
// 400 ==> Bad Request

// req, res ==> request and response objects
app.get('/', (req, res) => {
    res.send("1.About Us, 2.Contact Us, 3.User ID, 4.User ID and Name");
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/contact', (req, res) => {
    res.send('Contact Us');
});

app.get('/user/:id', (req, res) => {
    res.send('User ID: ' + req.params.id);
});

app.get('/user/:id/:name', (req, res) => {
    res.send('User ID: ' + req.params.id + ' Name: ' + req.params.name);
});


app.listen(3000);