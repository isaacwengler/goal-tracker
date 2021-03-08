from rest_framework import routers
from .api import GoalViewSet

router = routers.DefaultRouter()
router.register('api/goals', GoalViewSet, 'goals')

urlpatterns = router.urls