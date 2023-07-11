(() => {
  const MOBILE_WIDTH = 767;
  const DESKTOP_WIDTH = 1023;
  const btn = document.querySelector(".js-events-open-btn");

  const sliderMobileParams = {
    paginationClassName: "slider-events__pagination",
    cardsContainerName: "slider-events",
    cardsWrapName: "slider-events__wrap",
    card: "slider-events__item",
    hiddenClass: "is-hidden"
  };

  function activateMobileSlider(params) {
    const pagination = document.createElement("div");
    pagination.classList.add(params.paginationClassName);
    params.cardsContainer.append(pagination);

    params.cardsContainer.classList.add("swiper-container");
    params.cardsWrap.classList.add("swiper-wrapper");

    params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: `.${params.cardsContainerName} .${params.paginationClassName}`
      },

      on: {
        beforeInit() {
          document.querySelectorAll(`.${params.card}`).forEach((el) => {
            el.classList.add("swiper-slide");
          });
        },

        beforeDestroy() {
          this.slides.forEach((el) => {
            el.classList.remove("swiper-slide");
            el.removeAttribute("role");
            el.removeAttribute("aria-label");
          });

          this.pagination.el.remove();
        }
      }
    });
  }

  function destroyMobileSlider(params) {
    params.cardsSlider.destroy();
    params.cardsContainer.classList.remove("swiper-container");
    params.cardsWrap.classList.remove("swiper-wrapper");
    params.cardsWrap.removeAttribute("aria-live");
    params.cardsWrap.removeAttribute("id");
  }

  function setHiddenCards(params, windowWidth) {
    const cards = document.querySelectorAll(`.${params.card}`);
    let quantity = cards.length;

    if (windowWidth > MOBILE_WIDTH && windowWidth < DESKTOP_WIDTH) {
      quantity = 2;
    }

    if (windowWidth >= DESKTOP_WIDTH) {
      quantity = 3;
    }

    cards.forEach((card, i) => {
      card.classList.remove(params.hiddenClass);
      if (i >= quantity) {
        card.classList.add(params.hiddenClass);
      }
    });
  }

  function showCards(e) {
    const cards = document.querySelectorAll(`.${sliderMobileParams.card}`);

    e.target.style = "display: none";

    cards.forEach((card) => {
      card.classList.remove(sliderMobileParams.hiddenClass);
    });
  }

  function checkWindowWidthMobile(params) {
    const currentWidth = getWindowWidth();
    btn.style = "";
    params.cardsContainer = document.querySelector(
      `.${params.cardsContainerName}`
    );
    params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

    if (
      currentWidth <= MOBILE_WIDTH &&
      (!params.cardsSlider || params.cardsSlider.destroyed)
    ) {
      activateMobileSlider(params);
    } else if (currentWidth > MOBILE_WIDTH && params.cardsSlider) {
      destroyMobileSlider(params);
    }

    setHiddenCards(params, currentWidth);
  }

  checkWindowWidthMobile(sliderMobileParams);
  btn.addEventListener("click", showCards);

  window.addEventListener("resize", function () {
    checkWindowWidthMobile(sliderMobileParams);
  });
})();
