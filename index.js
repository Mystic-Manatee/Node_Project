//setting up required packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();


//setting up middleware for each package
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public/')));

//routes
app.get('/', function(req, res){
	res.render('home');
});

app.get('/about', function(req, res){
	res.render('about');
});


//app listens on localhost port 3000
app.listen(3000);