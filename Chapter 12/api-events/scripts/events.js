// events and handlers

// find first link on the page
var link = document.getElementsByTagName("a")[0];

// delegate event handler
link.addEventListener( "click", MyEventHandler );


// event handler
function MyEventHandler(e) {

	alert("ouch!");
	e.preventDefault();

}