'use strict';

angular.module('hacksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('thanks', {
        url: '/thanks',
        templateUrl: 'app/thanks/thanks.html',
        controller: 'ThanksCtrl'
      });
  });