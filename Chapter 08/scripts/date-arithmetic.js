// JavaScript Date Arithmetic
var msg = document.getElementById("message");

var dateNow = new Date();
var date2020 = new Date(2020,0,1);

var days2020 = Math.round((date2020 - dateNow) / 1000 / 60 / 60 / 24);
var date7days = new Date(dateNow.getFullYear(), dateNow.
	getMonth(), dateNow.getDate() + 7).toLocaleString().slice(0,-9);
dateNow.setFullYear(2012);
// 32nd of december is converted to 1st of jan by js,
// we take advantage of this.
// we get rid of time with slice()
// we change the format with toLocaleString()


msg.innerHTML += "<p>Days remaining to 2020: "+ days2020 +"</p>";
msg.innerHTML += "<p>Date in 7 days: "+ date7days +"</p>";
msg.innerHTML += "<p>If we set the year of current date: "+ dateNow +"</p>";

/*
Date Arithmetic

Days remaining to 2020: 1231

Date in 7 days: 24.08.2016

If we set the year of current date: Fri Aug 17 2012 21:59:45 GMT+0300 (Turkey Standard Time)
*/