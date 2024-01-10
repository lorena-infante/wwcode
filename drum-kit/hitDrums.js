//import clap from './public/clap.wav';
export function hitDrums() {
  document.addEventListener("keydown", getTheKey);

  function getTheKey(e) {
    const keyCode = e.code;
    switch (keyCode) {
      case "KeyA":
        console.log(`KeyA`);
        const clapSound = new Audio ('/clap.wav?url');
        clapSound.play();
        break;

      case "KeyS":
        console.log(`KeyS`);
        const hitHatSound = new Audio ('/hihat.wav?url');
        hitHatSound.play();
        break;

      case "KeyD":
        console.log(`KeyD`);
        const kickSound = new Audio ('/kick.wav?url');
        kickSound.play();
        break;

      case "KeyF":
        console.log(`KeyF`);
        const openHatSound = new Audio ('/openhat.wav?url');
        openHatSound.play();
        break;

      case "KeyG":
        console.log(`KeyG`);
        const boomSound = new Audio ('/boom.wav?url');
        boomSound.play();
        break;

      case "KeyH":
        console.log(`KeyH`);
        const rideSound = new Audio ('/ride.wav?url');
        rideSound.play();
        break;

      case "KeyJ":
        console.log(`KeyJ`);
        const snareSound = new Audio ('/snare.wav?url');
        snareSound.play();
        break;

      case "KeyK":
        console.log(`KeyK`);
        const tomSound = new Audio ('/tom.wav?url');
        tomSound.play();
        break;

      case "KeyL":
        console.log(`KeyL`);
        const tinkSound = new Audio ('/tink.wav?url');
        tinkSound.play();
        break;

      default:
        console.log(`Do nothing`);
    }
  }
}
