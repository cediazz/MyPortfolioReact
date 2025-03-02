from django.db import models

class Curriculum(models.Model):
    file = models.FileField(upload_to='cv', verbose_name="Archivo")
    
    class Meta:
        verbose_name = "CV"
       
