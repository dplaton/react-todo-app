var todoApi = require('TodoApi');
var expect = require('expect');

describe('Todo API', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(todoApi).toExist();
    });

    describe('set Todos', () => {
        it('should set valid data to local storage', () => {
            var todoData = [
                {
                    id: 1,
                    text: 'test',
                    completed: false
                }, {
                    id: 2,
                    text: 'test2',
                    completed: true
                }
            ];

            todoApi.setTodos(todoData);
            var storedItem = localStorage.getItem('todos');
            expect(storedItem).toExist();

            var todos = JSON.parse(storedItem);
            expect(todos).toEqual(todoData);

        });

        it('should not save invalid data', () => {
            var badData = {
                1: 'nothing'
            };
            todoApi.setTodos(badData);

            var todos = localStorage.getItem('todos');
            expect(todos).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array if local storage has invalid data', () => {
            var badData = {
                1: 'nothing'
            };
            var todos = todoApi.getTodos();
            expect(todos.length).toBe(0);

            localStorage.setItem('todos', badData);
            expect(todoApi.getTodos().length).toEqual([]);

        });

        it('should return the correct array if local storage has valid data', () => {
            var todoData = [
                {
                    id: 1,
                    text: 'test',
                    completed: false
                }, {
                    id: 2,
                    text: 'test2',
                    completed: true
                }
            ];

            localStorage.setItem('todos', JSON.stringify(todoData));
            expect(todoApi.getTodos()).toEqual(todoData);
        });
    }   );

});

