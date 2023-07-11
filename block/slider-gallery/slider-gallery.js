const gallerySlider = new Swiper("#slider-gallery", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: "#sl-gal-pag",
    type: "fraction"
  },
  navigation: {
    nextEl: "#sl-gal-btn-rg",
    prevEl: "#sl-gal-btn-lf"
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 38
    },

    1024: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    1440: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
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
