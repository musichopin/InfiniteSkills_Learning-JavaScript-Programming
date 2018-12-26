// prompt for name
var msg = document.getElementById("message");
var name = prompt("What is your name?", "");
var output = "";

switch (name) {

	case "Jean":
		output = "Bonjour";
		break;

	case "Juan":
		output = "Hola";
		break;

	case "Giovanni":
		output = "Ciao";
		break;

	default:
		output = "Hello"
		break;

}

output += " " + name + "!";

// output message
msg.textContent = output;