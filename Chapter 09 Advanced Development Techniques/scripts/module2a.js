// My JavaScript Module
var Lib = Lib || {};
// if Lib exists use it, otherwise create a new empty object.

Lib.Output = (function() {

	// write message
	function Write(msg, element, start, end, color) {
		// !although this code is flexible there are many arguments and not scalable
		
		msg = msg || []; // if nth passed default to empty array
		// msg.constructor is the internal name of the function used to create an object
		// if it is not an array we make an array with a single element of itself
		if (msg.constructor != Array) msg = [msg]; // tek elemanlı array oluşur
		element = element || "message"; // if nth passed default to message string 
		// determines whether we already have a node element defined. nodetype would exist
		// if we got a node. but if we haven't, if we got a string we locate the node within 
		// our document 
		if (!element.nodeType) element = document.getElementById(element);
		// if we got no element (id definded) or no message, return nothing, exit the function
		if (!element || msg.length == 0) return;
		
		// this normalizes the value since it must be btw 0 and length of our array minus 1
		start = Math.max(0, Math.min(start, msg.length-1)); // 3 metod da 0 olur
		// if end is defined (for passed array) we normalize it (much like we did it at the start) 
		// otherwise we set it to the length of our array minus 1 (pass edilen stringler 1-1=0 olur)
		end = (end ? Math.max(0, Math.min(end, msg.length-1)) : msg.length-1);
		color = color || "#000";
	
		element.innerHTML += '<p style="color:'+color+'">'+msg.slice(start,end+1).join(" ")+'</p>';
		// join(" "): replaces commas with spaces
	}

	return {
		Write: Write,
		$: Write
	};

}());