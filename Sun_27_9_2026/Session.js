// VARIABLES
const steps = document.querySelectorAll('.step');
const inputs = document.querySelectorAll('input');
const reviewBox = document.getElementById('review-box');

// STATE MANAGEMENT
let currentStep = Number(sessionStorage.getItem('currentStep')) || 1;
let formData = JSON.parse(sessionStorage.getItem('formData')) || {};

// INITIALIZATION
function initForm() {
    inputs.forEach(input => {
        // Restore saved values from sessionStorage
        if (formData[input.id]) {
            input.value = formData[input.id];
        }

        // Save data on every keystroke
        input.addEventListener('input', (e) => {
            formData[e.target.id] = e.target.value;
            sessionStorage.setItem('formData', JSON.stringify(formData));
        });
    });

    showStep(currentStep);
}

// NAVIGATION LOGIC
function showStep(stepIndex) {
    steps.forEach((step, index) => {
        if (index + 1 === stepIndex) {
            step.classList.remove('hidden');
        } else {
            step.classList.add('hidden');
        }
    });

    // Generate summary if it's the final step
    if (stepIndex === 3) {
        generateReview();
    }

    currentStep = stepIndex;
    sessionStorage.setItem('currentStep', currentStep);
}

function nextStep(stepIndex) {
    showStep(stepIndex);
}

function prevStep(stepIndex) {
    showStep(stepIndex);
}

// REVIEW AND SUBMIT
function generateReview() {
    reviewBox.innerHTML = `
        <strong>Full Name:</strong> ${formData.fullName || 'N/A'}<br>
        <strong>Email:</strong> ${formData.email || 'N/A'}<br>
        <strong>Degree:</strong> ${formData.degree || 'N/A'}<br>
        <strong>University:</strong> ${formData.university || 'N/A'}
    `;
}

function submitForm() {
    alert("Registration confirmed successfully!");
    sessionStorage.clear();
    location.reload();
}

// START APP
initForm();