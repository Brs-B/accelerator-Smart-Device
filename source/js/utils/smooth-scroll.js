let buttonMainBlock = document.querySelector('.main-block__button');
let callbackAnchor = document.querySelector('.callback');

function linkToCallbackClick(evt) {
  evt.preventDefault();
  callbackAnchor.scrollIntoView({block: 'start', behavior: 'smooth'});
}

if (buttonMainBlock && buttonMainBlock) {
  buttonMainBlock.addEventListener('click', linkToCallbackClick);
}
