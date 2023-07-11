document.addEventListener("DOMContentLoaded", () => {
  (() => {
    const MOBILE_WIDTH = 767;

    const sliderParamsNotMobile = {
      sliderWrap: "slider-editions",
      cardsContainerName: "slider-editions__container",
      cardsWrapName: "slider-editions__wrap",
      card: "slider-editions__item",
      // paginationClassName: "test-pagination",
      // navClassName: "test-navigation",
      // navBtnClassName: "nav-btn",
      // navPrev: "test-prev",
      // navNext: "test-next",
    };

    function activateSlider(params) {
      // const navigation = document.createElement("div");
      // const pagination = document.createElement("div");
      // const navBtnPrev = document.createElement("button");
      // const navBtnNext = document.createElement("button");

      // navigation.classList.add(params.navClassName);

      // navBtnPrev.classList.add(params.navBtnClassName);
      // navBtnPrev.classList.add(params.navPrev);
      // navigation.prepend(navBtnPrev);

      // pagination.classList.add(params.paginationClassName);
      // navigation.append(pagination);

      // navBtnNext.classList.add(params.navBtnClassName);
      // navBtnNext.classList.add(params.navNext);
      // navigation.append(navBtnNext);

      // params.sliderWrapElem.prepend(navigation);

      params.cardsContainer.classList.add("swiper-container");
      params.cardsWrap.classList.add("swiper-wrapper");

      params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 34,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 49,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },

        pagination: {
          el: "#sl-ed-pag",
          type: "fraction"
        },
        navigation: {
          nextEl: "#sl-ed-btn-rg",
          prevEl: "#sl-ed-btn-lf"
        },

        a11y: false,
        keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

        // pagination: {
        //   el: `.${params.sliderWrap} .${params.paginationClassName}`,
        //   type: "fraction",
        // },

        // navigation: {
        //   nextEl: `.${params.navNext}`,
        //   prevEl: `.${params.navPrev}`,
        // },

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

            // this.pagination.el.remove();
            // navigation.remove();
          },
        },
      });
    }

    function destroySlider(params) {
      params.cardsSlider.destroy();
      params.cardsContainer.classList.remove("swiper-container");
      params.cardsWrap.classList.remove("swiper-wrapper");
      params.cardsWrap.removeAttribute("aria-live");
      params.cardsWrap.removeAttribute("id");
    }

    function checkWindowWidth(params) {
      const currentWidth = getWindowWidth();
      params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
      params.cardsContainer = document.querySelector(
        `.${params.cardsContainerName}`
      );
      params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

      if (
        currentWidth > MOBILE_WIDTH &&
        (!params.cardsSlider || params.cardsSlider.destroyed)
      ) {
        activateSlider(params);
      } else if (currentWidth <= MOBILE_WIDTH && params.cardsSlider) {
        destroySlider(params);
      }
    }

    checkWindowWidth(sliderParamsNotMobile);

    window.addEventListener("resize", function () {
      checkWindowWidth(sliderParamsNotMobile);
    });
  })();
});
