// Another JavaScript Library

// show message
function ShowMessage(msg) {
	document.getElementById("message").innerHTML += Format(msg);
}

// format message
function Format(msg) {
	return "<p>"+msg+"</p>";
}