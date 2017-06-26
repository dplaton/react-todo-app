var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
    it('should generate the set search term action', () => {
        var expectedAction = {
            type: 'SET_SEARCH_TERM',
            searchTerm:'test'
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
            text:'test'
        }

        var actualAction = actions.addTodo('test');

        expect(actualAction).toEqual(expectedAction);
    });
        it('should generate the "toggle todo" action', () => {
        var expectedAction = {
            type: 'TOGGLE_TODO',
            id:1
        }

        var actualAction = actions.toggleTodo(1);

        expect(actualAction).toEqual(expectedAction);
    });
})