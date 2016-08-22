console.log('Server->config->routes.js');
var questions = require('../controllers/questions.js');
module.exports = function(app){
app.get('/questions',questions.index);
app.get('/questions/:id',questions.show);
app.post('/questions',questions.create);
app.post('/questions/edit/:id',questions.edit)
app.delete('/questions/:id',questions.delete);
};
