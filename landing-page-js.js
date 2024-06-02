// Add event listener to the form
document.getElementById('signup-form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Form validation
    let isValid = true;

    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const referral = document.getElementById('referral');

    // Validate name
    if (name.value.trim() === '') {
        alert('Please enter your name.');
        isValid = false;
    }

    // Validate email
    if (email.value.trim() === '') {
        alert('Please enter your email address.');
        isValid = false;
    } else {
        // Simple email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            alert('Please enter a valid email address.');
            isValid = false;
        }
    }

    // Validate phone
    if (phone.value.trim() === '') {
        alert('Please enter your phone number.');
        isValid = false;
    }

    // Validate referral source
    if (referral.value === '') {
        alert('Please select a referral source.');
        isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
    }
});
