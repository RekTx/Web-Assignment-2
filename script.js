// Validation for Login Form
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let username = document.getElementById("login-username").value.trim();
      let password = document.getElementById("login-password").value.trim();
      let errorMsg = document.getElementById("login-error");

      if (username === "" || password === "") {
        errorMsg.textContent = "All fields are required!";
      } else {
        alert("Login Successful!");
        errorMsg.textContent = "";
      }
    });
  }

  // Validation for Sign Up Form
  const signUpForm = document.getElementById("signUpForm");
  if (signUpForm) {
    signUpForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value;
      let confirmPassword = document.getElementById("confirm-password").value;
      let phone = document.getElementById("phone").value.trim();
      let age = document.getElementById("age").value;
      let gender = document.getElementById("gender").value;
      let address = document.getElementById("address").value.trim();
      let errorMsg = document.getElementById("signup-error");

      let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (
        !name ||
        !email ||
        !password ||
        !confirmPassword ||
        !phone ||
        !age ||
        !gender ||
        !address
      ) {
        errorMsg.textContent = "All fields are required!";
      } else if (!emailRegex.test(email)) {
        errorMsg.textContent = "Invalid email format!";
      } else if (!passwordRegex.test(password)) {
        errorMsg.textContent =
          "Password must contain a special & numeric character!";
      } else if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match!";
      } else if (phone.length !== 10 || isNaN(phone)) {
        errorMsg.textContent = "Enter a valid 10-digit phone number!";
      } else if (age < 18 || age > 60) {
        errorMsg.textContent = "Age must be between 18 and 60!";
      } else {
        alert("Sign Up Successful!");
        errorMsg.textContent = "";
      }
    });
  }
});
