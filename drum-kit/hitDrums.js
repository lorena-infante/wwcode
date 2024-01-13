export function hitDrums() {
  document.addEventListener("keydown", getTheKey);


  let key;
  function addActiveClass(keyPressed){
    key = document.getElementById(`${keyPressed}`);
    key.classList.add('btn-active');
    setTimeout(()=>{
      key.classList.add('fade-out');
      key.classList.remove('btn-active');
    },200);
    key.classList.remove('fade-out');
   }

  function getTheKey(e) {
    const keyCode = e.code;
    switch (keyCode) {
      case "KeyA":
        addActiveClass(keyCode);
        const clapSound = new Audio ('/clap.wav?url');
        clapSound.play();
        break;

      case "KeyS":
        addActiveClass(keyCode);
        const hitHatSound = new Audio ('/hihat.wav?url');
        hitHatSound.play();
        break;

      case "KeyD":
        addActiveClass(keyCode);
        const kickSound = new Audio ('/kick.wav?url');
        kickSound.play();
        break;

      case "KeyF":
        addActiveClass(keyCode);
        const openHatSound = new Audio ('/openhat.wav?url');
        openHatSound.play();
        break;

      case "KeyG":
        addActiveClass(keyCode);
        const boomSound = new Audio ('/boom.wav?url');
        boomSound.play();
        break;

      case "KeyH":
        addActiveClass(keyCode);
        const rideSound = new Audio ('/ride.wav?url');
        rideSound.play();
        break;

      case "KeyJ":
        addActiveClass(keyCode);
        const snareSound = new Audio ('/snare.wav?url');
        snareSound.play();
        break;

      case "KeyK":
        addActiveClass(keyCode);
        const tomSound = new Audio ('/tom.wav?url');
        tomSound.play();
        break;

      case "KeyL":
        addActiveClass(keyCode);
        const tinkSound = new Audio ('/tink.wav?url');
        tinkSound.play();
        break;

      default:
        console.log(`Do nothing`);
      break;
      }
  }
}
