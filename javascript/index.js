function startTimer(endtime, display) {
    var end = new Date(endtime);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(display).innerHTML = '... now';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(display).innerHTML = days + 'days ';
        document.getElementById(display).innerHTML += hours + 'hrs ';
        document.getElementById(display).innerHTML += minutes + 'mins ';
        document.getElementById(display).innerHTML += seconds + 'secs';
    }

    timer = setInterval(showRemaining, 1000);
}

window.onload = function () {
    startTimer('December 4, 2019 00:00:01 GMT', 'time');
};