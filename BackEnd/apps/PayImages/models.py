from django.db import models

# Create your models here.

class PayImages(models.Model):
    name = models.CharField(max_length=100)
    PayImages= models.ImageField(upload_to='Media/PayImages')
    parent = models.ForeignKey(
        'self', related_name='children' , on_delete = models.CASCADE , blank=True , null=True
    )

    def __str__(self):
        return self.PayImages
    def get_Pay_Images(self):
        if self.PayImages:
            return self.PayImages.url
        return''