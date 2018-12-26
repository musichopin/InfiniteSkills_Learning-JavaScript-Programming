// Simple JavaScript Objects
var msg = document.getElementById("message");

// create a new empty object and add properties or methods
// 1 (more common)
var mycar = mycar || {};
// if mycar var exists use it or create a new object (for security)
// (we cud have said var mycar = {};)

mycar.make = "Ford";		// alternate syntax is mycar["make"] = "Ford";
mycar.model = "Mustang";
mycar.color = "Blue";
mycar.display = function() {
	msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+"</p>";
	// += olmasına dikkat
};


mycar.display();


// 2: or use object literal notation
// each property and method are separated by comma
// and the property name and its value are separated by colon
var car = car || { // create object and assign values
	make: "Ford",
	model: "Mustang",
	color: "blue",
	display: function() {
		msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+".</p>";
		// += yerine = dense innerHTML'i override edecekti
	}
};




// this doesnt work in creating a new object bc car2 and car points to same object (like java)
// 1
// var car2 = car;

// car2.color = "pink";

// car.display;



// clone to car2
// 2: cloning
var car2 = car2 || {};

// for every property or method in car create a variable named prop
for (var prop in car) {
	if (car.hasOwnProperty(prop)) {
		car2[prop] = car[prop];
	}
}

// change car2 properties
car2.color = "pink"; 
// alt: 
// car2["color"] = "pink";
// alt2: 
// var myprop = "color";
// car2[myprop] = "pink";
car2.model = "GTO";

// display car and car2
car.display();
// alt:
// car["display"]();
car2.display();

/*
Simple Objects and Literals

Your car is a Blue Ford Mustang

Your car is a blue Ford Mustang.

Your car is a pink Ford GTO.
*/