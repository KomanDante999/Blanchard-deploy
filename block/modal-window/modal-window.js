(() => {
  const btns = document.querySelectorAll(".js-modal-path");
  const modalOverlay = document.querySelector(".js-modal-overlay");
  const modals = document.querySelectorAll(".js-modal-target");
  
  btns.forEach((el) => {
    el.addEventListener("click", (e) => {
      let path = e.currentTarget.getAttribute("data-modal-path");
      
      modals.forEach((el) => {
        el.classList.remove("is-visible");
      });
      
      document
      .querySelector(`[data-modal-target="${path}"]`)
      .classList.add("is-visible");
      modalOverlay.classList.add("is-visible");
      document.querySelector(".body").classList.add("over-hidden");
    });
  });
  
  modalOverlay.addEventListener("click", (e) => {
    
    if (e.target == modalOverlay) {
      modalOverlay.classList.remove("is-visible");
      modals.forEach((el) => {
        el.classList.remove("is-visible");
      });
      document.querySelector(".body").classList.remove("over-hidden");
    }
  });
  
  modals.forEach((modal) => {
    const btnClose = modal.querySelector('.js-modal-close');
    
    btnClose.addEventListener('click', (e) => {
      
      modalOverlay.classList.remove("is-visible");
      modals.forEach((el) => {
        el.classList.remove("is-visible");
      });
      document.querySelector(".body").classList.remove("over-hidden");
    });
  });
  
  
})();

