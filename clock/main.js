import './style.css'
import {  runClock } from './clock.js'
//import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>CSS + JS CLOCK</h1>
    <div class="clock-container">
      <div id="id-clock" class="clock">
        <div class="clock-hands-container">
          <span id="bullet"></span>
          <span id="hourly-hand"></span>
          <span id="minute-hand"></span>
          <span id="second-hand" class="move-second"></span>
        </div>
      </div>
    </div>
  </div>
`

//setupCounter(document.querySelector('#counter'))
runClock();