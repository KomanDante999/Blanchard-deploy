const projectsSlider = new Swiper("#slider-projeck", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: "#sl-pr-btn-rg",
    prevEl: "#sl-pr-btn-lf"
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 50
    },
  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }

});
