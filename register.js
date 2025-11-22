document.getElementById("registerForm").addEventListener("submit", function(event){
  event.preventDefault();

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Password check
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // DOB validation (must be 18+)
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age < 18) {
    alert("You must be at least 18 years old.");
    return;
  }

  // Save user
  const user = {
    firstname,
    lastname,
    dob,
    email,
    password
  };

  localStorage.setItem("registeredUser", JSON.stringify(user));

  alert("Registration Successful!");
  window.location.href = "login.html";
});
