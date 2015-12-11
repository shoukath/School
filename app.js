'use strict'

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

var dbUrl = 'mongodb://shoukath:shoukath@ds057234.mongolab.com:57234/schools';
MongoClient.connect(dbUrl, function(err, db) {
 	console.log('Connected correctly to server');

 	var collection = db.collection('users');
 
	app.use(express.static(__dirname + '/dist'));

	app.get('/user', function(req, res) {
		collection.find({}).toArray(function(err, docs) {
		    console.log('Found the following records');
		    console.dir(docs);
		    res.json(docs);
		});
	});
	// db.close();
});

var port = process.env.PORT ? process.env.PORT : 3000;

app.listen(port, process.env.IP);
console.log('Listening to port ' + port);