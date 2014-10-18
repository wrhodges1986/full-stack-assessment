angular.module("myApp").service("myService", function($http, $q) {

	var baseUrl = "http://localhost:9001";

	this.getFamily = function() {
		return $http({
			method: "GET",
			url: baseUrl + "/family"
		});
	};

	this.addToFamily = function(newFamilyMember) {
		$http({
			method: "POST",
			url: baseUrl + "/family/new",
			data: newFamilyMember
		});
	};

	this.getFriends = function() {
		return $http({
			method: "GET",
			url: baseUrl + "/friends"
		});
	};

	this.addToFriends = function(newFriend) {
		$http({
			method: "POST",
			url: baseUrl + "/friends/new",
			data: newFriend
		});
	};

	this.getActivities = function() {
		return $http({
			method: "GET",
			url: baseUrl + "/activities"
		});
	};

	this.addToActivities = function(newActivity) {
		$http({
			method: "POST",
			url: baseUrl + "/activities/new",
			data: newActivity
		});
	};

	this.getInfo = function() {
		return $http({
			method:"GET",
			url:baseUrl + "/me"
		});
	};
})