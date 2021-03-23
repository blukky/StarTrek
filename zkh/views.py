from django.shortcuts import render
from django.http import JsonResponse
import requests as r
# from selenium import webdriver
from bs4 import BeautifulSoup as bs
from .forms import Calc
# Create your views here.


def index(request):
    page = r.get('https://ria.ru/').content
    page = bs(page, 'lxml')
    news = list()
    title = page.find('div', class_='cell cell-list m-title')
    for i in title.find_all('a', class_='cell-list__item-link color-font-hover-only'):
        news.append((i.get('title'),i.get('href')))
    return render(request, 'base.html', {'news':news})

def regul(request):
    return render(request, 'norm_basa.html')

def calculater(request):
    return  render(request, 'calculater.html')

def about(request):
    return render(request, 'about.html')


def alg(request):
    if request.method == "POST":
        data = dict()
        data['price'] = 0
        return JsonResponse(data)