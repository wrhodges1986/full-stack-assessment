full-stack-assessment
=====================


Currently our full stack app should be able to:
* Make a GET request for Friends, Family, Activities, and Personal Data.
* Make simple POST requests using postman (backend only)


What we want to accomplish in this assessment is making a POST request from the index.html file, all the way to the myData.js file. For the assessment we will only be doing this for friends. If you have time, feel free to do this for all of your data.

To do this, all you have to do is:
* Create an form that has 3 input fields. Name, age, yearmet (remember to use ng-model).
* Create an addFriends method in the controller that takes the information from the input fields and passes them to the service as an object.
* Create an addFriends method in the service that takes the new friend object and passes it into the server with a $http request. Similar to the get requests but we need to pass in METHOD, URL, and DATA. That data should be the data object. 


To successfully complete this, your app should take in the input data, click add friend, and then click get friends data. The friends data should show the new friend you just added. 
