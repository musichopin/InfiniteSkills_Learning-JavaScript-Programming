// Cookie library
var Cookie = Cookie || (function() {

	// parse cookies
	var
		cookieList = {},
		ac = document.cookie.split(";"),
		c, i;

	for (i = 0; i < ac.length; i++) {
		c = ac[i].split("=");
		if (c.length > 1) {
			cookieList[c[0].trim()] = unescape(c[1]);
		}
	}


	// set cookie
	function Set(name, value, expiry, path) {

		var cookieExpiry = cookiePath = "";

		if (expiry) {
			var date = new Date();
			date.setTime(date.getTime() + expiry * 60000);
			cookieExpiry = "; expires=" + date.toGMTString();
		}

		if (path) {
			cookiePath = "; path=" + path;
		}

		// store cookie
		document.cookie = name + "=" + escape(value) + cookieExpiry + cookiePath;

		// update cookieList
		if (expiry && expiry < 0) {
			// delete cookie
			delete cookieList[name];
		}
		else {
			// add cookie
			cookieList[name] = value;
		}

	}


	// delete a cookie
	function Delete(name) {
		Set(name, "", -1);
	}


	// get cookie
	function Get(name) {
		return cookieList[name] || undefined;
	}

	return {
		Set: Set,
		Delete: Delete,
		Get: Get
	};

}());