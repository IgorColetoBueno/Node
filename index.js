//Importações
var express = require('express');
var http = require('http');
var routes = require('./routes');
var bodyParser = require('body-parser');
var app = express();

//Mapeia a rota localhost:3000 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(routes);
//Cria o servidor
http.createServer(app).listen(3000, function(){
    console.log('Express started')
});