from django.db import models


class ClassName(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self) -> str:
        return self.name

        

class Category(models.Model):
    name =      models.CharField(max_length=20 , unique=True)
    src =       models.ImageField(upload_to = 'static/categories/icons' , verbose_name='src')
    class_name =models.ForeignKey(ClassName , on_delete=models.CASCADE , related_name='categories' , null=True)

    def __str__(self) -> str:
        return self.name



class Product(models.Model):
    title = models.CharField(max_length=200)
    src = models.ImageField(upload_to = 'static/products/images' , verbose_name='src' , null = True)
    price = models.DecimalField(max_digits=14 , decimal_places=2)
    category = models.ForeignKey(Category , on_delete=models.CASCADE , related_name='products')

    def __str__(self) -> str:
        return self.title