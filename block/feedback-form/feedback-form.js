document.addEventListener('DOMContentLoaded', () => {
// inputmask
  const phone = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(phone);
// validate
  new window.JustValidate ('#feedback-form', {
      rules: {
          name: {
              required: true,
              minLength: 2,
              maxLength: 30
          },
          tel: {
              required: true
          }
      },

      messages: {
        name: 'Недопустимый формат',
        tel: 'Поле обязательно для заполнения',
      },

      submitHandler: function(form) {
          let formData = new FormData(form);

          fetch('mail.php', {
            method: 'POST',
            body: formData
        }).then(() => {
            console.log('Отправлено');
            form.reset();
          })
          .catch(() => console.log('Ошибка'));
        }
  })
});
