from django.contrib import admin

# models
from .models import Category, ClassName,Product


admin.site.register(Category)
admin.site.register(Product)
admin.site.register(ClassName)