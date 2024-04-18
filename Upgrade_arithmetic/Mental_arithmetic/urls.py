from django.urls import path
from . import views

urlpatterns = [
    path('', views.calculate, name='index'),
    path('ready/', views.start_game, name='start_game'),
    path('result/', views.result, name='result'),
    path('win/', views.win, name='win'),
    path('lose/', views.lose, name='lose')
]
