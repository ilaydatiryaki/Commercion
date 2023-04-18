'use strict';
const btn = document.querySelector('.middle-btn');
const menu = document.querySelector('.miniSize');
let isMenuOpen = false;
const clickHandler = function () {
  if (!isMenuOpen) {
    btn.classList.add('open');
    menu.style.display = 'flex';
    isMenuOpen = true;
  } else {
    menu.style.display = 'none';
    btn.classList.remove('open');
    isMenuOpen = false;
  }
};

btn.addEventListener('click', clickHandler);
