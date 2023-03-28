let modal = document.querySelector('.modal');
let body = document.querySelector('body');
let modalButton = document.querySelector('.header__button');
let modalClose = document.querySelector('.modal__close-button');
let inputName = document.querySelector('#modal-name');

modalButton.addEventListener('click', function () {
  if (modal.classList.contains('modal--closed')) {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
  } else {
    modal.classList.add('modal--closed');
    modal.classList.remove('modal--opened');
  }
  inputName.focus();
  body.classList.add('locked');
});

modalClose.addEventListener('click', function () {
  if (modal.classList.contains('modal--opened')) {
    modal.classList.remove('modal--opened');
    modal.classList.add('modal--closed');
  }
  body.classList.remove('locked');
});
