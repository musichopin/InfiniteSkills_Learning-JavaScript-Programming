// window.history object
var msg = "<p>window.history.length: " + window.history.length + "</p>";
// window.history.length indicates how many pages in our history
document.getElementById("output1").innerHTML = msg;

// update state
var state = 0, o = document.getElementById("output2");

// state button clicked
document.getElementById("updatestate").addEventListener("click", function(e) {

	e.preventDefault(); // the link doesnt go anywhere with preventing default
	state++;
	window.history.pushState({ "state": state }, "title", "?state=" + state);
	// pushState is critical because
	// it allows us to define when an action has occured which 
	// should affect the history of the back button (related to ajax).
	// at no stage we jump into another page
	o.innerHTML = "<p>state " + state + " pushed</p>" + o.innerHTML;

});

// back/forward hit (?)
window.addEventListener("popstate", function(e) {

	o.innerHTML =
		// state is the last state before link was clicked and we got a new state
		"<p>location: " + document.location +
		", state: " + JSON.stringify(e.state) + "</p>" + 
		//  e.state returned object is same as "state": state 
		o.innerHTML;

});