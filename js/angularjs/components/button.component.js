com.github.aimmoth.app.component("buttons", {
  templateUrl : "js/angularjs/components/button.template.html",
  controllerAs : "controller",
  controller : [ "$scope", function($scope) {
    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;

    $scope.googleUrl = 'http://google.com';

  } ]
});