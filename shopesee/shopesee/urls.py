# shopesee/urls.py

from django.contrib import admin
from django.urls import path
from product.views import home  # Import the home view function specifically

urlpatterns = [
    path('', home, name='home'),
    # Add more URL patterns as needed
]
