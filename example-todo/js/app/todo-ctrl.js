angular.module('todoApp')
.controller('todoCtrl',function($scope){
	$scope.newTodo = 'add new todo';
	$scope.todos = [];
	$scope.addTodo = function (){
		$scope.todos.push($scope.newTodo);
	}
});
