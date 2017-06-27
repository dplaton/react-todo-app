var expect = require('expect');
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should generate the set search term action', () => {
        var expectedAction = {
            type: 'SET_SEARCH_TERM',
            searchTerm: 'test'
        }

        var actualAction = actions.setSearchTerm('test');

        expect(actualAction).toEqual(expectedAction);
    });

    it('should generate the "toggle show completed" action', () => {
        var expectedAction = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }

        var actualAction = actions.toggleShowCompleted();

        expect(actualAction).toEqual(expectedAction);
    });
    it('should generate the "Add Todo" action', () => {
        var expectedAction = {
            type: 'ADD_TODO',
            todo: {
                id: '123asd',
                text: 'test',
                completed: false,
                createdAt: 1
            }
        }

        var actualAction = actions.addTodo(expectedAction.todo);

        expect(actualAction).toEqual(expectedAction);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'test';

        store.dispatch(actions.startAddTodo(todoText))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type:'ADD_TODO'
            });

            expect(actions[0].todo).toInclude({
                text: todoText
            })
            done();
        })
        .catch(done);
    });

    it('should generate the "toggle todo" action', () => {
        var expectedAction = {
            type: 'TOGGLE_TODO',
            id: 1
        }

        var actualAction = actions.toggleTodo(1);

        expect(actualAction).toEqual(expectedAction);
    });
    
    it('should generate the "add todos" action', () => {
        var expectedAction = {
            type: 'ADD_TODOS',
            todos: [1, 2, 3]
        }

        var actualAction = actions.addTodos([1, 2, 3]);

        expect(actualAction).toEqual(expectedAction);
    });
})