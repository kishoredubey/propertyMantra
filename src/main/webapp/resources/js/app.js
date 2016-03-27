var app = angular.module('myApp', ['ngResource']);

app.factory("roomResource", function($resource) {
  return $resource("/room");
});

app.controller('indexCtrl', function($scope, roomResource) {
    $scope.room = function () {
        alert("here");
        roomResource.get({}, function(data) {
            alert(data);
          });
    }
});