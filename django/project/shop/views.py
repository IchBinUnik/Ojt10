from django.shortcuts import render
from django.shortcuts import get_object_or_404

from .models import Product

def shop(request):
    products = Product.objects.all()
    return render(request,'shop/shop.html',{'products': products})



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

from .models import Order

def order_page(request, product_id):

    product = get_object_or_404(Product, id=product_id)

    if request.method == "POST":

        customer_name = request.POST['customer_name']
        phone = request.POST['phone']
        address = request.POST['address']

        Order.objects.create(
            product_name=product.name,
            customer_name=customer_name,
            phone=phone,
            address=address
        )

        return render(request, 'home/success.html')

    return render(request, 'home/order.html', {
        'product': product
    })