from django.db import models

class Goal(models.Model):
    name = models.CharField(max_length=255, blank=False)
    complete = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)