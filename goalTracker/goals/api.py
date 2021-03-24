from goals.models import Goal
from rest_framework import viewsets, permissions
from .serializers import GoalSerializer

class GoalViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = GoalSerializer

    def get_queryset(self):
        return self.request.user.goals.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)