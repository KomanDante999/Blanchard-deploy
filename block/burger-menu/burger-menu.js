(() => {
  const TABLET_WIDTH = 1440;

  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);
    const links = menu.querySelectorAll(`.${params.linkClass}`);

    function onBtnClick() {
      if (window.getWindowWidth() < TABLET_WIDTH) {
        btn.classList.toggle(params.activeClass);

        if (
          !menu.classList.contains(params.activeClass) &&
          !menu.classList.contains(params.hiddenClass)
        ) {
          menu.classList.add(params.activeClass);
          document.body.style.overflow = "hidden";
          btn.setAttribute("aria-label", "закрыть меню навигации по сайту");
        } else {
          menu.classList.add(params.hiddenClass);
          document.body.removeAttribute("style");
          btn.setAttribute("aria-label", "открыть меню навигации по сайту");
          // btn.classList.toggle(params.hiddenClass);
        }
      }
    }

    menu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        // btn.classList.remove(params.hiddenClass);
      }
    });

    btn.addEventListener("click", window.debounce(onBtnClick, 800));
    links.forEach((link) => {
      link.addEventListener("click", window.debounce(onBtnClick, 800));
    });
  }

  setBurger({
    btnClass: "js-burger", // класс бургера
    menuClass: "js-menu", // класс меню
    activeClass: "is-opened", // класс открытого состояния
    hiddenClass: "is-closed", // класс закрывающегося состояния (удаляется сразу после закрытия)
    linkClass: "js-menu-link", // класс ссылки меню, по клику на которую происходит закрытие меню
  });
})();
