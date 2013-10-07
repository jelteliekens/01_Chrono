var start = 0;
var end = 0;
var diff = 0;
var timerID = 0;

function chrono() {
    end = new Date();
    diff = end - start;
    diff = new Date(diff);

    var msec = diff.getMilliseconds();
    var sec = diff.getSeconds();
    var min = diff.getMinutes();
    var hr = diff.getHours() - 1;

    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (msec < 10) {
        msec = "00" + msec;
    }
    else if (msec < 100) {
        msec = "0" + msec;
    }

    document.getElementById("timer").innerHTML = (hr > 0 ? hr + ":" : "") + min + ":" + sec + "." + msec;
    timerID = setTimeout("chrono()", 10);
}

function chronoStart() {
    document.getElementById("btnPauze").disabled = "";
    document.getElementById("btnStart").innerHTML = "Stop";
    document.getElementById("btnStart").onclick = chronoStop;
    start = new Date();
    chrono();
}

function chronoPauze() {
    document.getElementById("btnContinue").disabled = "";
    document.getElementById("btnPauze").disabled = "disabled";
    clearTimeout(timerID);
}

function chronoContinue() {
    document.getElementById("btnContinue").disabled = "disabled";
    document.getElementById("btnPauze").disabled = "";
    start = new Date() - diff;
    start = new Date(start);
    chrono();
}

function chronoStop() {
    document.getElementById("btnStart").innerHTML = "Start";
    document.getElementById("btnStart").onclick = chronoStart;
    document.getElementById("timer").innerHTML = "00:00.000";
    document.getElementById("btnContinue").disabled = "disabled";
    document.getElementById("btnPauze").disabled = "disabled";
    clearTimeout(timerID);
}
