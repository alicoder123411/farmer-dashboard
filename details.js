// details.js

document.getElementById("detailsForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting traditionally

    // Get values from form
    const fullName = document.getElementById("fullName").value;
    const farmName = document.getElementById("farmName").value;
    const location = document.getElementById("location").value;
    const areaName = document.getElementById("areaName").value;
    const aiLevel = document.getElementById("aiLevel").value;
    const numberOfAcres = document.getElementById("numberOfAcres").value;
    const income = document.getElementById("income").value;

    // Get the current user data from localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        // Update the user data with the details entered in the form
        currentUser.fullName = fullName;
        currentUser.farmName = farmName;
        currentUser.location = location;
        currentUser.areaName = areaName;
        currentUser.aiLevel = aiLevel;
        currentUser.numberOfAcres = numberOfAcres;
        currentUser.income = income;

        // Save the updated user data back to localStorage
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        // Redirect to the dashboard after saving the details
        window.location.href = "dashboard.html";
    } else {
        alert("You must be logged in first.");
    }
});


