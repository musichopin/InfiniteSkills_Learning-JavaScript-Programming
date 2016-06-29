// location object

// show message
function ShowMessage(msg) {
	document.getElementById("message").innerHTML += "<p>"+msg+"</p>";
}

ShowMessage("window.location: "+window.location);

ShowMessage("window.location.protocol: "+window.location.protocol);
ShowMessage("window.location.hostname: "+window.location.hostname);
ShowMessage("window.location.port: "+window.location.port);
ShowMessage("window.location.pathname: "+window.location.pathname);
ShowMessage("window.location.search: "+window.location.search);
ShowMessage("window.location.hash: "+window.location.hash);

if (window.confirm("Open Google?")) {
	window.location = "http://www.google.com/";
}