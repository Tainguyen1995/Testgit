var app = angular.module('scopeEvent',[]);
app.controller('MainController',['$scope',function($scope){
    $scope.count= 0 ;
    $scope.$on('myevent',function(){
     $scope.count++;    
    });
}]);
app.controller('childcontroller',['$scope',function($scope){
    $scope.count= 0 ;
    $scope.$on('myevent',function(){
    $scope.count++;    
    }); 
}]);
app.controller('grandchildcontroller',['$scope',function($scope){
    $scope.count= 0 ;
    $scope.$on('myevent',function(){
    $scope.count++;    
    }); 
}]);