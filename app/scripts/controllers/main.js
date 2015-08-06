'use strict';

/**
 * @ngdoc function
 * @name newsAggregatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newsAggregatorApp
 */
angular.module('newsAggregatorApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    $scope.todos = [];
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
