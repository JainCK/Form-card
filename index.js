function validateForm() {
    const firstName = document.getElementById("first-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Initialize error messages
    const errorMessages = [];

    // Check if the first name and email are not empty
    if (firstName.trim() === "") {
        errorMessages.push("First Name is required.");
    }

    if (email.trim() === "") {
        errorMessages.push("Email is required.");
    }

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
        errorMessages.push("Password and Confirm Password do not match.");
    }

    // Check password criteria
    const passwordCriteria = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!password.match(passwordCriteria)) {
        errorMessages.push("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.");
    }

    // Display error messages in the HTML
    const errorList = document.getElementById("error-list");
    errorList.innerHTML = "";

    if (errorMessages.length > 0) {
        errorMessages.forEach(message => {
            const li = document.createElement("li");
            li.textContent = message;
            errorList.appendChild(li);
        });

        return false;
    }

    return true;
}

document.querySelector("form").addEventListener("submit", function (e) {
    if (!validateForm()) {
        e.preventDefault();
    }
});
