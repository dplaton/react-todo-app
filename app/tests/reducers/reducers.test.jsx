var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
    describe("Search text", () => {
        it('should add the search term to the state', () => {
            var action = {
                type:'SET_SEARCH_TERM',
                searchTerm:'test'
            }

            var expectedResult = 'test';
            var actualResult = reducers.searchText(df(''), df(action));

            expect(actualResult).toEqual(expectedResult);
        })
    });

    describe('Toggle show completed', () => {
        it ('should toggle the "Show completed" flag', () => {
            var action = {
                type:'TOGGLE_SHOW_COMPLETED'
            }

            var expectedResult = true;
            var actualResult = reducers.toggleShowCompleted(df(false), df(action));

            expect(actualResult).toEqual(expectedResult);
        })
    });

    describe('Todos reducer', () => {
        it ('should add a new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'test'
            }
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it ('should toggle todo status', () => {
    
            var todo = [{
                id:1,
                text:'test',
                createdAt: 123,
                completed:false,
                completedAt: undefined
            }]

            var action = {
                type: 'TOGGLE_TODO',
                id: 1
            }

            var res = reducers.todosReducer(df(todo), df(action));
            expect(res[0].completed).toEqual(true);
            expect(res[0].completedAt).toBeA('number');
        })

        it('should add existing todos', () => {
           
            var todos = [{
                id:1,
                text:'test',
                createdAt: 123,
                completed:false,
                completedAt: undefined
            }]

            var action = {
                type:'ADD_TODOS',
                todos
            }

            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(todos.length);
            expect(res[0].id).toEqual(todos[0].id);

        })
    })
})