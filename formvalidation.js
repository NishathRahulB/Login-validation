document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-validate");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Reset error messages
        document.getElementById("username-error").innerText = "";
        document.getElementById("email-error").innerText = "";
        document.getElementById("password-error").innerText = "";
        document.getElementById("confirmpassword-error").innerText = "";

        let Username = document.getElementById("username").value.trim();
        let Email = document.getElementById("email").value.trim();
        let Password = document.getElementById("password").value.trim();
        let Confirmpassword = document.getElementById("confirmpassword").value.trim();

        let namePattern = /^[A-Za-z ]{3,}$/;
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        let isValid = true;

        // ✅ Validate Username
        if (Username === "") {
            document.getElementById("username-error").innerText = "Name is required.";
            isValid = false;
        } else if (!namePattern.test(Username)) {
            document.getElementById("username-error").innerText = "Name must have at least 3 letters and contain only alphabets.";
            isValid = false;
        }

        // ✅ Validate Email
        if (Email === "") {
            document.getElementById("email-error").innerText = "Email is required.";
            isValid = false;
        } else if (!emailPattern.test(Email)) {
            document.getElementById("email-error").innerText = "Enter a valid email (e.g., example@mail.com).";
            isValid = false;
        }

        // ✅ Validate Password
        if (Password === "") {
            document.getElementById("password-error").innerText = "Password is required.";
            isValid = false;
        } else if (!passwordPattern.test(Password)) {
            document.getElementById("password-error").innerText = "Password must have at least 6 characters, 1 uppercase letter, 1 number, and 1 special character.";
            isValid = false;
        }

        // ✅ Validate Confirm Password
        if (Confirmpassword === "") {
            document.getElementById("confirmpassword-error").innerText = "Confirm your password.";
            isValid = false;
        } else if (Confirmpassword !== Password) {
            document.getElementById("confirmpassword-error").innerText = "Passwords do not match.";
            isValid = false;
        }

        // ✅ If all fields are valid, submit the form
        if (isValid) {
            alert("Form submitted successfully!");
            form.submit(); // Submits the form
        }
    });

    // ✅ Clear error messages when user starts typing
    document.querySelectorAll("#form-validate input").forEach(input => {
        input.addEventListener("input", function () {
            document.getElementById(input.id + "-error").innerText = "";
        });
    });
});
