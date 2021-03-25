from django.shortcuts import render
from django.http import JsonResponse
import requests as r
# from selenium import webdriver
from bs4 import BeautifulSoup as bs
from .forms import Calc
# Create your views here.


def index(request):
    page = r.get('https://rg.ru/tema/obshestvo/ekologija/').content
    page = bs(page, 'lxml')
    news = list()
    title = page.find('div', class_='b-news-inner__list')
    for i in title.find_all('a', class_='b-link b-link_title')[:5]:
        image = r.get("https://rg.ru"+i.get('href')).content
        image = bs(image, 'lxml')
        url = image.find('img', class_='b-material-img__img')
        if url == None:
            url = ""
            news.append((i.text, "https://rg.ru"+i.get('href'), url))
        else:
            news.append((i.text, "https://rg.ru"+i.get('href'), url.get('src')))
    return render(request, 'base.html', {'news':news})

def regul(request):
    return render(request, 'norm_basa.html')

def calculater(request):
    return  render(request, 'calculater.html')

def about(request):
    return render(request, 'about.html')

def mapkart(request):
    return render(request, 'map.html')


def alg(request):
    if request.method == "POST":
        data = dict()
        data['price'] = 0
        return JsonResponse(data)