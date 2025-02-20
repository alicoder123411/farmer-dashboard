// signup.js

// Simulating a simple "database" in localStorage
let usersDB = JSON.parse(localStorage.getItem("usersDB")) || [];

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;

    const userExists = usersDB.some(user => user.username === username);

    if (userExists) {
        alert("Username already taken. Please choose another one.");
    } else {
        // Create a new user
        const newUser = { username, password, farmName: "", location: "" };

        // Add the user to the usersDB and save it
        usersDB.push(newUser);
        localStorage.setItem("usersDB", JSON.stringify(usersDB));

        // Store the new user data in localStorage to simulate logging in
        localStorage.setItem("currentUser", JSON.stringify(newUser));

        // Redirect to details page
        window.location.href = "details.html";
    }
});


