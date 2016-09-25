// XMLHttpRequest
// MODULE PATTERN
var Lib = Lib || {};

Lib.Ajax = (function() {

	// hijack form
	// hijacking is a technique which intercepts a standard
	// html form submit and transforms it into an ajax request
	function Hijack(form, callback) {
	
		var args = {};
		
		for (var i = 0; i < form.elements.length; i++) {
			var f = form.elements[i];
			if (f.name) args[f.name] = f.value;
		}

		// make Ajax call
		Call(form.action, args, form.method, callback);
	
	}

	// call ajax web service (does the hard work)
	// not expects all parameters
	function Call(url, args, type, callback) {

		// check type (GET or POST)
		type = (type || "GET").toUpperCase();
	
		// create argument list
		// if nth provided create empty object
		args = args || {};
		// arglist will be provided to the web service
		var arglist = "";
		for (var n in args) {
			arglist += "&" + n + "=" + escape(args[n]); // name and value pairs
		}
		if (arglist.length > 0) arglist = arglist.substr(1);
		// this chunk of code goes through each argument in our args object and 
		// creates a string which we can append to URL
		
		// append args to GET URL
		if (type == "GET") {
			url += "?" + arglist;
			arglist = null;
		}
		
		// XMLHttpRequest object
		// this is where we actually start web service call and is 
		// handled using XMLHttpRequest object
		var xhr = new XMLHttpRequest();
		xhr.open(type, url, true);
		// true indicates we make asynchronous call, which means our 
		// code doesn't wait for a response. it can do other work but 
		// as soon as the response returns it can jump in and react accordingly
		
		// callback function
		if (callback) {
			xhr.onreadystatechange = function() {
				// if both matches we know we got some new data
				if (xhr.readyState == 4 && xhr.status == 200) {
					callback(xhr.responseText);
					// xhr.responseText is data as a string
				}
			};
		}
		
		// open request
		// we set couple of http header values
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		xhr.send(arglist); // calls the web service

	}

	return {
		Hijack: Hijack,
		Call: Call
	};

}());

// start
var
	speedform = document.getElementById("speedform"),
	output = document.getElementById("output");

// form submit - direct to Ajax call
speedform.addEventListener("submit", function(e) {
	e.preventDefault();
	Lib.Ajax.Hijack(speedform, function(r) {
		// r is data returned from a web service
		output.innerHTML = r;
		
	});
});
