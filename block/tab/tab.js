(() => {
  function setTabs(dataPath, dataTarget) {
    const btns = document.querySelectorAll(`.js-part-trigger[${dataPath}]`);
    const contents = document.querySelectorAll(
      `.js-target-trigger[${dataTarget}]`
    );
    btns.forEach((btn) => {
      btn.addEventListener("click", function (evt) {
        const path = this.getAttribute(dataPath);
        const target = document.querySelector(
          `.js-target-trigger[${dataTarget}="${path}"]`
        );
        btns.forEach((currentBtn) => {
          currentBtn.classList.remove("is-active");
        });
        this.classList.add("is-active");
        contents.forEach((content) => {
          content.classList.remove("is-active");
        });
        target.classList.add("is-active");
      });
    });
  }
  setTabs("data-country-path", "data-country-target");
  setTabs("data-1-artist-path", "data-1-artist-target");
  setTabs("data-2-artist-path", "data-2-artist-target");
  setTabs("data-3-artist-path", "data-3-artist-target");
  setTabs("data-4-artist-path", "data-4-artist-target");
  setTabs("data-5-artist-path", "data-5-artist-target");
})();
