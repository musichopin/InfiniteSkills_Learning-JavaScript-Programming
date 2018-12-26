// prompt for number
var msg = document.getElementById("message");
var num = Number(prompt("Factorial", 5));

// counter, test, update
for (var i = 2, output = 1; i <= num; i++) {
	output *= i;
}

// output factorial message
msg.textContent = num + "! = " + output;