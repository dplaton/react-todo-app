import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from  'react-addons-test-utils';
import {Provider} from 'react-redux';

import {configure} from 'configureStore'
import ConnectedTodoList, {TodoList} from 'TodoList'
import ConnectedTodo, {Todo} from 'Todo'

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each to-do item', () => {
        var items = [
            {
                id: 1,
                text: 'Test 1',
                completed: false,
                completedAt: undefined,
                createdAt: 4550
            }, {
                id: 2,
                text: 'Test 2',
                completed: false,
                completedAt: undefined,
                createdAt: 4550
            }
        ]
        var store = configure({todos: items});
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}><ConnectedTodoList/></Provider>
        );
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todoComponents.length).toBe(items.length);

    });
    it('should render emtpy message if no todos are found', () => {
        var items = []

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={items}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);

    });
})
