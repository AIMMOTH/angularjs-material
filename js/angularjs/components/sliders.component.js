com.github.aimmoth.app.component("sliders", {
  templateUrl : "js/angularjs/components/sliders.template.html",
  controllerAs : "controller",
  controller : [ "$scope", function($scope) {

    $scope.color = {
      red: Math.floor(Math.random() * 255),
      green: Math.floor(Math.random() * 255),
      blue: Math.floor(Math.random() * 255)
    };

    $scope.rating1 = 3;
    $scope.rating2 = 2;
    $scope.rating3 = 4;

    $scope.disabled1 = Math.floor(Math.random() * 100);
    $scope.disabled2 = 0;
    $scope.disabled3 = 70;

    $scope.invert = Math.floor(Math.random() * 100);

    $scope.isDisabled = true;
  } ]
});