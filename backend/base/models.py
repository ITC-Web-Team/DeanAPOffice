from django.db import models

# Create your models here.
class Application(models.Model):
    id=models.AutoField(primary_key=True)
    roll_number=models.CharField(max_length=100, blank=True, default='')
    date = models.DateField(auto_now=True)
    name = models.CharField(max_length=100, blank=True, default='')
    department = models.CharField(max_length=100, blank=True, default='')
    subject= models.CharField(max_length=100, blank=True, default='')
    remarks= models.CharField(max_length=100,   blank=True, default='')
    application_document=models.CharField(max_length=100, blank=True, default='')
   
    state=models.IntegerField(choices=[(0,'inward'),(1,'outward')],default=0)

    def __str__(self):
        return self.name
    