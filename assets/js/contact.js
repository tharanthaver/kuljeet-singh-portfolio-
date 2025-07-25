/*==================== CONTACT FORM FUNCTIONALITY ====================*/
document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form element
    const contactForm = document.querySelector('.contact__form');
    
    // Create a div for form messages (success/error)
    const formMessages = document.createElement('div');
    formMessages.className = 'contact__form-messages';
    formMessages.style.marginTop = '1rem';
    formMessages.style.padding = '1rem';
    formMessages.style.borderRadius = '10px';
    formMessages.style.display = 'none';
    
    // Insert the messages div after the submit button
    contactForm.querySelector('div:last-child').after(formMessages);
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        // Reset previous error styles
        [name, email, subject, message].forEach(field => {
            field.style.borderColor = '';
            const label = field.previousElementSibling;
            if (label) label.style.color = '';
        });
        
        // Validate name
        if (name.value.trim() === '') {
            name.style.borderColor = '#ff6b6b';
            name.previousElementSibling.style.color = '#ff6b6b';
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.style.borderColor = '#ff6b6b';
            email.previousElementSibling.style.color = '#ff6b6b';
            isValid = false;
        }
        
        // Validate subject
        if (subject.value.trim() === '') {
            subject.style.borderColor = '#ff6b6b';
            subject.previousElementSibling.style.color = '#ff6b6b';
            isValid = false;
        }
        
        // Validate message
        if (message.value.trim() === '') {
            message.style.borderColor = '#ff6b6b';
            message.previousElementSibling.style.color = '#ff6b6b';
            isValid = false;
        }
        
        return isValid;
    }
    
    // Show message function
    function showMessage(type, text) {
        formMessages.style.display = 'block';
        
        if (type === 'success') {
            formMessages.style.backgroundColor = 'rgba(46, 213, 115, 0.2)';
            formMessages.style.color = '#2ed573';
            formMessages.style.border = '1px solid rgba(46, 213, 115, 0.3)';
        } else {
            formMessages.style.backgroundColor = 'rgba(255, 107, 107, 0.2)';
            formMessages.style.color = '#ff6b6b';
            formMessages.style.border = '1px solid rgba(255, 107, 107, 0.3)';
        }
        
        formMessages.textContent = text;
        
        // Scroll to the message
        formMessages.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessages.style.opacity = '0';
            setTimeout(() => {
                formMessages.style.display = 'none';
                formMessages.style.opacity = '1';
            }, 500);
        }, 5000);
    }
    
    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            showMessage('error', 'Please fill in all required fields correctly.');
            return;
        }
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Disable submit button and show loading state
        const submitButton = contactForm.querySelector('.contact__button-submit');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending... <ion-icon name="sync-outline"></ion-icon>';
        submitButton.style.opacity = '0.7';
        
        // Send the email using EmailJS with the provided credentials
        // Add current time to the form data
        formData.time = new Date().toLocaleString();
        
        // Log the form data for debugging
        console.log('Sending email with data:', formData);
        
        // Add a hidden input for time if it doesn't exist
        if (!document.getElementById('time-input')) {
            const timeInput = document.createElement('input');
            timeInput.type = 'hidden';
            timeInput.id = 'time-input';
            timeInput.name = 'time';
            timeInput.value = new Date().toLocaleString();
            contactForm.appendChild(timeInput);
        } else {
            document.getElementById('time-input').value = new Date().toLocaleString();
        }
        
        // Log the form data for debugging
        console.log('Form being submitted:', contactForm);
        console.log('Service ID:', 'service_qddvqpr');
        console.log('Template ID:', 'template_f99a6xq');
        
        // Use the correct syntax for EmailJS v3.0+
        emailjs.sendForm('service_qddvqpr', 'template_f99a6xq', contactForm)
            .then(function(response) {
                // Success
                console.log('SUCCESS!', response);
                showMessage('success', 'Your message has been sent successfully! I will get back to you soon.');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                submitButton.style.opacity = '1';
            })
            .catch(function(error) {
                // Error with detailed logging
                console.error('FAILED...', error);
                console.error('Error details:', JSON.stringify(error));
                
                showMessage('error', 'Oops! There was a problem sending your message. Please try again later.');
                
                // Reset button
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                submitButton.style.opacity = '1';
            });
    });
    
    // Add input focus effects
    const inputs = document.querySelectorAll('.contact__input');
    inputs.forEach(input => {
        // Focus effect
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('.contact__label').classList.add('focus');
        });
        
        // Blur effect
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.querySelector('.contact__label').classList.remove('focus');
            }
        });
        
        // Check if input already has value on page load
        if (input.value !== '') {
            input.parentElement.querySelector('.contact__label').classList.add('focus');
        }
    });
});
