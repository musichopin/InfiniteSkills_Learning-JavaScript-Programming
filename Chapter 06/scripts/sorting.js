// JavaScript sorting
var msg = document.getElementById("message");

var v = [30,2,1,9,15];
msg.innerHTML += "<p><strong>Original order:</strong> [" + v + "]<p>";

v.sort();
msg.innerHTML += "<p><strong>After sorting:</strong> [" + v + "]<p>";


v.sort(function(a,b) {return a-b;});
msg.innerHTML += "<p><strong>Low to High sorting:</strong> [" + v + "]<p>";

v.sort(function(a,b) {return b-a;});
msg.innerHTML += "<p><strong>High to Low sorting:</strong> [" + v + "]<p>";
