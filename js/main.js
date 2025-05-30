const icons = document.querySelectorAll('.icon');
const mobileBlock =document.querySelector('.mobile-block');


icons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    mobileBlock.classList.toggle("active")
  });
});


document.getElementById('close-btn').addEventListener('click', function () {
  document.getElementById('cookie-banner').style.display = 'none';
  // Можно сохранить в localStorage или cookie, что пользователь закрыл баннер
});
