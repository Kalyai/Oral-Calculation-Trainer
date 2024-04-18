// Функция для создания и анимации падающих цифр
function createFallingNumber() {
  // Создание элемента для цифры
  const numberElement = document.createElement('div');
  numberElement.classList.add('falling-number');
  numberElement.textContent = Math.floor(Math.random() * 100); // Генерация случайной цифры от 0 до 9
  document.getElementById('falling-numbers-container').appendChild(numberElement);

  // Установка начальной позиции по горизонтали в случайное место на странице
  const initialX = Math.random() * window.innerWidth;
  numberElement.style.left = `${initialX}px`;

  // Анимация падения
  const animation = numberElement.animate([
    { transform: `translateY(-100vh)`, opacity: 1 }, // Начальное положение - за пределами экрана сверху
    { transform: `translateY(${window.innerHeight}px)`, opacity: 0 } // Конечное положение - за пределами экрана снизу
  ], {
    duration: Math.random() * 3000 + 2000, // Длительность анимации от 2 до 5 секунд
    easing: 'linear', // Линейная анимация
    fill: 'forwards' // Анимация останавливается на последнем кадре
  });

  // По завершении анимации удалить элемент из DOM
  animation.onfinish = () => {
    numberElement.remove();
  };
}

// Запуск анимации создания падающих цифр каждые 200 миллисекунд
setInterval(createFallingNumber, 200);
