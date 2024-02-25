from django.db import models
import datetime
from accounts.models import UserAccount
# from ..accounts.models import UserAccount



class Task(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    date = models.DateField() 
    


    
