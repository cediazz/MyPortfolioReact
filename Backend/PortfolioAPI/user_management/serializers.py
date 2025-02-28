from django.contrib.auth.models import User
from .models import UserProfile
from django.contrib.auth import password_validation
from django.core.exceptions import ValidationError
from rest_framework import serializers


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'



class UserSerializer(serializers.ModelSerializer):
    
    user_profile = UserProfileSerializer()
    
    class Meta:
        model = User
        fields = ['username', 'password', 'is_staff','is_superuser','user_profile']
    

    def validate_password(self, value):
        try:
            password_validation.validate_password(password=value)
        except ValidationError as e:
            raise serializers.ValidationError(list(e.messages))
        return value
    

    def create(self,validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user