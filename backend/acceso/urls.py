from unicodedata import name
from django.urls import path
from . import views

app_name = 'acceso'


urlpatterns = [

    path('login/', views.LoginView.as_view(), name='auth_login'),
    path('profile/', views.ProfileView.as_view(), name='auth_profile'),
]