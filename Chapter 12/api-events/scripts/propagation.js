// event propagation

// find table
var table = document.getElementById("multiplication");
var tcols = table.getElementsByTagName("col");
// tcols is a collection of col elements in our table 

// delegate event handler
table.addEventListener( "mouseover", TableHandler );
table.addEventListener( "mouseout", TableHandler );

// event handler
function TableHandler(e) {

	var t = e.target; // identifies target node (element (cell) which fires the event)
	
	// we only care if user is hovering over a td element cell
	if (t.nodeName != "TD") return;
	// returns the function and stops execution of it
	
	// // METHOD 1:
	// // determines the class name we wanna apply to our row and col 
	// // if type of event is mouseover or not:
	// var cName = ( e.type == "mouseover" ? "active" : "");
	// // style the current node:
	// t.parentNode.className = cName; // for row
	// // since column is not parent node of t, we give it a class in a different way:
	// tcols[ t.cellIndex ].className = cName; // for col
	// // cell index returns the col number and we use this no to reference 
	// // one of the elements in tcols collection and apply class name

	// // Method 2: shorter way
	t.parentNode.className = tcols[ t.cellIndex ].className =
	( e.type == "mouseover" ? "active" : "");
	
	// ***SUMMARY:
	// as we move the cursor onto a cell, the mouseover event (1) is firing
	// because it is mouse over we apply a class of active (2) to the current 
	// column and current row (css is applied based on the class then(3)).
	// when we are moving to another cell mouse out event is applied first, which
	// removes the current class name and assigns a new class name of active
	// for the next row and column through a new mouse over event
	// we only needed to apply a couple of handlers for single element
	// rather than event for every single child (cell)***
}