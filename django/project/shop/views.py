from django.shortcuts import render
from django.shortcuts import get_object_or_404

from .models import Product

def shop(request):
    products = Product.objects.all()
    return render(
        request,
        'shop/shop.html',
        {'products': products}
    )



# def product_detail(request, id):

#     product = get_object_or_404(
#         Product,
#         id=id
#     )

#     return render(
#         request,
#         'shop/product_detail.html',
#         {'product': product}
#     )