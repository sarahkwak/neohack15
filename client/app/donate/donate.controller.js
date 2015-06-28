'use strict';

angular.module('hacksApp')
  .controller('DonateCtrl', function ($scope, $stateParams, $http) {

     $http.get('/api/donates/'+ $stateParams.id).success(function(awesomeThings) {
      console.log(awesomeThings);
      $scope.campaign = awesomeThings;
    });

     Stripe.card.createToken({
      number: $('.card-number').val(),
      cvc: $('.card-cvc').val(),
      exp_month: $('.card-expiry-month').val(),
      exp_year: $('.card-expiry-year').val()
    }, stripeResponseHandler);

  });
