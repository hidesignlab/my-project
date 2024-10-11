const messages = [
    "Welcome",      // English
    "Bienvenido",   // Spanish
    "Bienvenue",    // French
    "Willkommen",   // German
    "Benvenuto",    // Italian
    "أهلاً وسهلاً",  // Arabic
    "환영합니다",      // Korean
    "欢迎",          // Chinese
];

let index = 0;
const welcomeMessage = document.getElementById("welcome-message");

function showNextMessage() {
    welcomeMessage.textContent = messages[index];
    welcomeMessage.style.opacity = '1'; // Fade in

    setTimeout(() => {
        welcomeMessage.style.opacity = '0'; // Fade out
        index = (index + 1) % messages.length; // Loop back to the first message
        setTimeout(showNextMessage, 500); // Wait before showing the next message
    }, 2000); // Display each message for 2 seconds
}

// Start the animation
showNextMessage();
