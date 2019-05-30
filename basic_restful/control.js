app.controller("control", function($scope, $http) {
  $scope.name = "Aman";

  $scope.movies = []

  $scope.newMovie = {
    name: "",
    director: "",
    release: "",
    added: "2019-02-9"
  }

  $scope.getMovies = function(){
    $http.get('http://localhost:3000/movies').then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      console.log(response.data);
      $scope.movies = response.data;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('Messed up!'+response.error);
    });
  }

  $scope.postMovie = function(movie){
    $http.post('http://localhost:3000/movies', JSON.stringify(movie)).then(function successCallback(res) {
      console.log("SUCESSFUL POST: " + res.data);
      $scope.postText = "Post Successful!"
    }, function errorCallback(res) {
      console.log("POST FAILED: " + res.error);
      $scope.postText = "Post Failed! Please Make Sure Your Input Is OK."
    });
  }

  $scope.postText = "";



  var init = function () {
   // check if there is query in url
   // and fire search in case its value is not empty
   $scope.getMovies();
   movie = {
 		 name: "Ayy Lmao, The Movie",
 		 director: "STEVEN!!! SPEILBERG!!!",
 		 release: 2012,
 		 added: ('2019-02-19')
 	 }

   // $scope.postMovie(movie);

   $scope.postText = "";

  };

  init();


});
