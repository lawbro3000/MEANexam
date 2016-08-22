app.controller('showController',  ['$scope','$routeParams','questionsFactory','$location',  function($scope,$routeParams,questionsFactory,$location) {


   console.log("Inside the show Controller")
   $scope.friend={}


   $scope.show = function(){
    questionsFactory.show($routeParams.id, function(returnedData){
    $scope.question = returnedData;
    console.log(returnedData)
  

     });
   }
   $scope.show()



   }]);

