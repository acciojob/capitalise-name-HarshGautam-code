//your JS code here. If required.

// Get the input field
const input = document.getElementById("fname");

// Run when input loses focus
 input.addEventListener("blur", function () {
  input.value = input.value.toUpperCase();
});