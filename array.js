const express = require('express');
const app = express(); 

const users = [
    { id: 1, name: 'Yash', kidney: 'good' },
    { id: 2, name: 'Deepanshu', kidney: 'bad' },
    { id: 3, name: 'Rahul', kidney: 'good' }
];


app.get('/',(req,res) => {
    res.send("Server is working fine!");
});

app.get('/user', (req, res) => {
    const id = parseInt(req.query.id);
    const user = users.find(u => u.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(3000);
