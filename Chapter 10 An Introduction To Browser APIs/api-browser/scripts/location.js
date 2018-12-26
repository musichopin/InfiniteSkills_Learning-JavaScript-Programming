// location object

// show message
function ShowMessage(msg) {
	document.getElementById("message").innerHTML += "<p>"+msg+"</p>";
}

ShowMessage("window.location: "+window.location);
// location property is the child property of global window object 

ShowMessage("window.location.protocol: "+window.location.protocol); // "http"
ShowMessage("window.location.hostname: "+window.location.hostname); 
// domain, "test"
ShowMessage("window.location.port: "+window.location.port); // number
// directory and name of the file being run, "/javascript/location.html" 
ShowMessage("window.location.pathname: "+window.location.pathname);
// part of the get query string, "?a=1&b=2"
ShowMessage("window.location.search: "+window.location.search);
// location of the document where we should be jumping, "#top"
ShowMessage("window.location.hash: "+window.location.hash);

if (window.confirm("Open Google?")) {
	window.location = "http://www.google.com/";
}