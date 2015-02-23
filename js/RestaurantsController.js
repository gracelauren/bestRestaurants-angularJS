bestRestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.foodTypes = [
  'American',
  'Asian',
  'Central and South-American',
  'Middle-Eastern',
  'European',
  'African',
  'Australian'
  ];

  $scope.restaurantFood = {
  foodTypes: []
  };

  $scope.restaurantFoods = [];



  $scope.addRestaurant = function(){
    $scope.restaurants.push({
      name: $scope.restaurantName,
      food: $scope.restaurantFood.foodTypes.join(", "),
      address: $scope.restaurantAddress,
      location: $scope.restaurantLocation,
      price: $scope.restaurantPrice
    });

    $scope.restaurantName=null;
    $scope.restaurantFood=[];
    $scope.restaurantAddress=null;
    $scope.restaurantLocation="";
    $scope.restaurantPrice="";
  };

  $scope.deleteRestaurant = function(restaurant) {
    var index=$scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
});
