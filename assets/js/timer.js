// DECLARE VARIABLES //
var durationInMilliseconds = 10000;

// FUNCTIONS //
var x = setInterval(function() {
    durationInMilliseconds--;

    // Calculate minutes and seconds
    var minutes = Math.floor(durationInMilliseconds / 60000);
    var seconds = Math.floor((durationInMilliseconds % 60000) / 1000);
    var ms = durationInMilliseconds % 1000;

    // Display the result in the element with id="timer"
    document.getElementById("timer").innerHTML = "T-" + minutes + ":" + seconds + ":" + ms;
    if (durationInMilliseconds <= 0) {
        clearInterval(x);
        document.getElementById("smsg").innerHTML = "Details Has Been Saved.";
    }
}, 1);