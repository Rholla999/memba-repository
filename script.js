const hourEl = document.querySelector('.hours');
const minEl = document.querySelector('.minutes');
const secEl = document.querySelector('.seconds');

function updateTime() {
  let currentTime = new Date();
  let hr = currentTime.getHours();
  let min = currentTime.getMinutes();
  let sec = currentTime.getSeconds();

  let hrDeg = (hr / 12) * 360;
  let minDeg = (min / 60) * 360;
  let secDeg = (sec / 60) * 360;

  hourEl.style.transform = `rotate(${hrDeg}deg)`;
  minEl.style.transform = `rotate(${minDeg}deg)`;
  secEl.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(updateTime, 1000);
