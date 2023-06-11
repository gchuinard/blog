from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def hello_view(request):
    print("coucou le back")
    return JsonResponse({"message": "Coucou le back"})
