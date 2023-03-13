from django.shortcuts import render
from rest_framework import viewsets
from .serializers import GeneralLedgerSerializer, LedgerSerializer, TransactionSerializer
from .models import GeneralLedger, Ledger, Transaction


class GeneralLedgerView(viewsets.ModelViewSet):
    queryset = GeneralLedger.objects.all()
    serializer_class = GeneralLedgerSerializer


class LedgerView(viewsets.ModelViewSet):
    queryset = Ledger.objects.all()
    serializer_class = LedgerSerializer


class TransactionView(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
