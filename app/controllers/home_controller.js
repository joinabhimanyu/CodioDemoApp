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
    
    router.get('/home', function(req, res) {
        res.sendfile(__dirname + '/public/index.html');
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


  
    
    
