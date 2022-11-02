from django.contrib import admin
from apps.PayImages.models import PayImages
# Register your models here.
@admin.register(PayImages)
class PayImagesAdmin(admin.ModelAdmin):
    list_display = ['id','name','PayImages']