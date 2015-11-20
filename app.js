var express = require('express');
var app = express();

/*app.get('/', function(req, res) {
  res.send('Hello World');
});*/
app.use(express.static(__dirname + "/src/client"));

app.get('/user', function(req, res) {
	var userList = {
		username: "shoukath@gmail.com",
		password: "test"
	};
	res.json(userList);
});

app.listen(3000);
console.log('Listening to port 3000');