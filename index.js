//Importações
var express = require('express');
var http = require('http');
var routes = require('./routes');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.set('view engine','pug');

//Mapeia a rota localhost:3000 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(routes);    
app.use(express.static(path.join(__dirname,'public')))
//Cria o servidor
http.createServer(app).listen(3000, function(){
    console.log('Express started')
});