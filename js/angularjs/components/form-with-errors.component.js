com.github.aimmoth.app.component("form-with-errors", {
  templateUrl : "js/angularjs/components/form-with-errors.template.html",
  controllerAs : "controller",
  controller : [ "$scope", function($scope) {
    $scope.project = {
        description: 'Nuclear Missile Defense System',
        rate: 500,
        special: true
      };
    } ]
});