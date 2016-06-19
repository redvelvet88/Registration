angular.module('myApp', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider) {

    // $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    })
    .state('register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    })
    .state('success', {
      templateUrl: 'views/success.html',
      controller: 'SuccessController'
    })

    });
