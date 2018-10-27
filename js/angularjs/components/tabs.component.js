com.github.aimmoth.app.component("tabs", {
  templateUrl : "js/angularjs/components/tabs.template.html",
  controllerAs : "controller",
  controller : [ "$scope", function($scope) {
    $scope.data = {
        selectedIndex: 0,
        secondLocked:  true,
        secondLabel:   "Item Two",
        bottom:        false
      };
      $scope.next = function() {
        $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
      };
      $scope.previous = function() {
        $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
      };
  } ]
});