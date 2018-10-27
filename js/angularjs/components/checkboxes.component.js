com.github.aimmoth.app.component("checkboxes", {
  templateUrl : "js/angularjs/components/checkboxes.template.html",
  controllerAs : "controller",
  controller : [ "$scope", function($scope) {

    $scope.data = {};
    $scope.data.cb1 = true;
    $scope.data.cb2 = false;
    $scope.data.cb3 = false;
    $scope.data.cb4 = false;
    $scope.data.cb5 = false;

  }]
});