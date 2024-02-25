from rest_framework.serializers import ModelSerializer
from .models import Task
from accounts.models import UserAccount



class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
        
