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
		console.log('push',$scope.newTodo);		
			$scope.todos.push({description:$scope.newTodo});
		}
	}	
	function isValidTodo() {
		if(!$scope.newTodo){			 
			return false;						
		}
		//con underscore es mas facil pero agregariamos complejidad
		angular.forEach($scope.todos, function(todo, key){
			console.log(todo,$scope.newTodo,todo.description===$scope.newTodo);
			if(todo.description===$scope.newTodo){
				console.log('entro aca')
				return false;
			}
		});
		return true;
	}
});
