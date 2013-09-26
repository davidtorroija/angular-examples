describe("todo controller test", function() {
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
    beforeEach(inject(function($controller) {
        scope = {};
        ctrl = $controller('todoCtrl', {
        $scope: scope
      }); 
    })); 

    it('should have newTodo variable', function() {
        expect(scope.newTodo).toBe('add new todo');
    });

    it('should have an array with todos', function() {
        expect(scope.todos).toEqual([]);
    });
    it('should add a new todo to todos array', function() {
        scope.addTodo();
        expect(scope.todos.length).toEqual(1);
        expect(scope.todos[0]).toEqual(scope.newTodo);
    });
});

