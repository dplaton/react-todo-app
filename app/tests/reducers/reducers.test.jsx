var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
    describe("Search text", () => {
        it('should add the search term to the state', () => {
            var action = {
                type: 'SET_SEARCH_TERM',
                searchTerm: 'test'
            }

            var expectedResult = 'test';
            var actualResult = reducers.searchText(df(''), df(action));

            expect(actualResult).toEqual(expectedResult);
        })
    });

    describe('Toggle show completed', () => {
        it('should toggle the "Show completed" flag', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }

            var expectedResult = true;
            var actualResult = reducers.toggleShowCompleted(df(false), df(action));

            expect(actualResult).toEqual(expectedResult);
        })
    });

    describe('Todos reducer', () => {
        it('should add a new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todo: {
                    id: '123asv',
                    text: 'test',
                    completed: false,
                    createdAt: 1112
                }
            }
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('should toggle todo status', () => {
            var todo = [
                {
                    id: 1,
                    text: 'test',
                    createdAt: 123,
                    completed: false,
                    completedAt: undefined
                }
            ]
            var updates = {
                completed: false,
                completedAt: null
            }
            var action = {
                type: 'UPDATE_TODO',
                id: 1,
                updates: {}
            }

            var res = reducers.todosReducer(df(todo), df(action));
            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todo[0].text);
        })

        it('should add existing todos', () => {

            var todos = [
                {
                    id: 1,
                    text: 'test',
                    createdAt: 123,
                    completed: false,
                    completedAt: undefined
                }
            ]

            var action = {
                type: 'ADD_TODOS',
                todos
            }

            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(todos.length);
            expect(res[0].id).toEqual(todos[0].id);

        });
        it('should wipe the todos on logout', () => {
            var todos = [
                {
                    id: 1,
                    text: 'test',
                    createdAt: 123,
                    completed: false,
                    completedAt: undefined
                }
            ]

            var action = {
                type: 'LOGOUT',
            }

            var res = reducers.todosReducer(df(todos), df(action));
            expect(res.length).toEqual(0);
        });
        
        it('should update the auth information upon login', () => {
            var authState = {
                uid: 123
            }

            var action = {
                type: 'LOGIN',
                uid: 123
            }

            var res = reducers.authReducer(undefined, df(action));
            expect(res).toEqual(authState);
        });

        it('should update the auth information upon logout', () => {
            const authData = {
                uid: 123
            }
            var action = {
                type: 'LOGOUT'
            }

            var res = reducers.authReducer(df(authData), df(action));
            expect(res).toEqual({});
        });

       
    })
})