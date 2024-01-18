export function runClock() {
  setInterval(getActualTime, 1000);

  function getActualTime() {
    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const seconds = today.getSeconds();
    //console.log(`Time is: ${hour}:${minute}:${seconds}`)
  }
}
