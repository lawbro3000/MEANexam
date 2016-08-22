console.log('Server->Controllers->friends controller->question.js');

var mongoose = require('mongoose');
var question = mongoose.model('questionModel');

function questionsController() {
    this.index = function(req, res) {

        question.find({}, function(err, questions) {
            res.json(questions);
        })
    };
    this.create = function(req, res) {
        console.log('This inside of the Question Controller Create method');
        var newQuestion = new question({
            question:  req.body.question,
            uname:     req.body.uname,
            questdate: req.body.questdate
        });
        newQuestion.save(function(err) {
            if (err) {
                console.log('something went wrong');
            } else {
                console.log('Added to the DATABASE');
                res.json(newQuestion);
            }
        });
    };
    this.show = function(req, res) {
        console.log('This inside of the Friends Controller Create method');
        question.findOne({
            _id: req.params.id
        }, function(err, question) {
            res.json(question)
        })
    };
    this.edit = function(req, res) {
        question.findOne({
            _id: req.params.id
        }, function(err, editQuestion) {
            editQuestion.question = req.body.question;
            editQuestion.uname = req.body.uname;
            editQuestion.questDate = req.body.questDate;

            editQuestion.save(function(err) {
                if (err) {
                    console.log('something went wrong')
                } else {
                    console.log('Added to the DATABASE')
                    res.json(editQuestion)
                }
            })
        })
    }
    this.delete = function(req, res) {
        console.log("Enter the Delete section of Question-Freinds.js")
        question.remove({
            _id: req.params.id
        }, function(err, deleteQuestion) {

            if (err) {
                console.log('something went wrong')

            } else {
                console.log('Deleted from the DATABASE')
                res.send();
            }
        })
    }
};

module.exports = new questionsController();

