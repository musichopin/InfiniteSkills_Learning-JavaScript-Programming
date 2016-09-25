// My JavaScript Library

// ***anonymous self-executing functions don’t have a name and run immediately.
// all variables or functions we create have a global scope so
// if we hadnt used self-executing anonymous function we would have overridden 
// the format function in anotherlibrary.js file.

// with self-executing anonymous function we were able to duplicate Format method.

// (as in module pattern) Format function could be accessed 
// from other file if object was created and Format method 
// were returned (with a reference) from within that object (?)***

// (thanks to the closure) what is inside Format function 
// is returned to anotherlibrary.js without creating object

// *with function() {...} we define our function
// following anonymous function with () we run our function immediately (main metod gibi)
// and whole thing wrapped into parenthesis bc otherwise js expects a 
// function name to be provided. we have to add parentheses around the function 
// to indicate that it is a function expression*

(function() {

	// format a number
	// Format fonksiyonu anotherlibrary.js'dekiyle aynı isimde olmasa 
	// self-executing anonymous fonksiyona ihtiyaç duyulmazdı
	function Format(num) {
		return Math.floor(num);
	}

	// output message
	ShowMessage("You are viewing a lesson in section " + Format(9.1));

}());