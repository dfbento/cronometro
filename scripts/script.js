window.onload = function () {
    var hours = 00;
    var minutes = 00;
    var seconds = 00;
    var tens = 00;

    var appendHrs = document.getElementById("hours");
    var appendMins = document.getElementById("minutes");
    var appendSecs = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");

    var buttonStart = document.getElementById('btn-start');
    var buttonStop = document.getElementById('btn-stop');
    var buttonReset = document.getElementById('btn-reset');

    var interval;

    buttonStart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(interval);
    }

    buttonReset.onclick = function () {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        hours = "00";

        appendTens.innerHTML = tens;
        appendMins.innerHTML = seconds;
        appendSecs.innerHTML = minutes;
        appendHrs.innerHTML = hours;
    }

    function startTimer() {

        tens++;

        // atualiza elementos das dezenas
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        // atualiza elemento dos segundos
        if (tens > 99) {
            seconds++;
            appendSecs.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSecs.innerHTML = seconds;
        }

        // atualiza elemento dos minutos
        if (seconds > 59) {
            minutes++;
            appendMins.innerHTML = "0" + minutes;
            seconds = 0;
            appendSecs.innerHTML = "0" + 0;
        }

        if (minutes > 9) {
            appendMins.innerHTML = minutes;
        }

        // atualiza elemento de horas
        if (minutes > 59) {
            hours++;
            appendHrs.innerHTML = "0" + hours;
            minutes = 0;
            appendMins.innerHTML = "0" + 0;
        }

        if (hours > 9) {
            appendHrs.innerHTML = hours;
        }
    }
}