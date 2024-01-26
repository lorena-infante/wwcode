import './style.css'
import { modifyControls } from './controls';

document.querySelector('#app').innerHTML = `
  <div class="container">
  <h1 class="title">Update CSS variables with <span id="js-text">JS</span></h1>
  <div class="range-container">
    <div class="spacing">
      <p>Spacing</p>
      <input type="range" id="spacing" min="-5" max="20">
    </div>
    <div class="blur">
      <p>Blur</p>
      <input type="range" id="range" min="0" max="10">
    </div>
  </div>
  <div class="color-picker">
    <p>Change base color:</p>
    <input type="color" id="color-picker" value="#35d465">
  </div>

  <div class="img-container">
    <div id="bg-color" class="img">
      <img id="photo" class="img-photo" src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg" alt="Img of a landscape">
    </div>
  </div>
  </div>
`
const spacingRange = document.getElementById('spacing');
const blurRange = document.getElementById('range');
const colorPicker = document.getElementById('color-picker');
const jsText = document.getElementById('js-text');
const bgColor = document.getElementById('bg-color');
const image = document.getElementById('photo');
modifyControls(spacingRange, blurRange, colorPicker, jsText,bgColor, image);