from .models import Application
from .serializers import ApplicationSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class InwardList(APIView):
    def get(self,request):
        Applications=Application.objects.filter(state=0)
        serializer=ApplicationSerializer(Applications,many=True)
        return Response(serializer.data)
    

class OutWardList(APIView):
    def get(self,request):
        Applications=Application.objects.filter(state=1)
        serializer=ApplicationSerializer(Applications,many=True)
        return Response(serializer.data)

class ApplicationData(APIView):
    def get(self,request,pk):
        Applications = Application.objects.get(id=pk)
        serializer=ApplicationSerializer(Applications)
        return Response(serializer.data)

class InwardCreate(APIView):
    def post(self,request):
        Application=ApplicationSerializer(data=request.data)
        print("Saving Applica000/api/entriestion")
        if Application.is_valid():
            Application.save()
            return Response(Application.data)
        else:
            print(Application.errors)
            return Response(Application.errors)
        

class ConvertOutward(APIView):
    def put(self,request,pk):
        application=Application.objects.get(id=pk)
        application.state=1
        application.save()
        return Response('converted to outward')

class UpdateApplication(APIView):
    def put(self,request,pk):
        application = Application.objects.get(id=pk)
        serializer=ApplicationSerializer(instance=application,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
