const daysDisplay = document.getElementById('days');
const hoursDisplay = document.getElementById('hours');
const minsDisplay = document.getElementById('minutes');
const secsDisplay = document.getElementById('seconds');

const newYearDay = new Date('Jan 1 2025, 00:00:00');

function updateCounter() {
  const now = new Date().getTime();
  const gap = newYearDay - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let d = Math.floor(gap / days);
  let h = Math.floor((gap % days) / hours);
  let m = Math.floor((gap % hours) / minutes);
  let s = Math.floor((gap % minutes) / seconds);

  daysDisplay.innerText = format(d);
  hoursDisplay.innerText = format(h);
  minsDisplay.innerText = format(m);
  secsDisplay.innerText = format(s);

  setTimeout(updateCounter, 1000);
}

function format(time) {
  return time < 10 ? `0${time}` : time;
}

updateCounter();
