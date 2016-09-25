// JavaScript sorting
var msg = document.getElementById("message");

var v = [30,2,1,9,15];
// 0
msg.innerHTML += "<p><strong>Original order:</strong> [" + v + "]<p>";
// array elemanlarını print etmek için başa ve sona "+" eklenmesine dikkat

// 1
v.sort();
msg.innerHTML += "<p><strong>After sorting:</strong> [" + v + "]<p>";
// when we run the sort() without argument it converts every element in our array to a string

// 2
// SortLowToHigh() denmemesine dikkat
v.sort(SortLowToHigh);
msg.innerHTML += "<p><strong>Low to High sorting:</strong> [" + v + "]<p>"; 

// that number should be greater than 0 if a is greater than b
// and should be less than 0 if a is less than b
// and should be equal to 0 if a is equals to be
function SortLowToHigh(a,b){
	return a-b;
}

// alt: anonymous function (fonksiyon 1 kere kullanılcağı için pratiklik sağladı)
v.sort(function(a,b) {return a-b;});
msg.innerHTML += "<p><strong>Low to High sorting:</strong> [" + v + "]<p>";

// 3
v.sort(function(a,b) {return b-a;});
msg.innerHTML += "<p><strong>High to Low sorting:</strong> [" + v + "]<p>";