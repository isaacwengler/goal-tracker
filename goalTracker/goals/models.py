from django.db import models

class Goal(models.Model):
    name = models.CharField(max_length=255)
    complete = models.BooleanField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)