var v = [10,20,30,40,50];
// alt: initialization with loop
// var v = [];
// for (var i = 0; i < 5; i++) {
// 	v[i] = (i+1)*10;
// }

var items = v.length;
var total = 0;
for (var i = 0; i < items; i++) {
	total += v[i];
}

var mean = total / items;
alert(mean);