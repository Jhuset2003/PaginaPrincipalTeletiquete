from django.contrib import admin
from apps.AliadosImg.models import AliadosImg
# Register your models here.
@admin.register(AliadosImg)
class AliadosImgAdmin(admin.ModelAdmin):
    list_display = ['id','name','AliadosImg']