angular.module('starter.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });


})

.controller('TestCtrl', function($scope) {
    console.log('init service');
    $scope.lightOn = function(){
        alert("Light ON");
    }
    $scope.lightOff = function(){
        alert("Light Off");
    }
})
.controller('VibrateCtrl', function($scope) {
    console.log('init service');
    $scope.Vibrate = function(){
        alert("Vibrate");
        navigator.vibrate(10000);
    }
})
