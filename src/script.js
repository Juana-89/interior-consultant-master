const mobileMenu = document.querySelector('.mobile-menu');
const imgMenu = document.querySelector('.img__menu');
const closeMenu = document.querySelector('.img__close');
const titleMenu = document.querySelector('#logo-header');
const main = document.querySelector('.text');

imgMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  titleMenu.style.display = 'none';
  imgMenu.style.display = 'none';
  closeMenu.style.display = 'block';
  closeMenu.classList.add('show');
  main.classList.add('hide')
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
  main.classList.remove('hide')
  titleMenu.style.display = 'block';
  imgMenu.style.display = 'block'; //aqui
//   imgMenu.classList.add('hide')
  closeMenu.style.display = 'none';
  main.style.visibility = 'visible'
});
