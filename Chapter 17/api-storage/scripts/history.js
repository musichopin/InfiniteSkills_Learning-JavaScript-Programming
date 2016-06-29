// window.history object
var msg = "<p>window.history.length: " + window.history.length + "</p>";
document.getElementById("output1").innerHTML = msg;

// update state
var state = 0, o = document.getElementById("output2");

// state button clicked
document.getElementById("updatestate").addEventListener("click", function(e) {

	e.preventDefault();
	state++;
	window.history.pushState({ "state": state }, "title", "?state=" + state);
	o.innerHTML = "<p>state " + state + " pushed</p>" + o.innerHTML;

});

// back/forward hit
window.addEventListener("popstate", function(e) {

	o.innerHTML =
		"<p>location: " + document.location +
		", state: " + JSON.stringify(e.state) + "</p>" +
		o.innerHTML;

});