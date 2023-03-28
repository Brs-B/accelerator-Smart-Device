let nav = document.querySelector('.nav');
let contacts = document.querySelector('.contacts');
let accordionToggleNav = document.querySelector('.accordion__toggle--nav');
let accordionToggleContacts = document.querySelector('.accordion__toggle--contacts');

nav.classList.remove('nav--nojs');
contacts.classList.remove('contacts--nojs');

accordionToggleNav.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }

  if (contacts.classList.contains('contacts--opened')) {
    contacts.classList.remove('contacts--opened');
    contacts.classList.add('contacts--closed');
  }
});

accordionToggleContacts.addEventListener('click', function () {
  if (contacts.classList.contains('contacts--closed')) {
    contacts.classList.remove('contacts--closed');
    contacts.classList.add('contacts--opened');
  } else {
    contacts.classList.add('contacts--closed');
    contacts.classList.remove('contacts--opened');
  }

  if (nav.classList.contains('nav--opened')) {
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
  }
});
