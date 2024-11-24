// Form submission handler
async function submitCheckupForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = {
        name: form.name.value,
        age: parseInt(form.age.value),
        email: form.email.value,
        phone: form.phone.value,
        symptoms: form.symptoms.value
    };

    try {
        const response = await fetch('/check-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        
        if (response.ok) {
            showMessage('success', 'Check-up appointment created successfully!');
            form.reset();
        } else {
            showMessage('error', data.message || 'Something went wrong');
        }
    } catch (error) {
        showMessage('error', 'Failed to submit form');
    }
}

// Load doctors list
async function loadDoctors() {
    try {
        const response = await fetch('/api/doctors');
        const doctors = await response.json();
        const doctorsList = document.getElementById('doctorsList');
        
        doctorsList.innerHTML = doctors.map(doctor => `
            <div class="doctor-card">
                <h3>${doctor.name}</h3>
                <p>Specialization: ${doctor.specialization}</p>
                <button class="btn" onclick="bookAppointment('${doctor.id}')">Book Appointment</button>
            </div>
        `).join('');
    } catch (error) {
        showMessage('error', 'Failed to load doctors');
    }
}

// Book appointment
async function bookAppointment(doctorId) {
    const date = prompt('Enter preferred date (YYYY-MM-DD):');
    if (!date) return;

    try {
        const response = await fetch('/api/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ doctorId, date })
        });

        const data = await response.json();
        if (response.ok) {
            showMessage('success', 'Appointment booked successfully!');
        } else {
            showMessage('error', data.message);
        }
    } catch (error) {
        showMessage('error', 'Failed to book appointment');
    }
}

// Utility function to show messages
function showMessage(type, message) {
    const messageDiv = document.getElementById('message');
    messageDiv.className = type;
    messageDiv.textContent = message;
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 3000);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    const checkupForm = document.getElementById('checkupForm');
    if (checkupForm) {
        checkupForm.addEventListener('submit', submitCheckupForm);
    }

    const doctorsSection = document.getElementById('doctorsList');
    if (doctorsSection) {
        loadDoctors();
    }
});
