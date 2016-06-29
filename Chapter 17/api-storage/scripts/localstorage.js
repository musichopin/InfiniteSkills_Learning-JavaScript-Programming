// session storage
var ss = window.sessionStorage;	// temporary session storage
var ls = window.localStorage;		// permanent storage

/*
Both support the following properties and methods:
	setItem(name, value)	- add or update a value in the store
	getItem(name)			- get a named value from the store
	removeItem(name)		- remove a named value from the store
	length					- number of values stored
	key(index)				- name of the key at the index
	clear()					- clear the store
*/

ss.setItem("a", 100);
ss.setItem("b", 200);
ss.setItem("c", 300);

ls.setItem("x", 1000);
ls.setItem("y", 2000);
ls.setItem("z", 3000);

ss.removeItem("b");

ls.clear();

// show sessionStorage values
var k, msg = "<h2>sessionStorage (" + ss.length + " items)</h2>";
for (k in ss) {
	msg += "<p>" + k + " = " + ss.getItem(k) + "<p>";
}

// show localStorage values
msg += "<h2>localStorage (" + ls.length + " items)</h2>";
for (k in ls) {
	msg += "<p>" + k + " = " + ls.getItem(k) + "<p>";
}

// output all values
document.getElementById("output").innerHTML = msg;