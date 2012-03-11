var hourHands = document.getElementsByClassName("clock-hours");
var minuteHands = document.getElementsByClassName("clock-minutes");
var secondHands = document.getElementsByClassName("clock-seconds");
var timeOutput = document.getElementsByClassName("clock-time")
var time;

function updateClock() {
	// Store current time
	time = moment();
	
	// Get hour and minute values
	var hours = time.format("h")-1;
	var minutes = time.format("m");
	var seconds = time.format("s");

	// Calculate angles
	var hourAngle = (360/12)*hours;
	var minuteAngle = (360/60)*minutes;
	var secondAngle = (360/60)*seconds;

	// Update clock DOM
	// TODO: Run through all clocks, not just first one
	hourHands[0].style.MozTransform = "rotate("+hourAngle+"deg)";
	minuteHands[0].style.MozTransform = "rotate("+minuteAngle+"deg)";
	secondHands[0].style.MozTransform = "rotate("+secondAngle+"deg)";

	var timeString = hours+":"+("0"+minutes).substr(-2);
	if (timeOutput[0].innerHTML != timeString) {
		timeOutput[0].innerHTML = timeString;
	}

	setTimeout(updateClock, 900);
}

updateClock();