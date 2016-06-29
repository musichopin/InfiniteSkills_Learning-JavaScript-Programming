var v = [10,20,30,40,50,10,5,20,0,100,100,2,20,50];

var items = v.length;
var total = 0;
for (var i = 0; i < items; i++) {
	total += v[i];
}

var mean = total / items;
alert(mean);