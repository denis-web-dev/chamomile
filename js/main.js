const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});


document.getElementById('close-btn').addEventListener('click', function () {
  document.getElementById('cookie-banner').style.display = 'none';
  // Можно сохранить в localStorage или cookie, что пользователь закрыл баннер
});
