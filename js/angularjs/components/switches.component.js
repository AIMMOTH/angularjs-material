com.github.aimmoth.app.component("switches", {
  templateUrl : "js/angularjs/components/switches.template.html",
  controllerAs : "controller",
  controller : [ "$scope", function($scope) {
    $scope.data = {
        cb1: true,
        cb4: true,
        cb5: false
      };

      $scope.message = 'false';

      $scope.onChange = function(cbState) {
        $scope.message = cbState;
      };
    } ]
});