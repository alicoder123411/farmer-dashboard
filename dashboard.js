// Chatbot functionality
const chatbotMessages = document.getElementById("chatbotMessages");
const chatbotInput = document.getElementById("chatbotInput");
const chatbotSend = document.getElementById("chatbotSend");
const chatbotOptions = document.getElementById("chatbotOptions");
const yieldingOption = document.getElementById("yieldingOption");
const manureOption = document.getElementById("manureOption");
const seedOption = document.getElementById("seedOption");
const otherOption = document.getElementById("otherOption");

const solutions = {
    "yielding": "To increase your yield, you can consider improving irrigation, adding organic fertilizers, and using high-yielding variety seeds.",
    "manure": "For manure, organic compost or well-decomposed farmyard manure (FYM) can significantly improve soil quality and crop health.",
    "seed": "For seeds, you can try hybrid varieties like XYZ or ABC that are suitable for your region and climate."
};

// Function to add messages to the chat
function addMessage(content, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(sender + "-message");
    messageDiv.textContent = content;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Function to handle user input and responses
function handleUserInput() {
    const userMessage = chatbotInput.value.trim().toLowerCase();

    if (userMessage) {
        addMessage(userMessage, "user");

        // Check if the user message matches a predefined problem
        if (solutions[userMessage]) {
            addMessage(solutions[userMessage], "bot");
        } else {
            addMessage("I didn't quite understand. Could you clarify?", "bot");
        }

        chatbotInput.value = ""; // Clear input
    }
}

// Function to initiate the chatbot conversation
function initiateChat() {
    addMessage("Hello! What seems to be the problem? You can choose one of the following options:", "bot");
    chatbotOptions.style.display = "flex"; // Show the options
    chatbotInput.style.display = "none"; // Hide the input box initially
    chatbotSend.style.display = "none"; // Hide send button
}

// Event listeners for the options
yieldingOption.addEventListener("click", () => {
    addMessage("You selected 'Yielding'. " + solutions["yielding"], "bot");
    resetChat();
});

manureOption.addEventListener("click", () => {
    addMessage("You selected 'Manure'. " + solutions["manure"], "bot");
    resetChat();
});

seedOption.addEventListener("click", () => {
    addMessage("You selected 'Seed'. " + solutions["seed"], "bot");
    resetChat();
});

otherOption.addEventListener("click", () => {
    addMessage("You selected 'Other Problem'. Please describe your issue.", "bot");
    chatbotOptions.style.display = "none"; // Hide the options
    chatbotInput.style.display = "block"; // Show the input box
    chatbotSend.style.display = "block"; // Show the send button
});

// Reset the chat after an option is selected
function resetChat() {
    setTimeout(() => {
        addMessage("Is there anything else I can help you with?", "bot");
        chatbotOptions.style.display = "flex";
        chatbotInput.style.display = "none";
        chatbotSend.style.display = "none";
    }, 2000);
}

// On click of the send button for custom input
chatbotSend.addEventListener("click", () => {
    handleUserInput();
});

// On pressing Enter key to send the message
chatbotInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleUserInput();
    }
});

// Start the chatbot by asking the first question
initiateChat();

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

