from django.urls import path
from .views import CurriculumListView

urlpatterns = [
    path('list-cv', CurriculumListView.as_view(), name='list-cv'),
]