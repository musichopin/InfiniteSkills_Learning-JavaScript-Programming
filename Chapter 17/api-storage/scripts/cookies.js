// cookies

// method 1: badly handled cookies
/*
// native cookie handling in JavaScript
document.cookie = "a=100; expires=Wed, 01 Jan 2020 00:00:00 GMT; path=/js/";
document.cookie = "b=200; expires=Wed, 01 Jan 2020 00:00:00 GMT; path=/js/";
document.cookie = "c=300; expires=Wed, 01 Jan 2020 00:00:00 GMT; path=/js/";
// normally we don't need to set a path

// show cookies
document.getElementById("output").textContent = document.cookie;
*/

// using cookielib.js
Cookie.Set("a", 101, 10); // method takes name, value and remaining expiry time
Cookie.Set("b", 202, 20);
Cookie.Set("c", 303, 30);
// *it doesnt have to be output in the order we stored them*
// *even if we comment out they still remain on page 
// (unless we explicity delete them as below)*

Cookie.Delete("b");

document.getElementById("output").innerHTML =
	"<p>cookie a = " + Cookie.Get("a") + "</p>" +
	"<p>cookie b = " + Cookie.Get("b") + "</p>" +
	"<p>cookie c = " + Cookie.Get("c") + "</p>";