const hours = document.getElementById('hour');
const min = document.getElementById('min');
const seconds = document.getElementById('seconds');

function updateTime() {
  let time = new Date();

  hours.textContent = time.getHours();
  min.textContent = time.getMinutes();
  seconds.textContent = time.getSeconds();

  setTimeout(() => {
    updateTime();
  }, 1000);
}

updateTime();
