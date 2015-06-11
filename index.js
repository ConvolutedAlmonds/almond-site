var express = require('express'),
var app = express();
var http = require('http');
var httpServer = http.Server(app);

app.use(express.static(__dirname+'/dist'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});
app.listen(process.env.PORT);