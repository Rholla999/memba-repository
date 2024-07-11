const sideMenu = document.querySelector('aside');
const toggler = document.getElementById('toggler');
const closeBtn = document
  .getElementById('closeBtn')
  .addEventListener('click', () => {
    sideMenu.style.display = 'none';
  });
const menuBtn = document
  .getElementById('menu-btn')
  .addEventListener('click', () => {
    sideMenu.style.display = 'block';
  });

toggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');

  toggler.querySelector('span:nth-child(1)').classList.toggle('active')
  toggler.querySelector('span:nth-child(2)').classList.toggle('active')
});
