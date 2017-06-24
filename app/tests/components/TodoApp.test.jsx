var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var uuid = require('node-uuid');
var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    })

    it('should add todo on handleAddTodo', () => {
        var todoText = 'one';

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos:[]});

        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos.length).toBe(1);
        expect(todoApp.state.todos[0].text).toBe(todoText);
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handler is called', () => {
        var todoData = {
            id:uuid(),
            text: 'Test',
            completed: false
        };

        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]});

        todoApp.handleToggleTaskStatus(todoData.id);
        expect(todoData.completed).toBe(true);
        expect(todoData.completedAt).toBeA('number');
    });

    it('should revert back to createdAt when status becomes not done', () => {
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        
        todoApp.handleAddTodo('test');
        var todo = todoApp.state.todos[0];
    });
})

