$(document).ready(function() {
  $.each($('.check-spoiler__item'), function(index, val) {
    if($(this).find('input').prop('checked')==true){
      $(this).addClass('is-active');
    }
  });
  $(document).on('click', '.check-spoiler__item', function(event) {
    if ($(this).hasClass('is-active')) {
        $(this).find('input').prop('checked', false);
    } else {
        $(this).find('input').prop('checked', true);
    };
    $(this).toggleClass('is-active');

    return false;
});
});

(() => {
  const checkBtn = document.querySelector('.js-check-head');
  const checkWrap = document.querySelector('.js-check-wrap');

  checkBtn.addEventListener('click', function () {
      this.classList.toggle('is-active');
      checkWrap.classList.toggle('is-active');

  });
})();
