// JavaScript Object Prototypes
var msg = document.getElementById("message");
var s = "reverse me";

// car constructor (constructor ismi ile class ismi aynı olur)
function car(make, model, color) {
	this.make = make || "unknown";
	this.model = model || "model";
	this.color = color || "unpainted";
	// or (||) işareti ile default value'lar atanır
}

// ***with prototypal inheritance we consume less resources bc we don't create a new 
// display method for every object we create 
// (our display method was same for every object while within constructor)***
// display method is now associated with all car objects
// (could be created after objects are created as well)
car.prototype.display = function() { // type car (constructor name = class name)
	msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+".</p>";
	// += olmasına dikkat
};

// create objects
var c1 = new car("Ford", "Mustang", "blue"); // type car, car object 
var c2 = new car("Ford", "GTO", "white");
var c3 = new car();

// run by 1st object, c1
c1.display = function() {
		msg.innerHTML += "<p>Your vehicle is a "+this.color+" "+this.make+" "+this.model+".</p>";
		// += olmasına dikkat
	}

// change properties and run methods
c2.color = "red";
// ***öncelik sırasına göre individual display method, constructor içinde display method ve 
// prototype display metod aranır***
c1.display(); 
c2.display();
c3.display();

var o = {}; // not type car
o.display();
// yukarıda "Object.prototype.display = function() {...}"
// denseydi "Your car is a undefined undefined undefined." 
// print edecekti (şu an print etmez)

/*
Prototypal Inheritance

Your vehicle is a blue Ford Mustang.

Your car is a red Ford GTO.

Your car is a unpainted unknown model.
*/


// String class ı tanımlandığı için yazmaya gerek yok
String.prototype.reverse = function() {
	return this.split("").reverse().join("");
};

var s = "reverse me";
// alt:
// var s = new String("reverse me");
// ayrıca,
// document.write(s.toString());
// ile
// document.write(s); aynı manaya gelir

alert(s + "\n" + s.reverse());
// reverse() is a generic method

// powerful but dangerous bc if we change the default method of a 
// native type it might make our code incompatable with other developers
// so most developers recommend we don't extend native objects with our own methods

// look for all properties in s, our string:
for (var c in s) {
	if (s.hasOwnProperty(c)) {
		// returns true if a property or a method directly belongs to string s
		// in other words that is not part of an object that is further up the prototype chain
		console.log(c);
	}
}
// normally would return 10 characters of the string (from 0 to 9) 
// and our reverse method, bc that had been assigned to our string as well.
// with condition of hasOwnProperty method, however, 
// it just returns the no of characters in the string



// alt:
function reverse(s) {
	return s.split("").reverse().join("");
};

var s = "reverse me";

alert(s + "\n" + reverse(s));
// reverse() is generic method