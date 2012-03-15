var clocks = document.getElementsByClassName("clock");
var hourHands = document.getElementsByClassName("clock-hours");
var minuteHands = document.getElementsByClassName("clock-minutes");
var secondHands = document.getElementsByClassName("clock-seconds");
var timeOutput = document.getElementsByClassName("clock-time")
var time;

function initClock() {
	// Set up listeners
	for (var i = 0; i < clocks.length; i++) {
		var clock = clocks[i];
		clock.addEventListener("click", onClick, true);
	}

	updateClock();
}

function updateClock() {
	// Store current time
	time = moment();
	
	// Get hour and minute values
	var hours = time.format("h");
	var minutes = time.format("m");
	var seconds = time.format("s");

	// Calculate angles
	var hourAngle = (360/12)*hours;
	var minuteAngle = (360/60)*minutes;
	var secondAngle = (360/60)*seconds;

	// Update clock DOM
	// TODO: Run through all clocks, not just first one
	hourHands[0].style.MozTransform = "rotate("+hourAngle+"deg)";
	hourHands[0].style.WebkitTransform = "rotate("+hourAngle+"deg)";
	hourHands[0].style.OTransform = "rotate("+hourAngle+"deg)";
	hourHands[0].style.MsTransform = "rotate("+hourAngle+"deg)";
	hourHands[0].style.transform = "rotate("+hourAngle+"deg)";

	minuteHands[0].style.MozTransform = "rotate("+minuteAngle+"deg)";
	minuteHands[0].style.WebkitTransform = "rotate("+minuteAngle+"deg)";
	minuteHands[0].style.OTransform = "rotate("+minuteAngle+"deg)";
	minuteHands[0].style.MsTransform = "rotate("+minuteAngle+"deg)";
	minuteHands[0].style.transform = "rotate("+minuteAngle+"deg)";

	secondHands[0].style.MozTransform = "rotate("+secondAngle+"deg)";
	secondHands[0].style.WebkitTransform = "rotate("+secondAngle+"deg)";
	secondHands[0].style.OTransform = "rotate("+secondAngle+"deg)";
	secondHands[0].style.MsTransform = "rotate("+secondAngle+"deg)";
	secondHands[0].style.transform = "rotate("+secondAngle+"deg)";

	var timeString = time.format("hh")+":"+time.format("mm")+"<small>"+time.format("a")+"</small>";
	if (timeOutput[0].innerHTML != timeString) {
		timeOutput[0].innerHTML = timeString;
	}

	// Set theme depending on time of day
	if (time.format("H") > 19 || time.format("H") < 7) {
		for (var i = 0; i < clocks.length; i++) {
			var clock = clocks[i];
			clock.classList.add("night");
			clock.classList.remove("day");

			document.body.classList.add("night");
			document.body.classList.remove("day");
		}
	} else {
		for (var i = 0; i < clocks.length; i++) {
			var clock = clocks[i];
			clock.classList.add("day");
			clock.classList.remove("night");

			document.body.classList.add("day");
			document.body.classList.remove("night");
		}
	}

	setTimeout(updateClock, 900);
}

function onClick(e) {
	e.preventDefault();
	e.stopPropagation();

	this.classList.toggle("active");
}

initClock();