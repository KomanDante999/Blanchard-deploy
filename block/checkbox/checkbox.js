$(document).ready(function() {
  $.each($('.check-blanchard__item'), function(index, val) {
    if($(this).find('input').prop('checked')==true){
      $(this).addClass('is-active');
    }
  });
  $(document).on('click', '.check-blanchard__item', function(event) {
    if ($(this).hasClass('is-active')) {
        $(this).find('input').prop('checked', false);
    } else {
        $(this).find('input').prop('checked', true);
    };
    $(this).toggleClass('is-active');

    return false;
});
});

