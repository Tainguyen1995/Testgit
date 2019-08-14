var app = angular.module("messageApp",[]);
app.controller("Hellocontroller",function Hellocontroller($scope,$timeout){
$scope.startTime=new Date();
$scope.text = "Hello";
$scope.elapsed=0;

$scope.$watch('elapsed',function(){
    if($scope.elapsed >0){
        $scope.text = $scope.text+ "world";
        
    }
});
$timeout(function(){
    var delta = (new Date().getTime()- 
    $scope.startTime.getTime());
    $scope.elapsed = Math.round(delta / 1000);
    //$scope.$apply();
    }, 3000);
});