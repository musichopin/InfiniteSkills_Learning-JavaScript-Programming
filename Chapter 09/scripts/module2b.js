// My JavaScript Module
var Lib = Lib || {};

Lib.Output = (function() {

	// write message
	function Write(opt) {
		
		if (opt.constructor != Object) opt = { msg: opt };
		
		opt = Extend({
			element: "message",
			msg: [],
			start: 0,
			end: null,
			color: "#000"
		}, opt);
		
		if (opt.msg.constructor != Array) opt.msg = [opt.msg];
		opt.element = opt.element || "message";
		if (!opt.element.nodeType) opt.element = document.getElementById(opt.element);
		if (!opt.element || opt.msg.length == 0) return;
		
		opt.start = Math.max(0, Math.min(opt.start, opt.msg.length));
		opt.end = (opt.end ? Math.max(0, Math.min(opt.end, opt.msg.length)) : opt.msg.length);
	
		opt.element.innerHTML += '<p style="color:'+opt.color+'">'+opt.msg.slice(opt.start,opt.end+1).join(" ")+'</p>';
	}
	
	// extend default parameters
	function Extend(obj1, obj2) {
	
		for (var prop in obj2) {
			if (obj2.hasOwnProperty(prop)) obj1[prop] = obj2[prop];
		}
		
		return obj1;
	}

	return {
		Write: Write,
		$: Write
	};

}());