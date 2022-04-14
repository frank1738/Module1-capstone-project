const menuBar = document.querySelector('.menu');
const humBtn = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-xmark');
const Links = document.querySelectorAll('.link');
const select = document.querySelectorAll('.visit');

let selected = '';

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

select.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (selected) {
      selected.classList.remove('select');
      selected = event.target;
      selected.classList.add('select');
    } else {
      selected = event.target;
      selected.classList.add('select');
    }
  });
});
