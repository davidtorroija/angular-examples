describe("Test todoCtrl", 
  function() {
    var ctrl,
    scope;
    // depServiceMock = {},
    // depMethodSpy = jasmine.createSpy("");

    // load the controller's module
    beforeEach(module('todoApp'));

    // beforeEach(module( function($provide){
    //   $provide.value("depService", depServiceMock);
    // }) );


    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('todoCtrl', {
        $scope: scope
      }); 
    })); 
    
    it('should have a var named todo and his value to be "add new todo"', function() {
        expect(scope.newTodo).toBe('add new todo');
        
      });
   
    describe('when I push items to the todos array through a metod called "addTodo"!',function(){
      describe('-if the newTodo value is empty',function(){
          it('should not push anything',function(){
            //var length = scope.todos.length;
            scope.newTodo = '';
            scope.addTodo();
            expect(scope.todos.length).toBe(0);
          });
      });
      describe('-if the newTodo value is valid',function(){              
          describe('there is an item with the same description',function(){
               it('should not push anything',function(){
                scope.newTodo = 'some valid value';
                scope.addTodo();
                scope.newTodo = 'some valid value';
                scope.addTodo();
                expect(scope.todos.length).toBe(1);
              });
          });
         
        });

          it('should push a new item on the todos array',function(){
            var length = scope.todos.length;
            scope.newTodo = 'some valid value';
            scope.addTodo();
            expect(scope.todos.length).toBe(1);
          });
      });
});   