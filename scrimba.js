let incBtn = document.getElementById('increment-btn');
let countUp = document.getElementById('count-el');
let saveBtn = document.getElementById('save-btn');
let preEnt = document.getElementById('pre');

incBtn.style.textTransform = 'upperCase';

let count = 0;

incBtn.addEventListener('click', () => {
  count++;
  countUp.textContent = count;
});

saveBtn.addEventListener('click', () => {
  let countStr = count + ' - ';
  preEnt.textContent += countStr;

  countUp.textContent = 0;
  count = 0;
});
