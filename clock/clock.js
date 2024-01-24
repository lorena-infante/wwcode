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
  }

  function moveHands(DOMSec,DOMMin,DOMHour,actualSec, actualMin, actualHour){
    let calcDegSec = (actualSec*360)/60;
    let calcDegMin = (actualMin*360)/60;
    let calcDegHour= (actualHour*360)/12;
    //MoveSecond
    DOMSec.style.transform=`rotate(${calcDegSec}deg)`;
    //MoveMinute 
    DOMMin.style.transform=`rotate(${calcDegMin}deg)`;
    //MoveHour = 
    DOMHour.style.transform=`rotate(${calcDegHour}deg)`;
  }

return interval;
}