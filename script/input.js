function validateAndSend() {
    // Get user input
    const inputField = document.getElementById("inputField");;
    const inputValue = inputField.value.trim(); // Remove leading/trailing spaces

    // Validate input
    if (inputValue.length === 0) {
        alert = "Input is required.";
    } else if (inputValue.length > 256) {
        alert = "Input must be 256 characters or shorter.";
    } else {
        // Send data to the backend (replace this with your backend API call)
        sendDataToBackend(inputValue);
    }
}