var todoApi = require('TodoApi');
var expect = require('expect');

describe('Todo API', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(todoApi).toExist();
    });

       describe('filter Todos', () => {
        var todoData = [
                {
                    id: 1,
                    text: 'test',
                    completed: true
                }, {
                    id: 2,
                    text: 'another_test',
                    completed: false
                }, {

                    id: 3,
                    text: 'another_test',
                    completed: false
                }
            ];

        it('should not show completed todos', () => {
            var filteredTodos = todoApi.filterTodos(todoData, false, '');
            expect(filteredTodos.length).toEqual(2);
        });

        it('should show all todos', () => {
             var filteredTodos = todoApi.filterTodos(todoData, true, '');
             expect(filteredTodos.length).toBe(todoData.length);
        });

        it('should sort by the status', () => {
            var filteredTodos = todoApi.filterTodos(todoData, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it ('should return todos according to search term', () => {
            var filteredTodos = todoApi.filterTodos(todoData, true, 'another');
            expect(filteredTodos.length).toBe(2);
        });
    })

});

