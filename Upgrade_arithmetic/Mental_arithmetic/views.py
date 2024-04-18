import random
from threading import Timer

from django.shortcuts import render, redirect
from .forms import CalculationForm, ResultForm


def calculate(request):
    if request.method == 'POST':
        form = CalculationForm(request.POST)
        if form.is_valid():
            min_number = form.cleaned_data['min_number']
            max_number = form.cleaned_data['max_number']
            number_count = form.cleaned_data['number_count']
            delay_between_numbers = form.cleaned_data['delay_between_numbers']
            display_time = form.cleaned_data['display_time']

            request.session['min_number'] = min_number
            request.session['max_number'] = max_number
            request.session['number_count'] = number_count
            request.session['delay_between_numbers'] = delay_between_numbers
            request.session['display_time'] = display_time
        return render(request, 'ready_part.html')

    else:
        form = CalculationForm()
    return render(request, 'calculation_form.html', {'form': form})

def start_game(request):
    min_number = request.session.get('min_number')
    max_number = request.session.get('max_number')
    number_count = request.session.get('number_count')
    delay_between_numbers = request.session.get('delay_between_numbers')
    display_time = request.session.get('display_time')

    numbers = [random.randint(min_number, max_number) for _ in range(number_count)]

    result = sum(numbers)
    request.session['result'] = result

    total_time = (display_time + delay_between_numbers) * number_count - delay_between_numbers
    request.session['total_time'] = total_time
    Timer(total_time, lambda: redirect('result')).start()

    return render(request, 'start_game.html', {'numbers': numbers, 'display_time': display_time, 'delay_between_numbers': delay_between_numbers})

def result(request):
    if request.method == 'POST':
        form = ResultForm(request.POST)
        if form.is_valid():
            user_answer = form.cleaned_data['user_answer']
            correct_answer = request.session.get('result')
            if user_answer == correct_answer:
                return redirect('win')
            else:
                request.session['correct_answer'] = correct_answer
                return redirect('lose')
    else:
        form = ResultForm()
    return render(request, 'result.html', {'form': form})

def win(request):
    return render(request, 'win.html')

def lose(request):
    return render(request, 'lose.html')
