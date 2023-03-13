from rest_framework import serializers
from .models import GeneralLedger, Ledger, Transaction


class GeneralLedgerSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneralLedger
        fields = ('id', 'name')


class LedgerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ledger
        fields = ('general_ledger', 'id', 'balance')


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ('id', 'ledger', 'date', 'amount', 'txn_type',
                  'category', 'subcategory', 'description')

    # returns ledger object in GET requests
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['ledger'] = LedgerSerializer(instance.ledger).data
        return response
