from .models import Project
from rest_framework import serializers


class ProjectListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
    

    