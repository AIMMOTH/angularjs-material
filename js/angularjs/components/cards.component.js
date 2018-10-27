com.github.aimmoth.app.component("cards", {
  templateUrl : "js/angularjs/components/cards.template.html",
  controllerAs : "controller",
  controller : [ "$scope", function($scope) {
    $scope.imagePath = 'img/washedout.png';
  }]
});