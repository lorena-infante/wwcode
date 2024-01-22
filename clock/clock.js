export function runClock(secDOM,minDOM,hourDOM) {
  let today;
  let second;
  let minute;
  let hour;
  const interval = setInterval(getActualTime, 1000);
  
   function getActualTime() {
    today = new Date();
    second = today.getSeconds();
    minute = today.getMinutes();
    hour = today.getHours();
    
    moveHands(secDOM,minDOM,hourDOM,second,minute,hour);
   
    //console.log(`${hour}: ${minute}: ${second}`);
  }

  function moveHands(DOMSec,DOMMin,DOMHour,actualSec, actualMin, actualHour){
    let calcDeg = (actualSec*360)/60;
    //console.log(DOMSec.style);
    let moveSecond = DOMSec.style.transform=`rotate(${calcDeg}deg);`;
    //console.log(moveSecond);
  }

return interval;
}