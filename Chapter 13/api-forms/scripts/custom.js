// custom controls

// DOM nodes
var form = {
	register:	document.getElementById("register"),
	email:		document.getElementById("email"),
	pass1:		document.getElementById("pass1"),
	pass2:		document.getElementById("pass2"),
	strength:	document.getElementById("strength")
	// we added a reference to span node
};


// form submit
form.register.addEventListener( "submit", CheckForm );


// check email field
form.email.addEventListener( "change", function(e) {
	if (e.target.value == "") alert("You forgot the email!");
} );


// stop space character
form.pass1.addEventListener( "keypress", NoSpaces );
form.pass2.addEventListener( "keypress", NoSpaces );


// password strength
form.pass1.addEventListener( "keyup", PasswordStrength );
// keyup event is fired after a keypress has been received 
// and the characters actually appeared on the field


// stop spaces being entered
function NoSpaces(e) {
	if (e.charCode == 32) e.preventDefault();
}


// custom control is one which isnt provided by html
// check password strength
var strtext = ["weak", "average", "strong"];
var strcolor = ["#c00", "#f80", "#080"];
// we define text and color for our password strength indicator
function PasswordStrength(e) {

	var pass = form.pass1.value;

	// we could have written a for loop which went through every 
	// character and detected what they are, but this method 
	// with regex is slightly faster

	// count uppercase: match no of uppercase chars
	// this command returns an array containing all the uppercase letters
	var uc = pass.match(/[A-Z]/g); // g:global match
	uc = (uc && uc.length || 0);
	// if we have an array we get its length or we return zero if there is empty array

	// count numbers
	var nm = pass.match(/\d/g);
	nm = (nm && nm.length || 0);

	// count symbols
	var nw = pass.match(/\W/g); // W: not a number, digit or underscore
	nw = (nw && nw.length || 0);

	// determine strength based on its length awarding bonus points 
	// such as upper case letters, numbers and symbols
	var s = pass.length + uc + (nm * 2) + (nw * 3);
	s = Math.min(Math.floor(s / 10), 2);
	// anything under 10 is weak, 10-20 average and 20+ strong
	// we convert the result into 0-2 range by dividing 10
	// since we might have more than 2, we take minimum
	// we then use the result as an index for our strength node, with text and color arrays
	form.strength.textContent = strtext[s]; // writes text for span node
	form.strength.style.color = strcolor[s];

}


// form submit validation
var reEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
function CheckForm(e) {

	var msg = "";

	// check email
	if (!reEmail.test(form.email.value)) {
		msg += "\nyour email address";
	}

	// check passwords
	if (form.pass1.value == "" || form.pass1.value != form.pass2.value) {
		msg += "\nyour passwords";
	}

	// complete message
	if (msg != "") {
		msg = "Please check:"+msg;
	}
	else {
		msg = "Form is valid!\nSubmitting...";
	}

	alert(msg);

	e.preventDefault();

}