angular.module('starter.controllers')
    .service('vibrate', function() {

    console.log('init service');
    this.Vibrate = function(ms){
        alert("Vibrate");
        navigator.vibrate(ms);
    };
});