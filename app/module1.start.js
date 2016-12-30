angular.module('module1',[


	])
.controller('MainCtrl',function($scope){ //scope is used for dependencies, its like a glue b/w controller and view

	$scope.categories=[
	{"id":0,"name":"About Me"},
	{"id":1,"name":"Projects"},
	{"id":2,"name":"Work Experience"},
	{"id":3,"name":"Resume"}
	]; 


	$scope.myimages=[
	{"id":0,"name":"/Users/rashmijrao/Documents/New_Portfolio/images/img4.jpg","category":"About Me"},
	{"id":1,"name":"/Users/rashmijrao/Documents/New_Portfolio/images/img3.jpg","category":"Projects"},
	{"id":2,"name":"/Users/rashmijrao/Documents/New_Portfolio/images/img5.jpg","category":"Work Experience"},
	{"id":3,"name":"/Users/rashmijrao/Documents/New_Portfolio/images/img6.jpg","category":"Resume"}
	]; 

	$scope.myprojects=[
	{"id":6,"name":"Graduate Research Assistant at The Ohio State University","desc":" Ongoing research on behavior and cognitive bias analysis using Data Science.  This is a National Science Foundation funded research project introducting computational thinking to students as well as teachers. As a part of the project, I built a web application on Moodle platform for graph based e-learning. Have been able to come up with models to predict the visually observed behaviour and level of participation by means of data science techniques. It has been accepted for poster presentation at ACM ,Ohio women in computing conference in Columbus. ",
	"tags":"PHP, MySQL, Javascript, Jquery, Moodle, R, Python, CentOs"},
	{"id":2,"name":"Influence Passivity of Multi Layer Networks",
	"desc":"Influence is a measure of how influencially a node propogates the data in a large information networks. Involves developing an algorithm for influence and passivity of nodes; Involves data crawling, analytics and visualization.","tags":"Python, Networkx, Data Science"},
	{"id":0,"name":"Data Analytics for Social Networks",
	"desc":" Project on twitter data analytics; involves derivation of time estimates and prediction of relationships between the users as network nodes based on the network interactions. Data mining is done via APIs provided by Twitter in Python and analytics is done in MATLAB/Python."
	,"tags":"Twitter API, Python, Matlab"},
	{"id":1,"name":"IOT Design for Wireless Sensor Network",
	"desc":"Project work in Cloud and Mobile integration for Wireless sensor networks: Implemented CoAP(Constrained Application Protocol) on .net micro framework and designed an IOT network to support cloud connectivity of the emot (wireless network device-layer1)."
	,"tags":"CoAp, MQTT, Network Protocols, C#, .Net microframework"},
	{"id":3,"name":" Reliable file transfer protocol over UDP",
	"desc":"Project to design of a reliable file transfer protocol over UDP with complete implementation of TCP deamon. Uses a troll process to simulate a real network scenario."
	,"tags":"TCP, UDP, C, Socket Programming , Computer Networks"},
	{"id":4,"name":" Queueing network simulation system",
	"desc":"Project on developing a queueing network simulation system for verification of the theoretical queueing network approximations. Implemented with programming in Matlab."
	,"tags":"Matlab, Computer Networks"},
	{"id":5,"name":" Multimodal Sensor network for health monitoring and diagnostic",
	"desc":"Project on developing a low cost health monitoring system. The system uses the sensors connected to the aurdino board and the signals are processed and visualized by matlab."
	,"tags":"Matlab , Front end circuit design, Embedded systems, signal processing"}


	]; 

	$scope.currentCategory=$scope.categories[0];
	$scope.tab = 1;
	function setTab(tabId) {
            $scope.tab = tabId;
        };

    function isSet(tabId) {
            return $scope.tab === tabId;
        };

	function setCurrentCategory(category){
		$scope.currentCategory=category;
		$.backstretch("/Users/rashmijrao/Documents/New_Portfolio/images/"+category.name+".jpg");
	}

	function isCurrentCategory(category){
		
		return $scope.currentCategory !== null && category.name=== $scope.currentCategory.name;
	}
	function isCurrentCategoryName(categoryname){
		
		return $scope.currentCategory !== null && categoryname=== $scope.currentCategory.name;
	}

	$scope.setCurrentCategory=setCurrentCategory;
	$scope.isCurrentCategory=isCurrentCategory;
	$scope.setTab=setTab;
	$scope.isSet=isSet;
	$scope.isCurrentCategoryName=isCurrentCategoryName;

});
