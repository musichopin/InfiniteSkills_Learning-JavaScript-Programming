// event propagation

// find table
var table = document.getElementById("multiplication");
var tcols = table.getElementsByTagName("col");

// delegate event handler
table.addEventListener( "mouseover", TableHandler );
table.addEventListener( "mouseout", TableHandler );

// event handler
function TableHandler(e) {

	var t = e.target;
	if (t.nodeName != "TD") return;
	
	// var cName = ( e.type == "mouseover" ? "active" : "");
	// t.parentNode.className = cName;
	// tcols[ t.cellIndex ].className = cName;

	t.parentNode.className = tcols[ t.cellIndex ].className =
	( e.type == "mouseover" ? "active" : "");
	
}