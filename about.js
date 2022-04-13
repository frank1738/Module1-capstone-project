const menuBar = document.querySelector('.menu');
const humBtn = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-xmark');
const Links = document.querySelectorAll('.link');

humBtn.addEventListener('click', () => {
  menuBar.classList.toggle('on');
});
closeMenu.addEventListener('click', () => {
  menuBar.classList.toggle('on');
});

Links.forEach((item) => {
  item.addEventListener('click', () => {
    menuBar.classList.toggle('on');
  });
});
