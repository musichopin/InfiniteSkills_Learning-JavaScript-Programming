// prompt for number
var msg = document.getElementById("message");
var num = String(prompt("Bank Account Number", ""));

while (num.length < 8) {
	num = "0" + num;
}

// output factorial message
msg.textContent = num;