var express = require('express');
var app = express();
var userController = require('./controllers/user');

// // Definissez ejs comme 'view engine'
app.set('view engine', 'ejs');

// le chemin par defaut des fichiers de template est 'views'. si vous souhaitez le changer :
//app.set('views', path.join(__dirname, '/yourViewDirectory'));

// Pour la route ci-dessous ('/'), utilisez 'res.render' pour charger le template ejs désiré :
// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/user/:id', userController);

app.listen(8080, (err) => {
  if(err) {
    throw(err);
  }

  console.log('server is running on http://localhost:8080');

});
