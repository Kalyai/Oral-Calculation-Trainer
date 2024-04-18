// game.js

function displayNumbers() {
    var index = 0;
    var intervalId = setInterval(function() {
        if (index < numbers.length) {
            document.getElementById('number').innerText = numbers[index++];
            setTimeout(function() {
                document.getElementById('number').innerText = '';
            }, displayTime * 1000); // Отображаем число на указанное время
        } else {
            clearInterval(intervalId);
            // По прошествии totalTime секунд показываем кнопку
            setTimeout(function() {
                document.getElementById('result_button').style.display = 'block';
            }, totalTime * 1000);
        }
    }, (displayTime + delayTime) * 1000); // Учитываем задержку и время отображения числа
}

window.onload = function() {
    displayNumbers();

    // Обработчик клика по кнопке "Результат"
    document.getElementById('result_button').addEventListener('click', function() {
        window.location.href = '/result'; // Перенаправление на страницу result.html
    });
};
