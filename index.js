var app = require('express')();
var session = require('express-session');

var addTodo = require('./modules/add.js');
var deleteTodo = require('./modules/delete.js');
var listTodo = require('./modules/list.js');

    /* 
    * @route / accueil
    */
    app.get('/', function(req, res){
        res.send('Hello world !');
    });

    /* 
    * @route /list permet de lister mes Todos
    */
    app.get('/list', function(req, res){
        res.send('Bien');
    });

    /* 
    * @route /add permet d'ajouter des Todos
    */
    app.post('/add', function(req, res){
        res.send('Hello world !');
    });

    /* 
    * @route /delete permet de supprimer des Todos
    */
    app.get('/delete', function(req, res){
        res.send('Hello world !');
    });



app.listen(3000, function(){
    console.log('listening on *:3000');
});