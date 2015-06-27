'use strict';

angular.module('hacksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('campaign', {
        url: '/campaign',
        templateUrl: 'app/campaign/campaign.html',
        controller: 'CampaignCtrl'
      });
  });