// bouncing ball using setInterval built-in method
var
	body = document.getElementsByTagName("body")[0],
	ball = document.getElementById("ball");
var
	bx = ball.offsetLeft, by = ball.offsetTop, 
	bw = ball.offsetWidth, bh = ball.offsetHeight,
	dx = 5, dy = 5, active = true;


// move ball	
function AnimateBall() {

	bx += dx;
	by += dy;
	ball.style.left = bx + "px";
	ball.style.top = by + "px";
	
	if (bx + dx < 0 || bx + bw + dx > body.offsetWidth) dx = -dx;
	if (by + dy < 0 || by + bh + dy > body.offsetHeight) dy = -dy;

	// there is no timeout function within animateball function this time
	
}

// start animation
var st = setInterval(AnimateBall, 10);
// *unlike settimeout function setInterval method continuously 
// executes animateball function every 10 ms*

// stop ball on click within every 10 ms of moving
ball.addEventListener( "click", function() { clearInterval(st); } );