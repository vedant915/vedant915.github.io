
document.addEventListener("DOMContentLoaded", function () {

    // Display a welcome message in the browser console
    console.log("Welcome to my Portfolio Website!");

    // Dark mode functionality
    const darkModeButton = document.getElementById("darkModeBtn");

    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeButton.textContent = "☀️ Light Mode";
        } else {
            darkModeButton.textContent = "🌙 Dark Mode";
        }
    });

    // Automatically update the current year
    const yearElement = document.getElementById("year");
    yearElement.textContent = new Date().getFullYear();

    // Contact button functionality
    const contactButton = document.getElementById("contactBtn");

    contactButton.addEventListener("click", function () {
        alert("Thank you for visiting my portfolio!");
    });

});
