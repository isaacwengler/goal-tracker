from goals.models import Goal
from rest_framework import viewsets, permissions
from .serializers import GoalSerializer

class GoalViewSet(viewsets.ModelViewSet):
    queryset = Goal.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = GoalSerializer