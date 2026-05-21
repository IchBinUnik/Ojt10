from django.db import models

class Product(models.Model):

    name = models.CharField(max_length=200)

    description = models.TextField()

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    image = models.ImageField(
        upload_to='products/'
    )

    def __str__(self):
        return self.name

class Order(models.Model):

    product_name = models.CharField(max_length=200)

    customer_name = models.CharField(max_length=200)

    phone = models.CharField(max_length=20)

    address = models.TextField()

    ordered_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.customer_name