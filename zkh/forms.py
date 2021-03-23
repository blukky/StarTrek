from django import forms


class Calc(forms.Form):
    PRINADLEZ = (
        ("МВД", "МВД"),
        ("Военнослужащий", "Военнослужащий"),
        ("Сотрудник", "Сотрудник")
    )
    city = forms.CharField(label="Место службы".upper(), widget=forms.TextInput(attrs={'class':'form-control','placeholder':'г. Москва', 'style': 'border-radius: 5px;'}))
    visluga = forms.CharField(label='Выслуга лет'.upper(), widget=forms.NumberInput(attrs={'class':'form-control', 'placeholder':'5.6 лет', 'style': 'border-radius: 5px;'}))
    shouse = forms.CharField(label='Площадь жилья'.upper(), widget=forms.NumberInput(attrs={'class':'form-control', 'placeholder':'30', 'style': 'border-radius: 5px;'}))
    prinadlez = forms.ChoiceField(label='Отношение к службе'.upper(), choices=PRINADLEZ)
    area = forms.CharField(label='Желаемый регион жилья'.upper(), widget=forms.NumberInput(attrs={'class':'form-control', 'placeholder':'Ленинградская обл.', 'style': 'border-radius: 5px;'}))
    family = forms.CharField(label='Количество членов семьи'.upper(), widget=forms.NumberInput(attrs={'class':'form-control', 'style': 'border-radius: 5px;', 'placeholder':'2'}))
    dop_s_house = forms.CharField(label='Площадь жилья'.upper(), widget=forms.NumberInput(attrs={'class':'form-control', 'placeholder':'В соответствии ФЗ №76', 'style': 'border-radius: 5px;'}))