// Select the button and message
const button = document.getElementById('actionBtn');
const message = document.getElementById('message');

// Add a click event listener
button.addEventListener('click', () => {
    message.textContent = "Hello! You clicked the button.";
});
//hello