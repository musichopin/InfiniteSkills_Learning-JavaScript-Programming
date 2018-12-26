// Script insertion
var Lib = Lib || {};

Lib.Ajax = (function() {

	// hijack form
	function Hijack(form, callback) {
	
		var args = {};
		
		for (var i = 0; i < form.elements.length; i++) {
			var f = form.elements[i];
			if (f.name) args[f.name] = f.value;
		}
		
		if (callback) args.callback = callback;
		
		// make Ajax call
		Call(form.action, args);
	
	}

	// call web service
	function Call(url, args) {
	
		// create argument list
		args = args || {};
		var arglist = "";
		for (var n in args) {
			arglist += "&" + n + "=" + escape(args[n]);
		}
		
		// append args to URL
		if (arglist.length > 0) url += "?" + arglist.substr(1);
		
		// insert script into head
		var head = document.getElementsByTagName("head")[0];
		var script = document.createElement("script");
		script.src = url;
		// script.onload = callback
		head.appendChild(script);

	}

	return {
		Hijack: Hijack,
		Call: Call
	};

}());

// start
var
	speedform = document.getElementById("speedform"),
	output = document.getElementById("output"),
	td = output.getElementsByTagName("td");

// form submit - direct to Ajax call
speedform.addEventListener("submit", function(e) {
	e.preventDefault();
	Lib.Ajax.Hijack(speedform, "AjaxResponse");
});


// Ajax callback function
function AjaxResponse(r) {

	td[0].textContent = r.mph;
	td[1].textContent = r.kph;
	td[2].textContent = r.fps;
	td[3].textContent = r.mps;

}