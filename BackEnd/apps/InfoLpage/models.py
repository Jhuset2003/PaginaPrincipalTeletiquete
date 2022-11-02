from django.db import models
from apps.AliadosImg.models import AliadosImg
from apps.PayImages.models import PayImages


# Create your models here.
class InfoLpage(models.Model):
    class SecHeader(models.Model):
        title = models.CharField(max_length=200)
        subTitle = models.CharField(max_length=150)
        bacIcon = models.ImageField()
    class payMethos(models.Model):
        Pay_Images = models.ForeignKey(
            PayImages, 
            on_delete = models.CASCADE,
            null = True
        )
    class SecAliados(models.Model):
       Aliados_Img = models.ForeignKey(
            AliadosImg,
            on_delete = models.CASCADE,
            null = True
       )
    
        

