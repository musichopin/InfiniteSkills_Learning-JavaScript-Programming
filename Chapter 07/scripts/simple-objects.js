// Simple JavaScript Objects
var msg = document.getElementById("message");

// create a new empty object and add properties or methods
var mycar = mycar || {};

mycar.make = "Ford";		// alternate syntax is mycar["make"] = "Ford";
mycar.model = "Mustang";
mycar.color = "Blue";
mycar.display = function() {
	msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+"</p>";
};

// or use object literal notation
var car = car || {
	make: "Ford",
	model: "Mustang",
	color: "blue",
	display: function() {
		msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+".</p>";
	}
};

// clone to car2
var car2 = car2 || {};

for (var prop in car) {
	if (car.hasOwnProperty(prop)) {
		car2[prop] = car[prop];
	}
}

// change car2 properties
car2.color = "pink";
car2.model = "GTO";

// display car and car2
car.display();
car2.display();