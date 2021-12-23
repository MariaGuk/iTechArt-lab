'use strict';
const burgerButton = document.getElementById('burger');
const mobileMenu = document.querySelector('.navigation-mobile');
const mobileLogo = document.querySelector('.header__logo-mobile');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  mobileLogo.classList.toggle('active');
});


const buttonPrev = document.querySelector('.slider__arrow--left');
const buttonNext = document.querySelector('.slider__arrow--right');

const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slider__item');
let CURRENTSLIDE = 0;
let enabled = true;

function changeCurrentSlide(n) {
  CURRENTSLIDE = (n + slides.length) % slides.length;
};

function hideSlide(direction) {
  enabled = false;
  slides[CURRENTSLIDE].classList.add(direction);
  slides[CURRENTSLIDE].addEventListener('animationend', function () {
    this.classList.remove('slider__item--home', direction);
  })
};

function showSlide(direction) {
  slides[CURRENTSLIDE].classList.add('slider__item--next', direction);
  slides[CURRENTSLIDE].addEventListener('animationend', function () {
    this.classList.remove('slider__item--next', direction);
    this.classList.add('slider__item--home');
    enabled = true;
  })
};

function previousSlide(n) {
  hideSlide('to-right');
  changeCurrentSlide(n - 1);
  showSlide('from-left');
  slider.classList.toggle("slider__second");
  document.querySelector('.slider__second--next').classList.add('block');
};

function nextSlide(n) {
  hideSlide('to-left');
  changeCurrentSlide(n + 1)
  showSlide('from-right');
  slider.classList.toggle("slider__second");
  document.querySelector('.slider__second--next').classList.add('block');
};

buttonPrev.addEventListener('click', () => {
  if (enabled) {
    previousSlide(CURRENTSLIDE)
  }
});

buttonNext.addEventListener('click', () => {
  if (enabled) {
    nextSlide(CURRENTSLIDE)
  }
});


