from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Topic(models.Model):
    topic_name = models.CharField(max_length=25, unique=True)

    def __str__(self):
        return self.topic_name

class WebPage(models.Model):
    topicId = models.ForeignKey(Topic, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    url = models.URLField(unique=True)

    def __str__(self):
        return self.name

class AccessRecord(models.Model):
    name = models.ForeignKey(WebPage, on_delete=models.CASCADE)
    date = models.DateField()

    def __str__(self):
        return str(self.date)


class UserProfileInfo(models.Model):
    #create relation (dont inherith from User)
    user = models.OneToOneField(User, on_delete=models.PROTECT)

    portfolio = models.URLField(blank=True)
    picture = models.ImageField(upload_to='profile_pics', blank=True)

    def __str__(self):
        #django.contrib.auth.models User!
        return self.user.name