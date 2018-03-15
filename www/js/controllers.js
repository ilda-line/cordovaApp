angular.module('starter.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

    .controller('TestCtrl', function($scope) {
    console.log('init service');

    $scope.lightOn = function(){
        alert("Light ON");

    };
    $scope.lightOff = function(){
        alert("Light Off");

    };

})
    .controller('VibrateCtrl', function($scope ,vibrate) {
    console.log("ok");
    $scope.vibrate = function(ms){
       vibrate.Vibrate(ms) ;
    }
});
