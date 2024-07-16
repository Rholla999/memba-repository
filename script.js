const screen1 = document.getElementById('display1');
const keys = document.querySelectorAll('.btn');
const equalsBtn = document.getElementById('equal');
const clearBtn = document.getElementById('AC');
const darkTheme = document.getElementById('dark');
const bodyEl = document.querySelector('body');

darkTheme.addEventListener('input', () => {
  updateTheme();
  updateLocalStorage();
});

darkTheme.checked = JSON.parse(localStorage.getItem('mode'));

function updateLocalStorage() {
  localStorage.setItem('mode', JSON.stringify(darkTheme));
}

function updateTheme() {
  if (darkTheme.checked) {
    document.body.classList.toggle('darkThemebackGround');
  } else {
    document.body.classList.remove('darkThemebackGround');
  }
}

keys.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let value = e.target.dataset.key;
    screen1.value += value;
  });
});

equalsBtn.addEventListener('click', () => {
  if (screen1.value === '') {
    screen1.value = '';
  } else {
    let ans = eval(screen1.value);
    screen1.value = ans;
  }
});

clearBtn.addEventListener('click', () => {
  screen1.value = '';
  screen2.value = '';
});

const xBtn = document.getElementById('x').addEventListener('click', () => {
  let ans1 = screen1.value.toString().slice(0, -1);
  screen1.value = ans1;
});

const sqr = document.getElementById('sqr').addEventListener('click', () => {
  let sqrAns = Math.sqrt(screen1.value, 2);
  screen1.value = sqrAns;
});
