//function debounce
(() => {
  function debounce(f, ms) {
    let isCooldown = false;
    return function () {
      if (isCooldown) return;
      f.apply(this, arguments);
      isCooldown = true;
      setTimeout(() => (isCooldown = false), ms);
    };
  }

  //getWindowWidth
  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  window.debounce = debounce;
  window.getWindowWidth = getWindowWidth;
})();
//ВАЖНО, что бы время действия функции было больше времени анимации
