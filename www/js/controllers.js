angular.module('starter.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

    .controller('TestCtrl', function($scope) {
    console.log('init service');


})
    .controller('VibrateCtrl', function($scope ,vibrate) {
    $scope.vibrate= vibrate;
    console.log("ok");

})

    .controller('CameraCtrl', function($scope, Picture) {
    console.log("init service")
    $scope.Picture= Picture;
   
});
