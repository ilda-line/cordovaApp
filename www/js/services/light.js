angular.module('ac')
    .service('light', function() {
    console.log('init service');
    var scope = this;
    var login = null;
    var password = null;
    scope.login = function (loginInit, passwordInit) {
        login = loginInit;
        password = passwordInit; 
    }
    scope.getCurrentUser = function () {
        var user = {
            username : login,
            password : password
        };
        console.log(user);
        return user;
    }
});