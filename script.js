//your JS code here. If required.

// get the input field 
const input = document.getElementById("fname");

// run when the input loses focus 
input.addEventListener("blur", function() {
	input.value = input.value.toUppercase();
});