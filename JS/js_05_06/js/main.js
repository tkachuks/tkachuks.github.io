(function () {
  'use strict';

var root = document.getElementById('root');
var timer = document.createElement('div');
var timeField = document.createElement('p');
var btnReset = document.createElement('button');
var btnStart = document.createElement('button');
timeField.appendChild(document.createTextNode('00:00:000'));
btnStart.appendChild(document.createTextNode('Start'));
btnReset.appendChild(document.createTextNode('Reset'));
timer.appendChild(timeField);
timer.appendChild(btnStart);
timer.appendChild(btnReset);
root.appendChild(timer);


  var watch = new Watch(timer, btnStart, btnReset);

  function Watch(timer, btnStart, btnReset) {
    var time = 0;
    var interval;
    var offset;
    var isOn = false;

    btnStart.addEventListener('click', function () {
      (isOn) ? pause() : start();
    });

    btnReset.addEventListener('click', function () {
      reset();
    });

    function start() {
      if (!isOn) {
        interval = setInterval(function () {
          time += timePassed();
          timeField.textContent = timeFormatter(time);
        }.bind(this), 1);
        btnStart.textContent = 'Pause';
        offset = Date.now();
        isOn = true;
      } else {
        this.pause();
      }
    }

    function pause() {
      if (isOn) {
        clearInterval(interval);
        interval = null;
        btnStart.textContent = 'Start';
        isOn = false;
      }
    }

    function reset() {
      if (!isOn) {
        time = 0;
        timeField.textContent = timeFormatter(time);
      } else {
        pause();
        reset();
        btnStart.textContent = 'Start';
      }
    }

    function timePassed() {
      var now = Date.now();
      var timePassed = now - offset;
      offset = now;
      return timePassed;
    }

    function timeFormatter(timeInMilliseconds) {
      var time = new Date(timeInMilliseconds);
      var minutes = time.getMinutes().toString();
      var seconds = time.getSeconds().toString();
      var milliseconds = time.getMilliseconds().toString();

      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }
      if (seconds.length < 2) {
        seconds = '0' + seconds;
      }
      while (milliseconds.length < 3) {
        milliseconds = '0' + milliseconds;
      }
      return minutes + ':' + seconds + ':' + milliseconds;
    }
  }

})();
