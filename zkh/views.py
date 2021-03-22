from django.shortcuts import render
from selenium import webdriver
from bs4 import BeautifulSoup as bs
# Create your views here.


def index(request):
    # option = webdriver.ChromeOptions()
    # option.add_argument('--headerless')
    # driver = webdriver.Chrome(executable_path='zkh/static/model/chromedriver.exe', options=option)
    # driver.get("https://yandex.ru/")
    # main_page = driver.find_element_by_tag_name("html")
    # page = main_page.get_attribute("innerHTML")
    # page = bs(page, 'lxml')
    # print(page.find_all(class_='news__item-content '))
    return render(request, 'base.html')

def regul(request):
    return render(request, 'norm_basa.html')