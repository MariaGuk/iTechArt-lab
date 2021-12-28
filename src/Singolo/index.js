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
let currentSlide = 0;
let enabled = true;
let numberOfSlide = 0;

function changeCurrentSlide(numberOfSlide) {
  currentSlide = (numberOfSlide + slides.length) % slides.length;
};

function hideSlide(direction) {
  enabled = false;
  slides[currentSlide].classList.add(direction);
  slides[currentSlide].addEventListener('animationend', function () {
    this.classList.remove('slider__item--home', direction);
  })
};

function showSlide(direction) {
  slides[currentSlide].classList.add('slider__item--next', direction);
  slides[currentSlide].addEventListener('animationend', function () {
    this.classList.remove('slider__item--next', direction);
    this.classList.add('slider__item--home');
    enabled = true;
  })
};

function previousSlide(numberOfSlide) {
  hideSlide('to-right');
  changeCurrentSlide(numberOfSlide - 1);
  showSlide('from-left');
  slider.classList.toggle("slider__second");
  document.querySelector('.slider__second--next').classList.add('block');
};

function nextSlide(numberOfSlide) {
  hideSlide('to-left');
  changeCurrentSlide(numberOfSlide + 1)
  showSlide('from-right');
  slider.classList.toggle("slider__second");
  document.querySelector('.slider__second--next').classList.add('block');
};

buttonPrev.addEventListener('click', () => {
  if (enabled) {
    previousSlide(currentSlide)
  }
});

buttonNext.addEventListener('click', () => {
  if (enabled) {
    nextSlide(currentSlide)
  }
});


