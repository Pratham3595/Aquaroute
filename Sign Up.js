document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const captainId = document.getElementById("signupCaptainId").value;
    const password = document.getElementById("signupPassword").value;


  
    try {
        const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, captainId, password }),
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            alert("Signup Successful! Redirecting to Login...");
            window.location.href = "Login.html"; // Redirect to login page
        } else {
            alert("Signup Failed: " + (data.message || "Unknown Error"));
        }
    } catch (error) {
        alert("Signup Failed: Server Error");
        console.error(error);
    }
});
