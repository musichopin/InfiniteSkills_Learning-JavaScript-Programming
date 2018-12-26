// window object

// show message
function ShowMessage(msg) {
	document.getElementById("message").innerHTML += "<p>"+msg+"</p>";
	// alt: window.document.getElementById("message").innerHTML += "<p>"+msg+"</p>";
}

ShowMessage("window.name: "+window.name); // lower case
ShowMessage("window.innerWidth: "+window.innerWidth);
ShowMessage("window.innerHeight: "+window.innerHeight);
ShowMessage("window.outerWidth: "+window.outerWidth);
ShowMessage("window.outerHeight: "+window.outerHeight);
ShowMessage("window.screenX: "+window.screenX);
ShowMessage("window.screenY: "+window.screenY); // yukarıdak aşağı

window.scrollTo(0, 100); // moves the scroll accordingly, moves down 100 px
ShowMessage("window.pageXOffset: "+window.pageXOffset);
ShowMessage("window.pageYOffset: "+window.pageYOffset); // gives y distance of the bar

var n = window.prompt("What is your name?");
ShowMessage("Hello "+n);

// print dialog
window.print();

// open a new window
var win = window.open("", "newwin", "width=300,height=300,menubar=0,toolbar=0,resizable=0,screenX=2000,screenY=200");
// params: adress, optional window name, size, menubar etc

win.document.body.innerHTML = "<p>Hello World!</p>";


// replaced alert function
function alert (msg) {
	ShowMessage("Message: " + msg);
}

var x = "Hello World";
window.alert(window.x);