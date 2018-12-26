// Cookie library
var Cookie = Cookie || (function() {
// alt:
// var Cookie = Cookie || {};
// Cookie.Output=(function() {

	// parse cookies
	var // creating below variables;
		cookieList = {},
		ac = document.cookie.split(";"), // splits into an array by semi-colons
		c, i;

		// go through the array and split each individual name-value pair 
		// into another array separated by equal sign
		// these values are then stored in js object named cookielist
	for (i = 0; i < ac.length; i++) {
		c = ac[i].split("=");
		if (c.length > 1) {
			cookieList[c[0].trim()] = unescape(c[1]); 
			// adds as property to the object with [] as an alternate to "." (?)
			// Objects written as name value pairs are similar to associative 
			// arrays in php and dictionaries in python
			// we use unescape to make sure characters are encoded correctly
		}
	}


	// set cookie
	// define and update the cookie
	function Set(name, value, expiry, path) {

		var cookieExpiry = cookiePath = "";

		if (expiry) {
			var date = new Date(); // defines the current date
			date.setTime(date.getTime() + expiry * 60000);
			cookieExpiry = "; expires=" + date.toGMTString(); // sets a string
		}

		if (path) {
			cookiePath = "; path=" + path;
		}

		// store/save cookie
		document.cookie = name + "=" + escape(value) + cookieExpiry + cookiePath;

		// update cookieList
		if (expiry && expiry < 0) { // if expiry exists and passed
			// delete cookie
			delete cookieList[name]; 
			// remove from our object using delete
		}
		else {
			// add cookie
			cookieList[name] = value;
			// we add or update the property in the cookielist object
		}

	}


	// delete a cookie
	function Delete(name) {
		Set(name, "", -1); // no need to specify path
		// cookie is set to immediate expiry
	}


	// get cookie
	// a cookie name is passed
	function Get(name) {
		return cookieList[name] || undefined;
		// returns undefined if a cookie with that name is not found
	}

	return {
		Set: Set,
		Delete: Delete,
		Get: Get
	};

}());