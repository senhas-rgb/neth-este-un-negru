const messages = [
    "Patrick is real...",
    "Nethmira is very niggerlecious...",
    "Welcome to niggarville...",
    "CIA has been notified...",
    "Terry has been summoned...",
    "True divine interllect content...",
    "Ronaldo and messi both very nigga...",
    "Imagine if nethmira gets a low taper fade...",
    "Nyvyme is the goat..."

];

const timeout = 6000; // default 6k

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
}, timeout);