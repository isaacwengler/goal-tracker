from django.db import models
from django.contrib.auth.models import User


class Goal(models.Model):
    name = models.CharField(max_length=255, blank=False)
    complete = models.BooleanField(default=False)
    owner = models.ForeignKey(User, related_name='goals', on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)