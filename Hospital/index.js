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

app.get('/check-up', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    
    if (!username) {
        return res.status(401).send('Username is required');
    }
    res.send('<h1>Health Checkup</h1>');
});

app.get('/doctors', (req, res) => {
    res.send('<h1>Doctors</h1>');
});

app.get('/patients', (req, res) => {
    res.send('<h1>Patients</h1>');
});

app.get('/appointments', (req, res) => {
    res.send('<h1>Appointments</h1>');
});

app.get('/contact', (req, res) => {
    const contact = `
        <h1>Contact</h1>
        <p>Phone: 1234567890</p>
        <p>Email: node-hospital@npm.com</p>
    `;
    res.send(contact);
});

app.get('/about', (req, res) => {
    const about = `
        <h1>About US</h1>
        <p>Our Hospital is a multi-speciality hospital with world-class facilities and experienced doctors.</p>
    `;
    res.send(about);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});