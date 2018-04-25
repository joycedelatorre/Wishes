var express = require ("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout:"main"}));

app.set("view engine", "handlebars");

var mysql = require("mysql");
var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"toor",
	database:"wishes_db"
});

connection.connect(function(err){
	if(err){
		console.error("error conncecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

//--> here we will call the routes

app.get('/', function (req, res) {
    res.render("index");
});

app.listen(port, function(){
	console.log("SERVER STARTED");
})