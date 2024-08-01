from django.db import models
from datetime import datetime



class Application(models.Model):
    id=models.AutoField(primary_key=True)
    roll_number=models.CharField(max_length=100, default=None)
    time=models.DateTimeField(default=datetime.now, blank=True)
    name=models.CharField(max_length=100, default=None)
    department=models.CharField(max_length=100, default=None)
    subject=models.CharField(max_length=300, default=None)
    remarks=models.TextField(default=None)
    application_document=models.CharField(max_length=100, default=None)
    
    def __str__(self):
       return self.name
