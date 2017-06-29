var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {Todo} from 'Todo';
import * as actions from 'actions'

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should dispatch the TOGGLE_TODO action on click', ()=>{
        var todoData = {
            id:1,
            text: 'One',
            completed: true
        };
        var action = actions.startToggleTodo(todoData.id, !todoData.completed);
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo dispatch={spy} {...todoData}/>);

        var $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(action);

    });
})

