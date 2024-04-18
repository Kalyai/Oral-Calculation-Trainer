from django import forms

class CalculationForm(forms.Form):
    min_number = forms.IntegerField(label='Минимальное число', min_value=-10**7, max_value=10**7)
    max_number = forms.IntegerField(label='Максимальное число', min_value=-10**7, max_value=10**7)
    number_count = forms.IntegerField(label='Количество чисел', min_value=1, max_value=100)
    delay_between_numbers = forms.FloatField(label='Задержка между числами', min_value=10**-3, max_value=10)
    display_time = forms.FloatField(label="Время показа чисел", min_value=10**-6, max_value=10)

class ResultForm(forms.Form):
    user_answer = forms.IntegerField(label="Введите результат")
