import {  runClock } from './clock.js'
//import {  moveHands } from './clock.js'
//import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>CSS + JS CLOCK</h1>
    <div class="clock-container">
      <div id="id-clock" class="clock">
        <div class="clock-hands-container">
          <span id="bullet"></span>
          <span id="hour-hand"></span>
          <span id="minute-hand"></span>
          <span id="second-hand" class=""></span>
        </div>
      </div>
    </div>
  </div>
`

const sec = document.getElementById('second-hand');
const min = document.getElementById('minute-hand');
const hour = document.getElementById('hour-hand');
runClock(sec,min,hour);
