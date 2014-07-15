/**
* Created with CodioDemoApp.
* User: joinabhimanyu
* Date: 2014-07-15
* Time: 06:55 AM
* To change this template use Tools | Templates.
*/

var express = require('express');
var app = express();

app.use(express.static(__dirname + 'public'));

var router = express.Router();

router.use(function(req, res, next) {
   console.log(req.method, req.url);
    next();
});

router.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

router.get('/home', function(req, res) {
    res.send('Hello from Codio online IDE');
});

app.use('/', router);
app.listen(process.env.PORT || 3000, function() {
   console.log('server started'); 
});

