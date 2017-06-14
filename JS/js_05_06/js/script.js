(function () {
  'use strict';

var root,
timer,
timerId,
timeField,
deltaTime,
startTime,
isActive,
btnReset,
btnStart;


root = document.getElementById('root');
timer = document.createElement('div');
timeField = document.createElement('p');
btnReset = document.createElement('button');
btnStart = document.createElement('button');
isActive = false

btnStart.addEventListener('click', function (){
  startTime = Date.now();
  console.log(startTime);
  timerId = setInterval(function () {
    deltaTime = Date.now() - startTime;
    // deltaTime = new Date(deltaTime)
    timeField.innerHTML = deltaTime;  //.getSeconds() + '/' + deltaTime.getMilliseconds();
    console.log(deltaTime);
  }, 1);
});

btnReset.addEventListener('click', function (){
  timeField.innerHTML = '00:00:000';
  clearInterval(timerId);
});

btnStart.appendChild(document.createTextNode('Start'));
btnReset.appendChild(document.createTextNode('Reset'));
timeField.appendChild(document.createTextNode('00:00:000'));
timer.appendChild(timeField);
timer.appendChild(btnStart);
timer.appendChild(btnReset);

root.appendChild(timer);


})();
