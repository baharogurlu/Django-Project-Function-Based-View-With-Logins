from django.conf.urls import url
from my_app import views

#template tagging !!! important
#Html sayfalarında kullanılır.
app_name = 'my_app'

urlpatterns=[
    url(r'^$', views.index, name='index'),
    url(r'/help', views.help, name='help'),
    url(r'/formpage', views.form_name_views, name='form_name'),
    url(r'/listTopic', views.listTopic, name='listTopic'),
    url(r'/listWebPage', views.listWebPage, name='listWebPage'),
    url(r'/listFilter', views.filterExp, name='listFilter'),
    url(r'^register/$', views.register, name='register'),
    url(r'/user_login', views.user_login, name='user_login'),
]