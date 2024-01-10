import './style.css'
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'
import { hitDrums } from './hitDrums'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Drumkit</h1>
    <h2>Press any key to begin</h2>
    <div class="container-btns">
    <button data-id="clap" class="btn_sound">A <span class="text-yellow">clap</span></button>
    <button data-id="hit-hat" class="btn_sound">S <span class="text-yellow">hit-hat</span></button>
    <button data-id="kick" class="btn_sound">D <span class="text-yellow">kick</span></button>
    <button data-id="open-hat" class="btn_sound">F <span class="text-yellow">open-hat</span></button>
    <button data-id="ride" class="btn_sound">G <span class="text-yellow">ride</span></button>
    <button data-id="snare" class="btn_sound">H <span class="text-yellow">snare</span></button>
    <button data-id="tink" class="btn_sound">J <span class="text-yellow">tink</span></button>
    <button data-id="tom" class="btn_sound">K <span class="text-yellow">tom</span></button>
    <button data-id="boom" class="btn_sound">L <span class="text-yellow">boom</span></button>
    </div>
  </div>
`
hitDrums();
//setupCounter(document.querySelector('#counter'))
