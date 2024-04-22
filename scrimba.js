let btn = document.getElementById('p-btn');
let errorMsg = document.getElementById('error');

btn.addEventListener('click', () => {
  errorMsg.textContent = 'Out of Stock';
  
});
