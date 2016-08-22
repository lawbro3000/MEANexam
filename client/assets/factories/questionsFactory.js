
app.factory('questionsFactory', ['$http', function($http) {
  var questions = [];
  var question = [];
  function QuestionsFactory(){
    var _this = this;
    
    this.create = function(newquestion,callback){
      $http.post('/questions', newquestion).then(function(returned_data){
        console.log(returned_data);
        if (typeof(callback) == 'function'){
           callback();
        }
      });
    };

    this.make = function(newquestion,callback){
      $http.post('/questions', newquestion).then(function(returned_data){
        console.log(returned_data);
        if (typeof(callback) == 'function'){
           callback();
        }
      });
    };
   
    this.edit = function(newquestion,callback){ 
      $http.post('/questions/edit/' + newquestion._id, newfriend).then(function(returned_data){
        console.log(returned_data);
        if (typeof(callback) == 'function'){
           callback();
        }
      });
    };
    this.index = function(callback){
      
      $http.get('/questions').then(function(returned_data){
        console.log(returned_data.data);
        questions = returned_data.data;
        callback(questions);
      })
 
    };
    // };
    this.show = function(id,callback){
      $http.get('/questions/' + id).then(function(returned_data){
        console.log(returned_data.data);
        callback(returned_data.data);
      })
    
    };
    this.delete = function(id,callback){
      $http.delete('/questions/' + id).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
           callback();
        }
        callback(returned_data.data);
      })
    
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getQuestions = function(callback){
      callback(friends);
    };
    this.getQuestion = function(callback){
        callback(friend);
    };
  }
  console.log(new QuestionsFactory());
  return new QuestionsFactory();
}]);
