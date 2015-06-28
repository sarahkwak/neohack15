'use strict';

angular.module('hacksApp')
  .controller('DonateCtrl', function ($scope, $stateParams, $http) {

     $http.get('/api/donates/'+ $stateParams.id).success(function(awesomeThings) {
      console.log(awesomeThings)
      $scope.campaign = awesomeThings;
    });

     $scope.submit = function(amt_raised) {
      alert(amt_raised);
     };
  });
