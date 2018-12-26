// form validation

// DOM nodes
var form = {
	// we add references to nodes
	register:	document.getElementById("register"),
	email:		document.getElementById("email"),
	pass1:		document.getElementById("pass1"),
	pass2:		document.getElementById("pass2")
};
// object pattern:
// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


// form submit
form.register.addEventListener( "submit", CheckForm );
// event is submit, event handler is CheckForm
// this event is  normally called when form is submitted, but if we 
// use a browser supporting html5 it won't be called until data is actually valid


// check email field
// this is invoked when the data is changed in the field and the user
// focuses on elsewhere on the page (invoked only once)
form.email.addEventListener( "change", function(e) {
	if (e.target.value == "") alert("You forgot the email!");
} );
// e.target is email field due to email id


// stop space character
form.pass1.addEventListener( "keypress", NoSpaces );
form.pass2.addEventListener( "keypress", NoSpaces );
// we could have checked the spaces in our CheckForm function as well


// stop spaces being entered
function NoSpaces(e) {
	if (e.charCode == 32) e.preventDefault();
}
// charcode is 32 for space
// we prevent the default so space character doesn't get into the default

// email regex function
var reEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
// form submit validation
function CheckForm(e) {
	// we write a function which validates the email adress 
	// even though the browser might have done that as well

	var msg = "";

	// check email via regex method
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
		// bu "msg" başa gelir

		e.preventDefault();
	// form'daki action'nın gerçekleşmesi önlenir
	}
	else {
		msg = "Form is valid!\nSubmitting...";
	}

	alert(msg);

}