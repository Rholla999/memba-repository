let display = document.getElementById('display');
let keysBtn = document.querySelectorAll('.btn');

keysBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let value = e.target.dataset.btn;
    display.value += value;
  });
});

let equalsBtn = document
  .getElementById('btn-equal')
  .addEventListener('click', () => {
    if (display.value === '') {
      display.value = '';
    } else {
      let answer = eval(display.value);
      display.value = answer;
    }
  });

let clearBtn = document
  .getElementById('btn-clear')
  .addEventListener('click', () => {
    display.value = '';
  });

