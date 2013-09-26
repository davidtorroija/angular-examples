'use strict';
angular.module('todoApp')
.controller('todoCtrl',function($scope){
	
	$scope.newTodo = 'add new todo';
	$scope.todos = [
		{description:'Comprar unos chifles en el iniaquito'},
		{description:'Jugar a las escondidas con la man que tanto me gusta y es la hermana de mi jefe'}
		];
	$scope.addTodo = function(){
		
		if(isValidTodo()){ 
		//aca le pregunto si estas definido y tenes un 
		//valor valido esto es diferente de empty ahi recien 
		//entra si no no entres	
			$scope.todos.push({description:$scope.newTodo});
		}
	}	
  String.prototype.strcmp = function(s) {
    if (this < s) return -1;
    if (this > s) return 1;
    return 0;
  }

  function isValidTodo() {
    if(!$scope.newTodo){			 
      return false;						
    }

    var is_valid = true;

    //con underscore es mas facil pero agregariamos complejidad
    angular.forEach($scope.todos, function(todo, key){
      if(todo.description === $scope.newTodo){
        is_valid = false;
      }
    });
    return is_valid;
  }
});
