// My JavaScript Library

(function() {

	// format a number
	function Format(num) {
		return Math.floor(num);
	}

	// output message
	ShowMessage("You are viewing a lesson in section " + Format(9.1));

}());