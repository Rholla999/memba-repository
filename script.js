const bdyEl = document.querySelector('body');

bdyEl.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  const rSize = Math.floor(Math.random() * 100) + 1;
  const spanEl = document.createElement('span');
  spanEl.style.left = x + 'px';
  spanEl.style.top = y + 'px';
  spanEl.style.width = rSize + 'px';
  spanEl.style.height = rSize + 'px';
  bdyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 300);
});

const jobs = [
  'Banker',
  'Driver',
  'Wielder',
  'Teacher',
  'Lecturer',
  'Electrician',
  'Engineer',
];
let jobIndex = 0;
let indexPos = 0;

const btnEl = document.getElementById('btn');

btnEl.addEventListener('mouseover', (e) => {
  const x = e.pageX - btnEl.offsetLeft;
  const y = e.pageY - btnEl.offsetTop;

  btnEl.style.setProperty('--xPos', x + 'px');
  btnEl.style.setProperty('--yPos', y + 'px');
});

function updateText() {
  bdyEl.innerHTML = `
<h1> My Daddy is ${jobs[jobIndex].slice(0, 1) === 'E' ? 'an' : 'a'}
${jobs[jobIndex].slice(0, indexPos)}
`;
  if (indexPos === jobs[jobIndex].length) {
    jobIndex++;
    indexPos = 0;
  }

  if (jobIndex === jobs.length) {
    jobIndex = 0;
  }

  indexPos++;
  setTimeout(updateText, 300);
}



btnEl.addEventListener('click', () => {
  updateText();
});
