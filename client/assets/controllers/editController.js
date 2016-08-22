app.controller('editController',  ['$scope','questionsFactory','$location', '$routeParams', function($scope, questionsFactory,$location,$routeParams) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/

$scope.question = {};

console.log($scope.question)

var index = function(){
questionFactory.show($routeParams.id, function(returnedData){
   var date = new Date(returnedData.questdate)
   date.toLocaleDateString('en-US')
   returnedData.dob = date

   $scope.question = returnedData;
   console.log(returnedData)

 });
 };
index();

$scope.edit = function(){
   questionsFactory.edit($scope.question, function(){
  $location.url('/')


  });

};

}]);

