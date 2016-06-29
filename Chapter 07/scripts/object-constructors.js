// JavaScript Object Constructors
var msg = document.getElementById("message");

// car constructor
function car(make, model, color) {
	this.make = make || "unknown";
	this.model = model || "model";
	this.color = color || "unpainted";
	this.display = function() {
		msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+".</p>";
	}
}

// create objects
var c1 = new car("Ford", "Mustang", "blue");
var c2 = new car("Ford", "GTO", "white");
var c3 = new car();

// change properties and run methods
c2.color = "red";
c1.display();
c2.display();
c3.display();