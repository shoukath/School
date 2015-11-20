var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('schools', ['users']);

/*app.get('/', function(req, res) {
  res.send('Hello World');
});*/
app.use(express.static(__dirname + "/src/client"));

app.get('/user', function(req, res) {
	var userList = {
		username: "shoukath1@gmail.com",
		password: "test"
	};
	db.users.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	})
});

app.listen(3000);
console.log('Listening to port 3000');