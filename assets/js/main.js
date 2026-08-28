document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('nav-open');
    });
  }

  var hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!hasHover) {
    var photoCards = document.querySelectorAll('.card-photo');
    photoCards.forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('.card-link')) return;
        card.classList.toggle('is-open');
      });
    });
  }
});
