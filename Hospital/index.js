const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const menu = `
        <h1>Welcome to the Hospital</h1>
        <ul>
            <li><a href="/check-up">Health-Checkup</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/patients">Patients</a></li>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About US</a></li>
        </ul>
    `;
    res.send(menu);
});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});