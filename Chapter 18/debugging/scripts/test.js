// show all flags
function ShowFlags() {

	var pole = document.getElementById("pole"), newImg, i;
	for (i = 0; i < fl; i++) {

		newImg = CreateImage(flags[i]);
		pole.appendChild(newImg);

	}

}

// create flag image
function CreateImage(name) {

	var img = document.createElement("img");
	img.src = "images/" + name + ".png";
	img.title = name.substr(0,1).toUpperCase() + name.substr(1).toLowerCase();
	return img;

}

// start of application
var flags = [ "australia","canada","germany","italy","spain","uk","usa","china","france","russia" ];

// check flags
// can use console.log, console.debug, console.info, console.warn, console.error
var fl = flags.length;
if (fl != 10) {
	if (fl == 0) {
		console.error("No flags defined.");
	}
	else {
		console.warn(fl + " flags defined - expected 10?");
	}
}

// sort flags
flags.sort();
console.log(flags);

// output flags
ShowFlags();