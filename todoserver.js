/**
 You need to create an express HTTP server in Node.js which will handle the logic of a file server.
- Use built in Node.js `fs` module
The expected API endpoints are defined below,
1. GET /files - Returns a list of files present in `./files/` directory
Response: 200 OK with an array of file names in JSON format.
Example: GET http://localhost:3000/files
2. GET /file/:filename - Returns content of given file by name
    Description: Use the filename from the request path parameter to read the file from `./files/` directory
    Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
    Example: GET http://localhost:3000/file/example.txt
- For any other route not defined in the server return 404
*/

const express = require('express');
const fs = require('fs');
const path = require('path')
const port = 3000;
const app = express();

app.get('/',(req, res) => {
    res.send("Welcome to the File Handling Server");
});


// File API endpoint

app.get('/files',(req, res) => {
    const directorypath = path.join(__dirname, 'files');
    fs.readdir(directorypath, (err, files) => {
        if(err) {return res.status(500).send('unable to scan the directory: '+err)}

        res.json(files);
    });
});


app.listen(3000);