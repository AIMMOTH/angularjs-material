com.github.aimmoth.app.component("icons", {
  templateUrl : "js/angularjs/components/icons.template.html",
  controllerAs : "controller",
  controller : [ "$scope", function( $scope ) {
    // Create list of font-icon names with color overrides
    var iconData = [
          {name: 'icon-home'        , color: "#777" },
          {name: 'icon-user-plus'   , color: "rgb(89, 226, 168)" },
          {name: 'icon-google-plus2', color: "#A00" },
          {name: 'icon-youtube4'    , color:"#00A" },
           // Use theming to color the font-icon
          {name: 'icon-settings'    , color:"#A00", theme:"md-warn md-hue-5"}
        ];

    // Create a set of sizes...
    $scope.sizes = [
      {size:48,padding:10},
      {size:36,padding:6},
      {size:24,padding:2},
      {size:12,padding:0}
    ];

    $scope.fonts = [].concat(iconData);

} ]
});