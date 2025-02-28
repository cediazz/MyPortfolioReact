from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    profession = models.CharField(max_length=256,verbose_name='profesión')
    skills = models.CharField(max_length=256,verbose_name='habilidades')
    about_me = models.TextField(verbose_name='acerca de mi')
    image = models.ImageField(upload_to='user_images',blank=True,verbose_name='imagen del usuario')
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile', verbose_name='usuario')

    def __str__(self):
        return self.user.username
    
    class Meta:
        verbose_name = 'Perfil del usuario'
