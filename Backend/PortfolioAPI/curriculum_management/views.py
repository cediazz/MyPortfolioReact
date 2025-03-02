from rest_framework import generics
from .serializers import CurriculumListSerializer
from .models import Curriculum

class CurriculumListView(generics.ListAPIView):
    queryset = Curriculum.objects.all()[:1]
    serializer_class = CurriculumListSerializer

