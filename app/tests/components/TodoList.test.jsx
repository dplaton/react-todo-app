var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each to-do item', () => {
        var items = [
            {
                id: 1,
                text: 'Test 1'
            }, {
                id: 2,
                text: 'Test 2'
            }
        ]

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={items}/>);
        var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todoComponents.length).toBe(items.length);

    });
    it('should render emtpy message if no todos are found', () => {
        var items = []

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={items}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);

    });
})
