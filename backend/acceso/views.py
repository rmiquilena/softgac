from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
from rest_framework import status


from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.views.decorators.csrf import csrf_exempt


# Models views here.
from .models import CustomUser
from .serializers import CustomUserSerializers


# Create your views here.
class LoginView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()
    
    @csrf_exempt
    def post(self, request):
        
        user = get_object_or_404(CustomUser, email=request.data['username'])
        
        if not user.check_password(request.data['password']):
            return Response({"error": "Invalid Password"}, status=status.HTTP_400_BAD_REQUEST)
        
        token, created = Token.objects.get_or_create(user=user)
        
        
        
        
        serializer = CustomUserSerializers(instance=user)
        
        return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_200_OK)
    

@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])     
class ProfileView(APIView):
        
    def post(self, request):
        return Response("Esta Logeado con {}".format(request.user.email), status=status.HTTP_200_OK)
    