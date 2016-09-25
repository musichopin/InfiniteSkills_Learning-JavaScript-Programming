// bouncing ball using setTimeout built-in method
var
	body = document.getElementsByTagName("body")[0],
	ball = document.getElementById("ball");
var
	bx = ball.offsetLeft, by = ball.offsetTop, 
	bw = ball.offsetWidth, bh = ball.offsetHeight,
	dx = 5, dy = 5, active = true;
// variables are set up to control the ball


// this function moves the ball
// (daire şekli css ile veriliyor)
function AnimateBall() {
	// *topun (bx ve by ile) şimdiki konumuna göre 
	// x ve y düzleminde mesafesi/hızı (dx ve dy ile) belirlenir*
	bx += dx; 
	by += dy; 
	ball.style.left = bx + "px";
	ball.style.top = by + "px";
	
	// detects whether the ball reaches the screen edge 
	// and reverses the direction accordingly
	if (bx + dx < 0 || bx + bw + dx > body.offsetWidth) dx = -dx;
	if (by + dy < 0 || by + bh + dy > body.offsetHeight) dy = -dy;
	// bw ve bh ile ball width ve height alınıyor
	
	// js provides 2 timers for window object, setTimeout and setInterval
	//  call AnimateBall after 10 ms
	if (active) setTimeout(AnimateBall, 10); 
	// *topu hareket ediyormuş gibi algılarız ama sadece 10ms'de 1 konumu değişiyordur*
	// AnimateBall function is called using the setTimeout method.
	// this method takes 2 args: function name and no of miliseconds.
	// setTimeout only happens once
}

// start animation after 1 second
var st = setTimeout(AnimateBall, 1000);
	// *1sn sonra AnimateBall execute edilir ve 
	// en alttaki handler sayesinde de durdurma imkanımız olur*

// stop ball on click
ball.addEventListener( "click", function() { clearTimeout(st); active = false; } );
// we can cancel the ball moving within 1 sec with clearTimeout(st) method