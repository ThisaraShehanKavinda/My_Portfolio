var typed = new Typed(".typing",{
    strings:["","Front-End Developer","Web Designer","Web Developer","Graphic Designer","Software Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_USER_ID");

    // Add event listener for form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // EmailJS service ID and template ID
        const serviceID = 'service_m58bpxr';
        const templateID = 'service_m58bpxr';

        // Prepare the template parameters
        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Send the email using EmailJS
        emailjs.send(serviceID, templateID, templateParams)
            .then(function(response) {
                // Display success message
                document.getElementById('response').innerHTML = 'Message sent successfully!';
                document.getElementById('response').style.color = 'green';
            }, function(error) {
                // Display error message
                document.getElementById('response').innerHTML = 'Failed to send message. Please try again.';
                document.getElementById('response').style.color = 'red';
            });

        // Reset the form after submission
        document.getElementById('contact-form').reset();
    });
});
