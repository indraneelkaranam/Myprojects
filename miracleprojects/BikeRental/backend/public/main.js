var mainApp=angular.module('mainApp',[]);

mainApp.controller('imageCtrl',function($scope,$http,$window,$location){
	alert("hello")
$scope.getimage=function()
{
	alert($scope.name)
	var data=
	{
	"name":$scope.name
	}

$http.post("http://localhost:7000/image",data).then(function(response){
if(response.data.output.length!=0){
alert(response.data.output);
$scope.image=response.data.output;
}
else{
	alert("Failed")}
})
}
}
)