var myData = require("./server-assets/myData.js");
//var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
 	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 	next();
});

// For post methods, the /new at the end is not necessary, only for convenience

// Family Member Endpoints
app.get("/family", function(req, res) {
	var myFamily = myData.getFamilyMembers();
	res.send(myFamily);
});

app.post("/family/new", function(req, res) {
	myData.addFamilyMember(req.body);
	res.status(200).end();
});

// Friend Endpoints
app.get("/friends", function(req, res) {
	var myFriends = myData.getFriends();
	res.send(myFriends);
});

app.post("/friends/new", function(req, res) {
	myData.addFriend(req.body);
	res.status(200).end();
});

// Activity Endpoints
app.get("/activities", function(req, res) {
	var myActivities = myData.getActivities();
	res.send(myActivities);
});

app.post("/activities/new", function(req, res) {
	myData.addActivity(req.body);
	res.status(200).end();
});

// Personal Info
app.get("/me", function(req, res) {
	var me = myData.getMe();
	res.send(me);
});

app.listen(9001);