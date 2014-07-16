/**
* Created with CodioDemoApp.
* User: joinabhimanyu
* Date: 2014-07-15
* Time: 12:39 PM
* To change this template use Tools | Templates.
*/

function controllers(params) {
    var app = params.app;
    var router = params.router;
    
	app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html'); 
	});

	app.get('/windows', function(req, res) {
    res.render('windows');
	});
    
    app.get('/google', function(req, res) {
       res.render('google'); 
    });
    
    router.get('/about', function(req, res) {
        res.send('Hello from Codio online IDE');
    });
    
//     controllers.home = function(req, res) {
//         res.sendfile(__dirname + '/public/index.html');
//     };
    
//     controllers.about = function(req, res) {
//         res.send('Hello from Codio online IDE');
//     };
    
}

module.exports = controllers;


  
    
    
