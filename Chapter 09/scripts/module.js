// My JavaScript Module
var Lib = Lib || {}; // *alt: using variable: var Lib = (function() {*
// if Lib exists use it, otherwise create a new empty object.
// single global object named Lib.
// however Lib is not a great name choice since not being specific

// module is a collection of functions and variables
// normally these functions would be related in some way to define
// a particular role. we could have a module to handle screen output
// or a module that handles mouse input event or a module that formats date

// below is the revealing module pattern
// all module patterns have the same goal. they define variables and
// methods such a way that only one global variable is defined 
// (with self-executing anonymous functions).
// so other developers will less likely override it
Lib.Output = (function() {
	// new property of Lib called Output and it is assigned a 
	// self-executing function. this function runs as soon as the
	// code is encountered

	// define output element
	var element = document.getElementById("message");
	var color = "#000";

	// write message
	function Write(msg) {
		element.innerHTML += FormatMessage(msg);
		// html element i set eder (bir anlamda print)
	}

	// set color
	function SetColor(col) {
		color = col;
	}

	// clear all messages
	function Clear() {
		element.innerHTML = "";
		// html element i set eder (bir anlamda print)
	}

	// format a number
	function FormatMessage(msg) {
		return '<p style="color:'+color+'">'+msg+'</p>';
		// alt: return '<p style="color: red">'+msg+'</p>';
		// alt: return '<p>'+msg+'</p>';
	}
	// formatmessage would not be available outside of the function

	// return an object which points to the functions that we want 
	// available from outside of the code 
	// ***return statement ile sadece ulaşılabilirlik sağlanır ve 
	// istediğimiz global isimler verilebilir***
	return {
		Write: Write, // we cud have written "Display: Write"
		$: Write, // 2nd allies (?) name points to the same function
		SetColor: SetColor,
		Clear: Clear
		// functions are referenced here
	};
	// we define a module which has 3 functions which can be accessed
	// but they are all attached to a single global variable named Lib

}());