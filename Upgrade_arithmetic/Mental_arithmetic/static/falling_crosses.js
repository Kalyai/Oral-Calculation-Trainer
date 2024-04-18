// Функция для создания и анимации падающих крестиков
function createFallingCross() {
    // Создание элемента для крестика
    const crossElement = document.createElement('div');
    crossElement.classList.add('cross');
    crossElement.textContent = '✖'; // Символ крестика
    document.getElementById('falling-crosses-container').appendChild(crossElement);

    // Установка начальной позиции по горизонтали в случайное место на странице
    const initialX = Math.random() * window.innerWidth;
    crossElement.style.left = `${initialX}px`;

    // Анимация падения
    const animation = crossElement.animate([
        { transform: `translateY(-100vh)`, opacity: 1 }, // Начальное положение - за пределами экрана сверху
        { transform: `translateY(${window.innerHeight}px)`, opacity: 0 } // Конечное положение - за пределами экрана снизу
    ], {
        duration: Math.random() * 3000 + 2000, // Длительность анимации от 2 до 5 секунд
        easing: 'linear', // Линейная анимация
        fill: 'forwards' // Анимация останавливается на последнем кадре
    });

    // По завершении анимации удалить элемент из DOM
    animation.onfinish = () => {
        crossElement.remove();
    };
}

// Запуск анимации создания падающих крестиков каждые 200 миллисекунд
setInterval(createFallingCross, 200);
