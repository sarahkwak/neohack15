'use strict';

angular.module('hacksApp')
  .controller('CampaignCtrl', function ($scope, $stateParams, $http) {

     $http.get('/api/campaigns/' + $stateParams.id).success(function(awesomeThings) {
      console.log(awesomeThings)
      $scope.campaign = awesomeThings;
    });

  });
