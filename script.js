const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  const rSize = Math.floor(Math.random() * 100) + 1;
  const spanEl = document.createElement('span');
  spanEl.style.top = x + 'px';
  spanEl.style.left = y + 'px';
  spanEl.style.width = rSize + 'px';
  spanEl.style.height = rSize + 'px';
  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 6000);
});
