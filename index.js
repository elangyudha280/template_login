const pass = document.querySelector('.password');
const eye_open = document.querySelector('.eye-open');
const eye_close = document.querySelector('.eye-close');

eye_open.addEventListener('click', function () {
  if (pass.type === 'password') {
    pass.type = 'ussername';
    eye_open.classList.add('.eye-open-active');
    eye_close.classList.add('eye-close-active');
  }
});
eye_close.addEventListener('click', function () {
  pass.type = 'password';
  eye_open.classList.remove('eye-open-active');
  eye_close.classList.remove('eye-close-active');
});
