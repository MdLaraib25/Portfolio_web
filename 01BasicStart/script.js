
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nave-list');
  if (menuBtn && navList) {
    menuBtn.addEventListener('click', function() {
      navList.classList.toggle('open');
    });
  }
});
