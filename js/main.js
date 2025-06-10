const icons = document.querySelectorAll('.icon');
const mobileBlock = document.querySelector('.mobile-block');
const PADDING_OFFSET = 30;
const accordionItems = document.querySelectorAll('.reference__question');

// Функция для закрытия всех открытых элементов аккордеона
const closeAllAccordions = () => {
  accordionItems.forEach(item => {
    const content = item.querySelector('.questions__content');
    if (content?.classList.contains('open')) {
      content.classList.remove('open');
      content.style.maxHeight = null;
      item.classList.remove('open');
    }
  });
};

// Обработчик для аккордеона
accordionItems.forEach(item => {
  // Проверяем наличие элемента
  if (!item) return;

  item.addEventListener('click', (event) => {
    // Игнорируем клики по содержимому
    if (event.target.closest('.questions__content')) return;

    const content = item.querySelector('.questions__content');
    // Проверяем наличие содержимого
    if (!content) return;

    const isOpen = content.classList.contains('open');

    // Закрываем все открытые элементы
    closeAllAccordions();

    // Если элемент не открыт, открываем его
    if (!isOpen) {
      content.classList.add('open');
      item.classList.add('open');
      // Используем setTimeout для плавной анимации
      setTimeout(() => {
        content.style.maxHeight = `${content.scrollHeight + PADDING_OFFSET}px`;
      }, 0);
    }
  });
});

if (icons.length && mobileBlock) {
  icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
      // Предотвращаем всплытие события, чтобы не конфликтовать с аккордеоном
      event.stopPropagation();
      icon.classList.toggle('open');
      mobileBlock.classList.toggle('active');
    });
  });
}

// Обработка прокрутки внутри меню
mobileBlock.addEventListener('touchmove', (event) => {
  // Разрешаем прокрутку внутри меню, если оно длинное
  if (mobileBlock.scrollHeight > mobileBlock.clientHeight) {
    return;
  }
  // Блокируем прокрутку, если меню не прокручивается
  event.preventDefault();
}, { passive: false });

// Обработчик для закрытия баннера cookie
const closeButton = document.getElementById('close-btn');
const cookieBanner = document.getElementById('cookie-banner');

if (closeButton && cookieBanner) {
  closeButton.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
    // Сохраняем состояние в localStorage (опционально)
    localStorage.setItem('cookieBannerClosed', 'true');
  });
}
