// events and handlers

// find first link on the page
var link = document.getElementsByTagName("a")[0];

// method 1: modern style
// delegate event handler
link.addEventListener( "click", MyEventHandler );
// ***element is link, addEventListener is binder, 
// event is click, event handler function is MyEventHandler***

// event handler
function MyEventHandler(e) {
	// e object contains properties about events and methods that we can run

	alert("ouch!");
	e.preventDefault();
	// with this method the page doesn't redirect anymore

	console.log(e);
	// returned, "click clientX=320, clientY=203" (depending on the mouse location)

	console.log(e.currentTarget);
	// returned, "<a href="https://developer.mozilla.org/DOM_Client_Object_Cross-Reference/DOM_Events">"
	// current target is the element which has the event applied
	// returns a node which matches the link node
	// could be used to identify which link has been clicked to react accordingly

	console.log(e.target);
	// target is the element which the event is currently being applied to
	// normally different (rel. to event propogation) but same with currentTarget 
	// in this example
	// returned, "<a href="https://developer.mozilla.org/DOM_Client_Object_Cross-Reference/DOM_Events">"

}


// // method 2: ***MyEventHandler is just a pointer to the function,
// // which gets activated when the link is clicked.
// // we don't add paranthesis because it would execute the function right away
// // and onclick handler wouldn't be applied.
// // this method has a downside, that we can only apply 1 event handler to same element
// link.onclick = MyEventHandler;
// // runs the event handler when the link is clicked

// function MyEventHandler() {
// 	alert("ouch!");
// 	return false();
// 	// by returning false the page doesn't redirect anymore
// }