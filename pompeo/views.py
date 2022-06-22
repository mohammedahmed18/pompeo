from .models import Category, Product
from django.http import JsonResponse

def handle_categories(req):
    if req.method == 'GET':
        # return all categories as json
        categories = Category.objects.all()
        cats = []
        for cat in categories:
            cats.append({'id' :cat.pk ,'title' : cat.name , 'class' : cat.class_name.name , 'src' : '/'+str(cat.src)})
        return JsonResponse(cats , safe=False)



def handle_products(req):
    if req.method == 'GET':
        # return all products as json
        products = Product.objects.all()
        products_json = []
        for p in products:
            products_json.append(
                {
                'id' : p.pk,
                'title' : p.title,
                'src' : '/' + str(p.src),
                'price' : p.price,
                'category' : str(p.category.name)   
                }
            )
        return JsonResponse(products_json , safe=False)

def get_product_by_id(req,id):
    p = Product.objects.get(pk = id)
    return JsonResponse({
        'id' : p.pk,
        'title' : p.title,
        'src' : '/' + str(p.src),
        'price' : p.price,
        'category' : str(p.category.name)
    })

def get_products_by_category(req , name):
    cat = Category.objects.get(name = name)
    products = cat.products
    print(products)
    products_json = []
    for p in products.all():
        products_json.append(
            {
                'id' : p.pk,
                'title' : p.title,
                'src' : '/' + str(p.src),
                'price' : p.price,
                'category' : str(p.category.name)
            }
        )

    return JsonResponse(products_json , safe = False)


