// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form values
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;
        const password = document.querySelector('input[type="text"]').value;
        
        // Display data in browser
        displayFormData(name, email, message, password);
        
        // Optional: Show success messa
        alert('Form submitted successfully!');
    });
});

// Function to display form data on the page
function displayFormData(name, email, message, password) {
    // Create or update display container
    let displayDiv = document.getElementById('formDataDisplay');
    
    if (!displayDiv) {
        displayDiv = document.createElement('div');
        displayDiv.id = 'formDataDisplay';
        displayDiv.style.cssText = `
            background: white;
            padding: 20px;
            margin: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            max-width: 500px;
        `;
        document.body.appendChild(displayDiv);
    }
    
    // Display the data (mask password for security)
    const maskedPassword = '*'.repeat(password.length);
    
    displayDiv.innerHTML = `
        <h3>Form Data Submitted:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Password:</strong> ${maskedPassword}</p>
        <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
    `;
}