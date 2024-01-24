import './style.css'


document.querySelector('#app').innerHTML = `
  <div class="container">
  <h1 class="title">Update CSS variables with <span class="js">JS</span></h1>
  <div class="range-container">
    <div class="spacing">
      <p>Spacing</p>
      <input type="range">
    </div>
    <div class="blur">
      <p>Blur</p>
      <input type="range">
    </div>
  </div>
  <div class="color-picker">
    <p>Change base color:</p>
    <input type="color" name="" id="">
  </div>

  <div class="img-container">
    <div class="img">
      <img src="" alt="">
    </div>
  </div>
  </div>
`
