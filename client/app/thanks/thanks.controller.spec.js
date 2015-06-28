'use strict';

describe('Controller: ThanksCtrl', function () {

  // load the controller's module
  beforeEach(module('hacksApp'));

  var ThanksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThanksCtrl = $controller('ThanksCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
