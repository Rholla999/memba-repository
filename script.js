const bgImg = document.getElementById('bg-img');

window.addEventListener('scroll', () => {
  updateImg();
});



function updateImg() {
  bgImg.style.opacity = 1 - window.pageYOffset / 800;
  bgImg.style.backgroundSize = 160 - window.pageYOffset / 12 + '%'
}
