// set-up variables
var cakes = 10;
var children = 3;
var msg;

// cake calculation
var cakesEach = Math.floor(cakes / children);
var leftOver = cakes % children;
msg = "Each child receives " + cakesEach + " cakes, with " + leftOver + " left over";

var p = document.getElementById("message");
p.textContent = msg;