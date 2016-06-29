// My JavaScript Module
var Lib = Lib || {};

Lib.Output = (function() {

	// write message
	function Write(msg, element, start, end, color) {
		
		msg = msg || [];
		if (msg.constructor != Array) msg = [msg];
		element = element || "message";
		if (!element.nodeType) element = document.getElementById(element);
		if (!element || msg.length == 0) return;
		
		start = Math.max(0, Math.min(start, msg.length-1));
		end = (end ? Math.max(0, Math.min(end, msg.length-1)) : msg.length-1);
		color = color || "#000";
	
		element.innerHTML += '<p style="color:'+color+'">'+msg.slice(start,end+1).join(" ")+'</p>';
	}

	return {
		Write: Write,
		$: Write
	};

}());