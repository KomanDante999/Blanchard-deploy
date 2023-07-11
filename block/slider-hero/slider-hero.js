(() => {
  const swiperHero = new Swiper('.js-slider-hero', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 8000,
    autoplay: {
      delay: 5000
    }
  });
})();

