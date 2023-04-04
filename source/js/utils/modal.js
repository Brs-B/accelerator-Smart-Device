let modal = document.querySelector('.modal');
let body = document.querySelector('body');
let modalButton = document.querySelector('.header__button');
let modalClose = document.querySelector('.modal__close-button');
let inputName = document.querySelector('#modal-name');

const onEscKeydown = (evt) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey) {
    evt.preventDefault();
    modal.classList.remove('modal--opened');
    modal.classList.add('modal--closed');
    document.removeEventListener('keydown', onEscKeydown);
    body.classList.remove('locked');
  }
};

if (modalButton) {
  modalButton.addEventListener('click', function () {
    if (modal.classList.contains('modal--closed')) {
      modal.classList.remove('modal--closed');
      modal.classList.add('modal--opened');
      document.addEventListener('keydown', onEscKeydown);
    }
    inputName.focus();
    body.classList.add('locked');
  });
}

if (modalClose) {
  modalClose.addEventListener('click', function () {
    if (modal.classList.contains('modal--opened')) {
      modal.classList.remove('modal--opened');
      modal.classList.add('modal--closed');
      document.removeEventListener('keydown', onEscKeydown);
    }
    body.classList.remove('locked');
  });
}
