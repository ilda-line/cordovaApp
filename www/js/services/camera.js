angular.module('starter.controllers')
    .service('Picture', function() {

    this.TakePicture = function (){

        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                        destinationType: Camera.DestinationType.FILE_URI });

        function onSuccess(imageURI) {
            var image = document.getElementById('myImage');
             image.src = imageURI;
             image.style.backgroundImage = "url("+image.src+")";
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }
});