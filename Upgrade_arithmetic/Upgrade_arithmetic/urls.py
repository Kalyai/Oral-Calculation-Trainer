from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('Mental_arithmetic.urls')),
    path("admin/", admin.site.urls)
]
