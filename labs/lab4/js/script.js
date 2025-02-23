//JSON object (database)
const users = {
    "userName1": "Password1",
    "userName2": "Password2",
    "userName3": "Password3",
    "testUser" : "Password123!"
};

//Function to display error messages
function showError(inputElement, message) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;
    inputElement.classList.add("error");
    inputElement.parentNode.appendChild(errorMessage);
}

//Function to clear error messages
function clearErrors() {
    document.querySelectorAll(".error-message").forEach(el => el.remove());
    document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
}

//Validate email 
function validateEmail(email) {
    return email.match(/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,8}$/);
}

//Validate Username (no numbers at start, no spaces or special characters)
function validateUsername(username) {
    return username.match(/^[A-Za-z][A-Za-z0-9_]+$/);
}

//Validate Password (1 Uppercase, 1 Lowercase, 1 number, 1 Special Character, 12 characters min)
function validatePassword(password) {
    return password.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{12,}$/);
}

//Login Page Event Handler
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        clearErrors();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const messageDisplay = document.getElementById("loginMessage");
        messageDisplay.textContent = "";
        
        try {
            if (!users[username]) throw { field: "username", message: "User not found" };
            if (users[username] !== password) throw { field: "password", message: "Incorrect password" };
            
            messageDisplay.textContent = "Login successful!";
            messageDisplay.style.color = "green";
            messageDisplay.style.backgroundColor = '#e0ffe0';
            console.log("User logged in:", username);
        } catch (err) {
            showError(document.getElementById(err.field), err.message);
        }
    });
}

//Registration Page Event Handler
if (document.getElementById("registrationForm")) {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        clearErrors();
        
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const messageDisplay = document.getElementById("regstrationMessage");
        messageDisplay.textContent = "";
        
        try {
            if (!validateEmail(email)) throw { field: "email", message: "Invalid email format" };
            if (!validateUsername(username)) throw { field: "username", message: "Invalid user name format" };
            if (!validatePassword(password)) throw { field: "password", message: "Password must contain: 1 Uppercase letter, 1 Lowercase letter, 1 Digit, 1 Special Character and be 12 Characters minimum" };
            if (password !== confirmPassword) throw { field: "confirmPassword", message: "Passwords do not match" };
            if (users[username]) throw { field: "username", message: "Username already exists" };
            
            users[username] = password;
            messageDisplay.textContent = "Registration successful!";
            messageDisplay.style.color = "green";
            console.log("User registered:", username);
        } catch (err) {
            showError(document.getElementById(err.field), err.message);
        }
    });
}
