import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorHandler.js';
import { patientSchema } from './schemas/patientSchema.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(join(__dirname, 'public')));

// Sample data (replace with database in production)
const doctors = [
    { id: '1', name: 'Dr. John Smith', specialization: 'Cardiology' },
    { id: '2', name: 'Dr. Sarah Johnson', specialization: 'Pediatrics' },
    { id: '3', name: 'Dr. Michael Brown', specialization: 'Neurology' }
];

const appointments = [];

// Routes
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.post('/check-up', async (req, res, next) => {
    try {
        const validatedData = await patientSchema.parseAsync(req.body);
        // Here you would typically save to a database
        res.status(201).json({
            status: 'success',
            message: 'Check-up appointment created',
            data: validatedData
        });
    } catch (error) {
        next(error);
    }
});

// API Routes
app.get('/api/doctors', (req, res) => {
    res.json(doctors);
});

app.post('/api/appointments', (req, res) => {
    const { doctorId, date } = req.body;
    const doctor = doctors.find(d => d.id === doctorId);
    
    if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found' });
    }

    const appointment = {
        id: appointments.length + 1,
        doctorId,
        doctorName: doctor.name,
        date,
        createdAt: new Date()
    };

    appointments.push(appointment);
    res.status(201).json({
        status: 'success',
        message: 'Appointment booked successfully',
        data: appointment
    });
});

app.get('/api/appointments', (req, res) => {
    res.json(appointments);
});

// Error handling middleware (should be last)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});