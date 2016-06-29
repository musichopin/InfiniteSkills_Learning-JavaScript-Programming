// web worker
self.onmessage = function(e) {

	var r = e.data;
	while (r-- > 0);

	self.postMessage("Finished counting from " + e.data);
	
};