// bouncing ball using setTimeout
var
	body = document.getElementsByTagName("body")[0],
	ball = document.getElementById("ball");
var
	bx = ball.offsetLeft, by = ball.offsetTop, 
	bw = ball.offsetWidth, bh = ball.offsetHeight,
	dx = 5, dy = 5;


// requestAnimationFrame shim
if (!window.requestAnimationFrame) window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

	
// move ball	
function AnimateBall() {

	window.requestAnimationFrame(AnimateBall);

	bx += dx;
	by += dy;
	ball.style.left = bx + "px";
	ball.style.top = by + "px";
	
	if (bx + dx < 0 || bx + bw + dx > body.offsetWidth) dx = -dx;
	if (by + dy < 0 || by + bh + dy > body.offsetHeight) dy = -dy;
	
}

// start animation
AnimateBall();