from django.db import models


class GeneralLedger(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return str(self.name)


class Ledger(models.Model):
    general_ledger = models.ForeignKey(GeneralLedger, on_delete=models.CASCADE)
    id = models.CharField(max_length=20, primary_key=True)
    balance = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return str(self.id)


class Transaction(models.Model):
    ledger = models.ForeignKey(Ledger, on_delete=models.CASCADE)
    date = models.DateField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    txn_type = models.CharField(max_length=20)
    category = models.CharField(max_length=50)
    subcategory = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return str(self.ledger.id)
