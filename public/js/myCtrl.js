angular.module("myApp").controller("myCtrl", function($scope, myService) {

	$scope.familyMembers = [];
	$scope.friends = [];
	$scope.activities = [];
	$scope.personalInfo = [];


	// Helpers
	var familyMemberReturnObject = {};
	var friendReturnObject = {};
	var activityReturnObject = {};

	var parseFamilyData = function() {
		var familyArray = $scope.newMember.split(",");
		familyMemberReturnObject.name = familyArray[0];
		familyMemberReturnObject.age = familyArray[1];
		familyMemberReturnObject.relation = familyArray[2];
	};

	var parseFriendData = function() {
		var friendArray = $scope.newFriend.split(",");
		friendReturnObject.name = friendArray[0];
		friendReturnObject.age = friendArray[1];
		friendReturnObject.met = friendArray[2];
	};

	var parseActivityData = function() {
		activityReturnObject.name = $scope.newActivity;
	};


	// Getters and Setters
	$scope.getFamilyMembers = function() {
		myService.getFamily().then(function(data) {
			$scope.familyMembers = data.data; 
		});
	};

	$scope.addFamilyMember = function() {
		parseFamilyData();
		myService.addToFamily(familyMemberReturnObject);
	};

	$scope.getFriends = function() {
		myService.getFriends().then(function(data) {
			$scope.friends = data.data;
		});
	};

	$scope.addFriend = function() {
		parseFriendData();
		myService.addToFriends(friendReturnObject);
	};

	$scope.getActivities = function() {
		myService.getActivities().then(function(data) {
			$scope.activities = data.data;
		});
	};

	$scope.addActivity = function() {
		parseActivityData();
		myService.addToActivities(activityReturnObject);
	};

	$scope.getPersonalInformation = function() {
		myService.getInfo().then(function(data) {
			$scope.personalInfo = data.data;
		});
	};
});