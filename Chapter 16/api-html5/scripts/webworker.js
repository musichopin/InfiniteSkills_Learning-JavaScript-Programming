// web worker
// web workers are event driven, 
// so when the script loads it waits for a message using the onmessage event
self.onmessage = function(e) {
// when the message is received from the calling page it can extract
// data for a property passed in the event object
	var r = e.data;
	while (r-- > 0);

	self.postMessage("Finished counting from " + e.data);
	// once its completed it posts a message back to the 
	// calling script using the post message method 
};