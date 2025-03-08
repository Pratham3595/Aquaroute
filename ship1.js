// // document.addEventListener("DOMContentLoaded", async function () {
// //     try {
// //         // Send a request to check if user is logged in
// //         const response = await fetch("http://localhost:5000/auth/check", {
// //             method: "GET",
// //             credentials: "include", // Ensures cookies/sessions are sent
// //         });

// //         const data = await response.json();

// //         if (data.loggedIn) {
// //             document.getElementById("btn").style.display = "block";
// //         } else {
// //             document.getElementById("btn").style.display = "none";
// //         }
// //     } catch (error) {
// //         console.error("Error checking login status:", error);
// //     }
// //     // function checkLogin(servicePage) {
// //     //     // Check login status (this can be a flag stored in localStorage or a cookie)
// //     //     let isLoggedIn = localStorage.getItem("isLoggedIn");
      
// //     //     if (isLoggedIn === "true") {
// //     //       // If user is logged in, directly go to the service detail page.
// //     //       window.location.href = servicePage;
// //     //     } else {
// //     //       // Alert the user and save the intended page to redirect after login.
// //     //       alert("Please login first!");
// //     //       localStorage.setItem("redirectTo", servicePage);
// //     //       window.location.href = "Login.html"; // Redirect to login page.
// //     //     }
// //     //   }
// //       ///////hhh
// //       function checkLogin(servicePage) {
// //         console.log("checkLogin triggered for", servicePage);
// //         let isLoggedIn = localStorage.getItem("isLoggedIn");
// //         if (isLoggedIn === "true") {
// //           window.location.href = servicePage;
// //         } else {
// //           localStorage.setItem("redirectTo", servicePage);
// //           alert("Please login first to view this page.");
// //           window.location.href = "Login.html";
// //         }
// //       }
      
// // });


// document.addEventListener("DOMContentLoaded", function () {
//     // Get all service buttons
//     const serviceButtons = document.querySelectorAll(".service .btn");

//     // Check login status from localStorage
//     const isLoggedIn = localStorage.getItem("isLoggedIn");

//     serviceButtons.forEach(function (button) {
//         // Get the intended service page URL from the data attribute
//         const servicePage = button.getAttribute("data-service-page");

//         if (isLoggedIn === "true") {
//             // User is logged in, clicking the button redirects directly to the service detail page
//             button.addEventListener("click", function () {
//                 window.location.href = servicePage;
//             });
//             // Optionally, remove any "locked" visual styling
//             button.classList.remove("locked");
//         } else {
//             // User is not logged in
//             // Add a "locked" class for visual indication (e.g., gray out the button)
//             button.classList.add("locked");

//             // Attach a click event that alerts and then redirects to the login page
//             button.addEventListener("click", function (e) {
//                 e.preventDefault(); // Prevent default button behavior
//                 alert("Please login first to view this page.");
//                 // Save the intended page URL so that after login, you can redirect there
//                 localStorage.setItem("redirectTo", servicePage);
//                 window.location.href = "Login.html"; // Adjust this path if needed
//             });
//         }
//     });
// });




    document.addEventListener("DOMContentLoaded", function () {
        // Get all service buttons
        const serviceButtons = document.querySelectorAll(".service .btn");

        // Check login status from localStorage
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        serviceButtons.forEach(function (button) {
            // Get the intended service page URL from the data attribute
           const servicePage = button.getAttribute("data-service-page");

            if (isLoggedIn === "true") {
                // User is logged in, clicking the button redirects directly
                button.addEventListener("click", function () {
                    window.location.href = servicePage;
                });
                // Remove any "locked" visual styling
                button.classList.remove("locked");
            } else {
                // User is not logged in: add locked styling and redirect
                button.classList.add("locked");
                button.addEventListener("click", function (e) {
                    e.preventDefault();
                    alert("Please login first to view this page.");
                    localStorage.setItem("redirectTo", servicePage);
                    window.location.href = "Login.html"; // Adjust if needed
                });
            }
        });
    });

