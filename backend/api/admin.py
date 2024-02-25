from django.contrib import admin

# Register your models here.
from . models import Task
from accounts.models import UserAccount

admin.site.register(Task)
admin.site.register(UserAccount)