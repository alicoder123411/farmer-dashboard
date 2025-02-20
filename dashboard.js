// dashboard.js

// Handle the logout button click
document.getElementById("logoutBtn").addEventListener("click", function() {
    // Remove the current user from localStorage
    localStorage.removeItem("currentUser");

    // Redirect to the login page
    window.location.href = "login.html";  // Ensure this path is correct based on your project directory
});

// Load user details when the page loads
window.onload = function() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (!currentUser) {
        // If no user is logged in, redirect to login page
        window.location.href = "login.html";  // Ensure this path is correct based on your project directory
        return;
    }

    // Populate user details
    const userDetailsList = document.getElementById("userDetailsList");
    userDetailsList.innerHTML = `
        <li><strong>Full Name:</strong> ${currentUser.fullName}</li>
        <li><strong>Farm Name:</strong> ${currentUser.farmName}</li>
        <li><strong>Location:</strong> ${currentUser.location}</li>
        <li><strong>Name of Area:</strong> ${currentUser.areaName}</li>
        <li><strong>AI Level:</strong> ${currentUser.aiLevel}</li>
        <li><strong>Acres of Land:</strong> ${currentUser.numberOfAcres}</li>
        <li><strong>Annual Income:</strong> ${currentUser.income}</li>
    `;

    // Update Progress Bar based on AI level or another factor
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    let progress = 0;
    if (currentUser.aiLevel === 1) {
        progress = 20;
        progressText.innerText = "Your issue is being reviewed by experts.";
    } else if (currentUser.aiLevel === 2) {
        progress = 50;
        progressText.innerText = "Issue is in the analysis stage.";
    } else if (currentUser.aiLevel === 3) {
        progress = 80;
        progressText.innerText = "Solution is being formulated.";
    } else {
        progress = 100;
        progressText.innerText = "Your issue has been resolved.";
    }

    progressBar.style.width = progress + "%";
};

// Handle New Query and Problem Report buttons
document.getElementById("queryBtn").addEventListener("click", function() {
    // Redirect to a page for submitting a new query (you can create a new query page)
    alert("You can submit a new query here.");
    // Example: window.location.href = "submitQuery.html";
});

document.getElementById("reportBtn").addEventListener("click", function() {
    // Redirect to a page to report a new problem (you can create a new report page)
    alert("You can report a new problem here.");
    // Example: window.location.href = "reportProblem.html";
});



