// custom controls

// DOM nodes
var form = {
	register:	document.getElementById("register"),
	email:		document.getElementById("email"),
	pass1:		document.getElementById("pass1"),
	pass2:		document.getElementById("pass2"),
	strength:	document.getElementById("strength")
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


// stop spaces being entered
function NoSpaces(e) {
	if (e.charCode == 32) e.preventDefault();
}


// check password strength
var strtext = ["weak", "average", "strong"];
var strcolor = ["#c00", "#f80", "#080"];
function PasswordStrength(e) {

	var pass = form.pass1.value;

	// count uppercase
	var uc = pass.match(/[A-Z]/g);
	uc = (uc && uc.length || 0);

	// count numbers
	var nm = pass.match(/\d/g);
	nm = (nm && nm.length || 0);

	// count symbols
	var nw = pass.match(/\W/g);
	nw = (nw && nw.length || 0);

	// determine strength
	var s = pass.length + uc + (nm * 2) + (nw * 3);
	s = Math.min(Math.floor(s / 10), 2);

	form.strength.textContent = strtext[s];
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