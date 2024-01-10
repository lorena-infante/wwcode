import './style.css'
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'
import { hitDrums } from './hitDrums'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Drumkit</h1>
    <h2>Press any key to begin</h2>
    <div id="buttons" class="container-btns">
    <button id="KeyA" class="btn_sound">A <span class="text-yellow">clap</span></button>
    <button id="KeyS" class="btn_sound">S <span class="text-yellow">hit-hat</span></button>
    <button id="KeyD" class="btn_sound">D <span class="text-yellow">kick</span></button>
    <button id="KeyF" class="btn_sound">F <span class="text-yellow">open-hat</span></button>
    <button id="KeyG" class="btn_sound">G <span class="text-yellow">boom</span></button>
    <button id="KeyH" class="btn_sound">H <span class="text-yellow">ride</span></button>
    <button id="KeyJ" class="btn_sound">J <span class="text-yellow">snare</span></button>
    <button id="KeyK" class="btn_sound">K <span class="text-yellow">tom</span></button>
    <button id="KeyL" class="btn_sound">L <span class="text-yellow">tink</span></button>
    </div>
  </div>
`
hitDrums();
//setupCounter(document.querySelector('#counter'))
