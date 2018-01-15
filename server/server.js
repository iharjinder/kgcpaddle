
var fs = require('fs');
var path = require('path');

var express    = require('express');
var app        = express();

var http       = require('http').Server(app)
var session    = require('express-session')

// var bodyParser = require('body-parser');
var base       = require("./base");

// app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));
// app.use(bodyParser.json({limit: '50mb'}));

app.set('port', (process.env.PORT || 3000));

app.use(function (req, res, next) {
    next();
});

app.use('/', express.static(path.join(__dirname, "../app/static")));

app.get('/',       base.home_page )
app.put('/getDonations', base.get_donations )
app.put('/getRegister', base.get_register )


http.listen(3000, function(){
    console.log('listening on *:3000');
});
