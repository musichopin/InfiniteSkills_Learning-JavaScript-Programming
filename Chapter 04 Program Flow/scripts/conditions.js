// prompt for name
var msg = document.getElementById("message");
var name = prompt("What is your name?", "");
var output = "";

if (name) { // if (name!=="")
	output = "How are you, " + name + "?";
	msg.style.color = "red";	
} else {
	output = "Come on don't be shy";
}

// output message
msg.textContent = output;