from django.db import models

# Create your models here.

class AliadosImg(models.Model):
    name = models.CharField(max_length=100)
    AliadosImg= models.ImageField(upload_to='Media/AliadosImg')
    parent = models.ForeignKey(
        'self', related_name='children' , on_delete = models.CASCADE , blank=True , null=True
    )

    def __str__(self):
        return self.AliadosImg
    def get_Aliados_Img(self):
        if self.AliadosImg:
            return self.AliadosImg.url
        return''