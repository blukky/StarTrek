from django.urls import path
from .views import *


urlpatterns = [
    path('', index, name='home'),
    path('regulatory_framework', regul, name='regul'),
    path('calculater', calculater, name='calc'),
]