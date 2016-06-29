// My JavaScript Module
var Lib = Lib || {};

Lib.Array = (function() {

	// define output element
	var element = document.getElementById("message");

	// loop through an array
	function Recurse(a) {
	
		if (a.constructor == Array) {
			for (var i = 0; i < a.length; i++) {
				Recurse(a[i]);
			}
		}
		else element.innerHTML += a + "<br />";
	
	}

	return {
		Recurse: Recurse
	};

}());