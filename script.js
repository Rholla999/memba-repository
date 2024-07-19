const hours = document.getElementById('hour');
const min = document.getElementById('min');
const seconds = document.getElementById('seconds');

function updateTime() {
  let hrs = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  if (hrs > 12) {
    hrs = hrs - 12;
  }

  hrs = hrs < 10 ? '0' + hrs : hrs;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hours.textContent = hrs;
  min.textContent = m;
  seconds.textContent = s;

  setTimeout(() => {
    updateTime();
  }, 1000);
}

updateTime();


updateTime();
