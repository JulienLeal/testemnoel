var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname+'/public'));

app.listen(port, function(){
	console.log('express server started at port: '+port);
});

