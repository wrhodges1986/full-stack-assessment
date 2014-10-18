// Pseudo-database

var familyMembers = [{name: "Wesley", age: 28, relation: "self"},
					 {name: "Kristin", age: 26, relation: "spouse"},
					 {name: "William", age: 1, relation: "child"},
					 {name: "Zachary", age: 0, relation: "child"}];

var friends = [{name: "Jimbo", age: 44, met: "2000"},
			   {name: "Aeagon", age: 900, met: "1850"},
			   {name: "Yesser", age: 18, met: "1999"}];

var activities = [{name: "exercise"},
				  {name: "reading"},
				  {name: "video games"},
				  {name: "hiking"},
				  {name: "programming"}];

var me = [{name: "Wesley", height: "6-0", age: 28, favoriteMovie: "The LEGO Movie", favoriteArtist: "Coldplay", favoriteFood: "Quiche"}];

// Getters and Setters; use module.exports, which allows us to access these functions in server.js; it is making them part of a node module.
// Family Members
module.exports.getFamilyMembers = function() {
	return familyMembers;
};

module.exports.addFamilyMember = function(newMember) {
	familyMembers.push(newMember);
};

// Friends
module.exports.getFriends = function() {
	return friends;
};

module.exports.addFriend = function(newFriend) {
	friends.push(newFriend);
};

// Activities 
module.exports.getActivities = function() {
	return activities;
};

module.exports.addActivity = function(newActivity) {
	activities.push(newActivity);
};

// My Personal Info
module.exports.getMe = function() {
	return me;
};