from django.contrib import admin
from .models import GeneralLedger, Ledger, Transaction


# create a class for the admin-model integration
class GeneralLedgerAdmin(admin.ModelAdmin):
    list_display = ('name',)


class LedgerAdmin(admin.ModelAdmin):
    list_display = ('general_ledger', 'id', 'balance')


class TransactionAdmin(admin.ModelAdmin):
    list_display = ('ledger', 'date', 'amount', 'txn_type',
                    'category', 'subcategory', 'description')


admin.site.register(GeneralLedger, GeneralLedgerAdmin)
admin.site.register(Ledger, LedgerAdmin)
admin.site.register(Transaction, TransactionAdmin)
