document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form'); // Выбираем форму по тегу <form>
    var submitButton = document.querySelector('button[type="submit"]'); // Выбираем кнопку отправки формы

    form.addEventListener('input', function() {
        var inputs = form.querySelectorAll('input');
        var isFormValid = true;
        inputs.forEach(function(input) {
            if (!input.checkValidity()) {
                isFormValid = false;
            }
        });
        if (isFormValid) {
            submitButton.classList.add('ready');
        } else {
            submitButton.classList.remove('ready');
        }
    });
});
