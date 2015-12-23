var express = require('express');
var app = express();
var port = process.env.port || 3000;

var middleware = require('./middleware');


 app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function (req, res){
	res.send('its about us page');
});

app.use(express.static(__dirname+'/public'));

app.listen(port, function(){
	console.log('express server started at port: '+port);
});

