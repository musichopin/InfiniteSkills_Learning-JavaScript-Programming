// My JavaScript Module
var Lib = Lib || {};

Lib.Output = (function() {

	// define output element
	var element = document.getElementById("message");
	var color = "#000";

	// write message
	function Write(msg) {
		element.innerHTML += FormatMessage(msg);
	}

	// set color
	function SetColor(col) {
		color = col;
	}

	// clear all messages
	function Clear() {
		element.innerHTML = "";
	}

	// format a number
	function FormatMessage(msg) {
		return '<p style="color:'+color+'">'+msg+'</p>';
	}

	return {
		Write: Write,
		$: Write,
		SetColor: SetColor,
		Clear: Clear
	};

}());