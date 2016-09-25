// My JavaScript Module
var Lib = Lib || {};

Lib.Array = (function() {

	// define output element
	var element = document.getElementById("message");

	// loop through an array
	function Recurse(a, action) {
	
		if (a.constructor == Array) {
			for (var i = 0; i < a.length; i++) {
				Recurse(a[i], action);
				// a[i], a olur
			}
		}
		else action(a);
		// a'ya ait sum ve counter değerleri hesaplanır
	}

	return {
		Recurse: Recurse
	};

}());