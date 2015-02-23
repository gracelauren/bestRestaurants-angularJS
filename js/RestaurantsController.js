bestRestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function(){
    $scope.restaurants.push({
      name: $scope.restaurantName,
      food: $scope.restaurantFood,
      location: $scope.restaurantLocation,
      price: $scope.restaurantPrice
    });

    $scope.restaurantName=null;
    $scope.restaurantFood=null;
    $scope.restaurantLocation=null;
    $scope.restaurantPrice="";

  };

  $scope.deleteRestaurant = function(restaurant) {
    var index=$scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
});
