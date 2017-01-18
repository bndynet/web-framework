﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  app.controller("FormCtrl", [
    "$scope", "$http", function($scope, $http) {
      $scope.model = {
        select: "2",
        radio: 1,
        checkbox: [1, 3]
      };
      $scope.options = {
        "Option 1": 1,
        "Option 2": 2,
        "Option 3": 3
      };
      $scope.submitForm = function() {
        if ($scope.form.$invalid) {
          dialog.error("Form is invalid");
        } else {
          return dialog.success(angular.toJson($scope.model));
        }
      };
    }
  ]);

}).call(this);
