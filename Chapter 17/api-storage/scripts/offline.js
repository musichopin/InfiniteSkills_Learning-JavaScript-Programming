// offline HTML5 applications
var online;
window.addEventListener("online", CheckOnlineStatus);
window.addEventListener("offline", CheckOnlineStatus);
CheckOnlineStatus();

// check online status
function CheckOnlineStatus() {

	online = navigator.onLine;

	var s = document.getElementById("status");
	if (online) {
		s.textContent = "ONLINE";
		s.className = "";
	}
	else {
		s.textContent = "OFFLINE";
		s.className = "offline";
	}

}


// example save data function
function Save() {

	if (online) {
		// ... form submit, Ajax call etc.
	}
	else {
		// ... window.localStorage
	}

}