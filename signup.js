const signUpForm = document.getElementById("signup-form");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(document.getElementById("name").value);
  localStorage["username"] = document.getElementById("name").value;
  localStorage["email"] = document.getElementById("email").value;
  localStorage["password"] = document.getElementById("password").value;
  window.location = "index.html";
});
