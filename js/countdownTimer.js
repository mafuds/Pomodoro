// link: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
// http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_setinterval_clearinterval !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Get the target time
var finishTime = new Date();
finishTime.setMinutes(finishTime.getMinutes() + 25);

// Update the count down every 1 second
var x = setInterval(function() 
{
	// Get the current time
	var now = new Date().getTime();

	// Calculate the time difference
	var distance = finishTime - now;

	// Display the result in the element with id="countdownTimer"
  	document.getElementById("countdownTimer").innerHTML = distance;

  	// If the count down is over, write some text 
    if (distance < 0) 
    {
        clearInterval(x);
        document.getElementById("countdownTimer").innerHTML = "Fim!";
    }
}, 1000);