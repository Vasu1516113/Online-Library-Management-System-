
function validateForm() {
  let email = document.forms["loginForm"]["email"].value;
  let password = document.forms["loginForm"]["password"].value;
  if (email === "" || password === "") {
    alert("Both fields must be filled out");
    return false;
  }
}
