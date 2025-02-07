const messages = [
    "Initializing components...",
    "Compiling shaders...",
    "Optimizing performance...",
    "Fetching data...",
    "Enhancing user experience...",
    "Rendering visuals...",
    "Checking system resources...",
    "Almost there..."
];

const messageElement = document.getElementById("loading-message");

// Function to change loading message every 1.5s
function changeMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];
}

const messageInterval = setInterval(changeMessage, 1500);
changeMessage();

setTimeout(() => {
    clearInterval(messageInterval);
    document.getElementById("loading-screen").classList.add("hidden");
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 500);
}, 6000);