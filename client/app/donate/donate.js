'use strict';

angular.module('hacksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('donate', {
        url: '/donate/:id',
        templateUrl: 'app/donate/donate.html',
        controller: 'DonateCtrl'
      });
  });