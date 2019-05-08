# Django-Project-Function-Based-View-With-Logins
Django Project Function Based View(Form, List, Login, Registration)

İçindekiler
Proje Oluşturmak	1
Projeyi çalıştırmak	1
Migration nedir?	2
Uygulama  Ekleme	2
Oluşturulan first_app içerisinde neler bulunuyor?	2
Poll adında bir app eklemek için:	2
Uygulamayı çalıştırmak için mysite içerisine gidip:	2
Model eklendikten sonra polls app i için :	2
POPULATING DATABASE:	2
Templates Dosyası Oluşturma	3
Static Dosyası Oluşturma	3
Yeni bir model oluşturulduğunda veritabanını migrate etmek için;	3
Veri Tabanına Obje Eklemek İçin	4
Objeleri Admin.py İçersine Register Etme	4
Population Scripts	4
Handler içinde obje listesi nasıl Alınır?	4
Form Oluşturma	4




Proje Oluşturmak 
•	django-admin startproject mysite (mysite projenin adı)
•	Django uygulamalar ve konfigurasyonlardan oluşur, bunların tamamı bizim web projemizi kapsar.
•	Örneğin, register, comment, poll app gibi hepsi bir parçacık ve bütünü oluşur.
•	Django projeleri başka django projeleri ile entegre çalışabilir.
•	__init__.py projenin içinde bi package olarak ele alınmasını sağlar.
•	Settings.py projenin ayarları, konfigürasyon  burada yer alır.
•	Urls.py projenin url’lerinin bulunduğu yerdir.
•	Wsgi.py proje deploy edilirken kullanılacaktır. Web Server Gateway Interface.
•	Manage.py projeyi built etmemizi sağlayacaktır.
Projeyi çalıştırmak
•	python manage.py runserver 

Migration nedir?
•	Veritabanındaki güncelleme ile ilgilidir.
•	Tasarımları veritabanına dönüştürmeyi veya dönüşümü sağlar.
Uygulama  Ekleme
•	python manage.py startapp first_app
•	first_app i settings içindeki installed_app altına eklenir.
Oluşturulan first_app içerisinde neler bulunuyor?
•	admin.py modeller oluşturulur ve admin arayüzünde kullanılır.
•	apps.py app in konfigürasyon ayarları vardır.
•	models.py dataları tutmak için depodur, kısacası data modelidir.
•	test.py uygulamanın fonksiyonlarını test etmek için kullanılır.
•	views.py  handler fonsiyonları buradadır, request ve responsların işlendiği yerdir.
•	Migrations dosyası modellerle ilgili olan veritabanı bilgileri bulunur.
•	


Poll adında bir app eklemek için:
python manage.py startapp polls
Uygulamayı çalıştırmak için mysite içerisine gidip:
  python manage.py runserver
Model eklendikten sonra polls app i için :
python manage.py makemigrations polls
mysite içerisindeki settings.py içerisine INSTALLED_APPS Altına ‘polls’, ifadesi eklenir. Bu işlemden sonra 
1-)python manage.py makemigrations polls
2-)python manage.py migrate
 komutu çalıştırılır. Migrations dosyası içerisinde initial.py adlı file oluşur. Bu file içerisinde oluşturduğunuz modeller gözükür.

POPULATING DATABASE:
1.	python manage.py Shell
2.	>>> import django
3.	>>> django.setup()
4.	>>> from polls.models import Question,Choice
5.	Question.objects.all()
6.	from django.utils import timezone
7.	>>> q=Question(question_text="whats your name",pub_date=timezone.now())
8.	>>> q.save()
9.	>>> Question.objects.all()
10.	exit()

Models.py içerisine 
def __str__(self):
 return self.choice_text


modeller içerisindeki değerleri döndüren metod yazılır. Choice_text bi attributre tır.


Templates Dosyası Oluşturma
•	Html sayfaları için proje_adi/templates/uygulama_app isimlendirmesi şeklinde klasör oluşturulur.
Setting.py içerisine TEMPLATE_DIR = os.path.join(BASE_DIR, "templates")
Şeklinde ifade eklenir. TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATE_DIR, ],
•	TEMPLATE_DIR dosyası içerisindeki html sayfalarının yer alacağı yer tanıtılır.


Static Dosyası Oluşturma
•	STATIC_DIR = os.path.join(BASE_DIR, "static")
•	STATICFILES_DIRS = [
    STATIC_DIR,
]
•	Şeklinde settings.py içerisine eklenir. STATIC dosyalar bu kısımda yer alır. 
•	<link rel="stylesheet" href="{% static 'css/mystyle.css' %}"/>
•	Html sayfası içerisinde style bu şekilde belirtilir.

Yeni bir model oluşturulduğunda veritabanını migrate etmek için;
•	python manage.py migrate
•	eğer sadece bir uygulama üzerinde yapmak ve değişiklikleri görmek istiyorsak;
•	python manage.py makemigrations app1
•	Database üzerindeki tüm modellerin yönetimi için admin arayüzü vardır. Admin kullanıcısı oluşturmak için;
•	Python manage.py createsuperuser
•	Komutundan sonra isim, mail ve parola istenir.
•	class Topic(models.Model):
    topic_name=models.CharField(max_length = 25, unique = True)

class WebPage(models.Model):
    kategoriId = models.ForeignKey(Topic)
    name = models.CharField(max_length=50)
    url = models.URLField

    def __str__(self):
        return self.name
•	yukarıdaki kod ile 2 tane model oluşturuldu. Model oluşturulduktan sonra database migrate edilir. python manage.py migrate

Veri Tabanına Obje Eklemek İçin
•	python manage.py shell
•	from my_app.models import Topic
•	print(Topic.objects.all()) = Topic obje listesi 
•	t =Topic(topic_name="Sosyal Ağlar") // adı sosyal ağlar olan Topic objesi eklendi.
•	t.save() Topic kaydedilir.
•	print(Topic.objects.all()) = Topic obje listesi kayıt işleminden sonra görülebilir.
•	 quit() = çıkış yapılır.

Objeleri Admin.py İçersine Register Etme
•	Admin.py dosyası içine modeller import edilir.
•	from my_app.models import AccessRecord, WebPage, Topic
# Register your models here.
admin.site.register(AccessRecord)
admin.site.register(WebPage)
admin.site.register(Topic)

Population Scripts
•	https://faker.readthedocs.io/en/master/
•	Faker kullanıcılar için fake veriler üretir.	
•	pip install Faker
•	population_first_app.py dosyası içine fake data üreten  kodlar yazdıktan sonra python population_first_app.py komutu ile fake pathler üretilir.
Handler içinde obje listesi nasıl Alınır?
webpages_list = AccessRecord.objects.order_by('date')
date_dict = {'access_records': webpages_list}

Form Oluşturma
Security
pip install bcrypt
pip install django[argon2]

Resimlerle işlem yapmak dosya yüklemek için;
Pip install pillow 

