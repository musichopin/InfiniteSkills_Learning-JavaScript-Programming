// Shim which implements JSON.stringify and JSON.parse
var JSON = JSON || (function() {

	// JSON.stringify
	function stringify(obj) {
	
		var t = typeof(obj);
		if (t != "object" || obj === null) {

			// simple data type
			if (t == "string") obj = '"'+obj+'"';
			return String(obj);

		}
		else {

			// recurse array or object
			var n, v, json = [], arr = (obj && obj.constructor == Array);

			for (n in obj) {
				v = obj[n]; t = typeof(v);

				if (t == "string") v = '"'+v+'"';
				else if (t == "object" && v !== null) v = stringify(v);

				json.push((arr ? "" : '"' + n + '":') + String(v));
			}

			return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
		}

	}

	
	// JSON.parse
	function parse(str) {
		if (str === "") str = '""';
		eval("p=" + str + ";");
		return p;
	}

	
	return {
		stringify: stringify,
		parse: parse
	};

}());