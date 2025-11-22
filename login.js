document.addEventListener("DOMContentLoaded", function() {
  let savedUser = localStorage.getItem("loggedInUser");

  // If user is already logged in it goes straight to products
  if (savedUser) {
    window.location.href = "products.html";
  }
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let remember = document.getElementById("rememberMe").checked;
  let errorMessage = document.getElementById("error-message");

  if (email === "" || password === "") {
    errorMessage.textContent = "Please fill in all fields.";
    return;
  }

  // Fake login credentials
  if (email === "admin@pureclean.com" && password === "1234") {

    // Save login ONLY if remember me is checked
    if (remember) {
      localStorage.setItem("loggedInUser", email);
    }

    alert("Login successful!");
    window.location.href = "products.html";   // redirect here
  } else {
    errorMessage.textContent = "Incorrect email or password.";
  }
});
