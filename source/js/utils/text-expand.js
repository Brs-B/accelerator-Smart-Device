let expand = document.querySelector('.about-company__expand');
let text = document.querySelector('.about-company__text');

expand.onclick = function () {
  text.classList.toggle('about-company__text--expand');
};
