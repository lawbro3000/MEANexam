app.controller('newController',  ['$scope','questionsFactory','$location',  function($scope, questionsFactory,$location) {


$scope.questions = {};
$scope.question = {};

console.log($scope.question)

var index = function(){
questionsFactory.index(function(returnedData){
$scope.questions = returnedData;
console.log($scope.questions);
 });
 };
index();

$scope.create = function(){
  questionsFactory.create($scope.question, function(){
   console.log("Before create function");
   $location.url('/')
   console.log("After create function");
  });
};

$scope.Remove_question = function(id){
  console.log('in the DeleteController');
  questionsFactory.delete(id, function(data){
  index();
  $location.url('/')

  });

};

}]);

