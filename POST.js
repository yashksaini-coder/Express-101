const express = require('express');
const app = express(); 

const users = [
    { id: 1, name: 'Yash', kidney: 'good' },
    { id: 2, name: 'Deepanshu', kidney: 'bad' },
    { id: 3, name: 'Rahul', kidney: 'good' }
];

// Get ==> Fetch data from the server
app.get('/',(req,res) => {
    res.send("Server is working fine!");
});

// POST ==> Send data to the server
app.post('/', function(req,res){
    
})


app.listen(3000);