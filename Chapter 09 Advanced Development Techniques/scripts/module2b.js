// My JavaScript Module
var Lib = Lib || {};

Lib.Output = (function() {

	// write message
	function Write(opt) {
		
		if (opt.constructor != Object) opt = { msg: opt };
		// if object is not passed we create a new object literal
		// and set the msg property to our opt parameter
		
		// we set our default values within our object literal
		// this is passed to an extend function with our opt object literal
		// effectively any of default values can be overridden by a value within opt
		opt = Extend({
			element: "message",
			msg: [],
			start: 0,
			end: null,
			color: "#000"
		}, opt);
		
		// and now we can address each argument with opt.sth
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
		// loops through every property in the object we passed
		// and if it finds one it appends it to the default set
		// and then returns that set back to our function
	
		for (var prop in obj2) {
			if (obj2.hasOwnProperty(prop)) obj1[prop] = obj2[prop];
		}
		
		return obj1;

		// var car2 = car2 || {};
		// 
		// for (var prop in car) {
		// 	if (car.hasOwnProperty(prop)) {
		// 		car2[prop] = car[prop];
		// 	}
		// }
	}

	return {
		Write: Write,
		$: Write
	};

}());