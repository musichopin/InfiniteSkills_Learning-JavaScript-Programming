// JavaScript Object Constructors
var msg = document.getElementById("message");

// car constructor: constructor is a function that initializes an object
// constructor name = class name
function car(make, model, color) {
	this.make = make || "unknown"; // this kw is necessary
	this.model = model || "model";
	this.color = color || "unpainted";
	// or (||) işareti ile default value'lar atanır
	this.display = function() {
		msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+".</p>";
		// += olmasına dikkat
	}
}

// create objects
// type car, car object
var c1 = new car("Ford", "Mustang", "blue");
var c2 = new car("Ford", "GTO", "white");
var c3 = new car();

// change properties and run methods
c2.color = "red";
c1.display();
c2.display();
c3.display();

/*
Object Constructors

Your car is a blue Ford Mustang.

Your car is a red Ford GTO.

Your car is a unpainted unknown model.
*/