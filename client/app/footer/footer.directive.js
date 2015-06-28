'use strict';

angular.module('hacksApp')
  .directive('footer', function () {
    return {
      templateUrl: 'app/footer/footer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });