'use strict';

angular.module('hacksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('campaign', {
        url: '/campaign/:id',
        templateUrl: 'app/campaign/campaign.html',
        controller: 'CampaignCtrl'
      });
  });