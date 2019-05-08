import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'first_project.settings')

import  django

django.setup()

#FAKE POP SCRIPTS

import random
from my_app.models import AccessRecord,Topic,WebPage
from faker import Faker


fakegen = Faker()
topics = ['News', 'Games', 'Search', 'Market', 'Computer']

def add_topic():
    t = Topic.objects.get_or_create(topic_name=random.choice(topics))[0]
    t.save()
    return t

def populate(N=5):
    for entry in range(N):
        #get topic for entry
        top = add_topic()

        #generate fake data for this entry
        fake_url = fakegen.url()
        fake_date = fakegen.date()
        fake_name = fakegen.company()

        #create new webpage entry

        webpg = WebPage.objects.get_or_create(topicId=top, url=fake_url, name=fake_name)[0]

        #create fake access record for that webpage

        acc_rec = AccessRecord.objects.get_or_create(name=webpg, date=fake_date)[0]

if __name__ == '__main__':
    print('Populating script!')
    populate(20)
    print('Populate created!')





