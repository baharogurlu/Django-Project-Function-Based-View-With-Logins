from django import forms
from django.core import validators

from my_app.models import Topic, WebPage, UserProfileInfo
from django.contrib.auth.models import User

#input alanları için validation fonksiyonları yazılabilir.

def check_for_z(value):
    if value[0].lower() != 'z':
        raise forms.ValidationError("you need start with z")

#name kısmının z harfi ile başlaması için validasyon metodu
class FormName(forms.Form):
    name = forms.CharField(validators=[check_for_z])
    email = forms.EmailField()
    verify_email = forms.EmailField(label='Enter your email please')
    text = forms.CharField(widget=forms.Textarea)
    botcatcher = forms.CharField(required=False, widget=forms.HiddenInput, validators=[validators.MaxLengthValidator(0)])

#e-maillerin validasyonu sağlanır. Verify işlemi
    def clean(self):
        all_clean_data = super().clean()
        email = all_clean_data['email']
        vmail = all_clean_data['verify_email']

        if email != vmail:
            raise forms.ValidationError("PLEASE MATCH EMAİL VERIFY")


#Bot yakalayıcı
    def clean_botcatcher(self):
        botcatcher = self.cleaned_data['botcatcher']
        if len(botcatcher) > 0:
            raise  forms.ValidationError("Gothca Bot")
        else:
            return botcatcher






#MODEL FORMLAR##################################################
class NewTopicForm(forms.ModelForm):
    class Meta:
        model = Topic
        fields = '__all__'


class NewWebPages(forms.ModelForm):
    class Meta:
        model = WebPage
        fields = '__all__'




#USER OPERATIONS

class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())

    class Meta():
        model = User
        fields = ('username', 'email', 'password')




class UserProfileInfoForm(forms.ModelForm):
    portfolio = forms.URLField(required=False)
    picture = forms.ImageField(required=False)

    class Meta():
        model = UserProfileInfo
        fields = ('portfolio', 'picture')
        exclude = ('user', )



