console.log('Server->Models->questions.js');
var mongoose = require('mongoose');
var questionsSchema = new mongoose.Schema({
   uname: String, 
   question: String,
     questDate: Date,
     
});
console.log ("inside Question Model"); 
var questionModel = mongoose.model('questionModel',questionsSchema)
