from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated , AllowAny
from rest_framework.response import Response
from .models import Task
from rest_framework import status
from .serializers import TaskSerializer
from django.contrib.auth.models import Permission




@api_view(['GET'])
@permission_classes([AllowAny])
def getRoutes(request):
    return Response("Hello there!")



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getTask(request):
    task= Task.objects.all()
    serializer = TaskSerializer(task, many=True)
    return Response(serializer.data)



@api_view(['POST'])
@permission_classes([])
def createTask(request):
 
    try:
        data = request.data
        print(data)
        serializer = TaskSerializer(data=data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)