

document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("loginIdentifier").value;
    const password = document.getElementById("loginPassword").value;
   

    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.log("🔍 Login Response:", data);

        if (!response.ok) {
            throw new Error(data.message || "Login failed");
        }

        alert("✅ Login Successful!");
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "ship1.html";

    } catch (error) {
        console.error("❌ Login Error:", error);
        alert(`❌ Error: ${error.message}`);
    }
    //add newwwww
    // Example after login is successful:
// localStorage.setItem("isLoggedIn", "true"); // Mark user as logged in

// // Check if there's a saved redirect URL
// const redirectTo = localStorage.getItem("redirectTo");
// if (redirectTo) {
//   localStorage.removeItem("redirectTo"); // Remove it after using
//   window.location.href = redirectTo; // Redirect to the intended service detail page
// } else {
//   // Or redirect to a default home/dashboard page if no redirect was saved.
//   window.location.href = "ship1.html";
// }
/////////////ab addd 
// After successful login
localStorage.setItem("isLoggedIn", "true"); // Mark user as logged in

const redirectTo = localStorage.getItem("redirectTo");
if (redirectTo) {
    localStorage.removeItem("redirectTo");
    window.location.href = redirectTo;
} else {
    // Default redirection if no specific service page was stored
    window.location.href = "ship1.html"; 
}

});



