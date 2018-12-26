// prompt for number
var msg = document.getElementById("message");
var num = String(prompt("Bank Account Number", ""));

while (num.length < 8) {
	num = "0" + num;
}

// alt: do-while
// do {
// 	num = "0" + num;
// } 
// while (num.length < 8);


// alt: shorter version
// num = (	"00000000" + num).substr(-8)

// output factorial message
msg.textContent = num;