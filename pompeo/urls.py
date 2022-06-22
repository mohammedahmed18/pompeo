from django.contrib import admin
from django.urls import path
from .views import get_product_by_id, handle_categories ,get_products_by_category,handle_products


urlpatterns = [
    path('admin/', admin.site.urls),
    path('categories' , view=handle_categories),
    path('products' , view=handle_products),
    path('products/<str:id>' , view=get_product_by_id),
    path('categories/<str:name>' , view=get_products_by_category),
]
