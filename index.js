var app = require('express')();
var session = require('express-session');

var addTodo = require('./modules/add.js');
var deleteTodo = require('./modules/delete.js');
var listTodo = require('./modules/list.js');

var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.use(session({ secret: 'mysecrettoken'}));

/*
* Si le json des Todos n'est pas initialisé alors on le crée
*/
app.use(function (req, res, next) {
    if (!req.session.todosList) {
        var todos = {
            "todo": [
        ]};
        req.session.todosList = todos;
    }
    next();
});

    /* 
    * @route / accueil, liste les todos
    */
    app.get('/', function(req, res){
        console.log(req.session.todosList);
        //res.send(req.session.todosList);
        res.send('Bienvenue');          
    });

    /* 
    * @route /add permet d'ajouter des Todos
    */
    app.post('/add', urlEncodedParser, function(req, res){
        console.log(req.body);
        res.send('Todo ajoutée');
    });

    /* 
    * @route /delete/:id permet de supprimer une Todos d'id donnée
    */
    app.get('/delete/:id', function(req, res){
        res.send('Todo supprimée :(');
    });



app.listen(3000, function(){
    console.log(session.todosList);
    console.log('listening on *:3000');
});