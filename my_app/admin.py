from django.contrib import admin

from my_app.models import AccessRecord, WebPage, Topic, UserProfileInfo
# Register your models here.


admin.site.register(AccessRecord)
admin.site.register(WebPage)
admin.site.register(Topic)
admin.site.register(UserProfileInfo)