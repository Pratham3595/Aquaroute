document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("amzdqnLOZU0cPAo8J"); // Replace with your Public Key
    
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }
        
        emailjs.send("service_lf5o3qg", "template_i4iaygi", {
            from_name: name,
            from_email: email,
            message: message
        }).then(function (response) {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        }, function (error) {
            alert("Failed to send message. Please try again later.");
        });
    });
});
