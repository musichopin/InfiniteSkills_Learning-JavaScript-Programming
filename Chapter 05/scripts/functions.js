// prompt for number
var msg = document.getElementById("message");

do {
	var num = prompt("Factorial (hit OK to end)", "");
	if (num !== "") {
		msg.textContent = num + "! = " + factorial(num);
	}
	else {
		msg.textContent = "Finished";
	}
}
while (num);


// calculate factorials
function factorial(num) {
	num = Number(num);
	if (num < 0) {
		return null;
	}
	var f = 1;
	for (var i = 2; i <= num; i++) {
		f *= i;
	}
	return f;
}
