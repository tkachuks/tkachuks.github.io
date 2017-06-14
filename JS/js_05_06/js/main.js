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

var startTime;
var deltaTime;
var interval;
var time = 0;
var isActive = false;

function startPause() {
  if (isActive) {
    isActive = false;
    btnStart.innerHTML = 'Resume';
    clearInterval(interval);
  } else {
    isActive = true;
    btnStart.innerHTML = 'Pause';
    timerOn();

  }
};

function reset() {
  clearInterval(interval);
  isActive = false;
  time = 0;
  btnStart.innerHTML = 'Start';
  timeField.innerHTML = '00:00:000';
  startTime = null;
};

function timerOn() {
  if (!startTime) {
    startTime = Date.now();
  }
  interval = setInterval(function () {
    deltaTime = timeFormat();
    timeField.innerHTML = deltaTime;
  }, 1);

};

function timeFormat () {
  var time = new Date(Date.now() - startTime);;
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
};

btnStart.addEventListener('click', startPause);
btnReset.addEventListener('click', reset);

})();
