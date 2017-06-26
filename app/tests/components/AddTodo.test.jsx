var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
    it ('should exist', ()=> {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO when valid text is entered', () => {
        var spy = expect.createSpy();
        var mockData = 'one';
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);

        var $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.refs.todo.value = mockData;
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toHaveBeenCalledWith({
            type:'ADD_TODO',
            text: mockData
        });
    });

    it('should not call the handler when invalid data is entered', () => {
         var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);

        var $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.refs.todo.value = '';
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toNotHaveBeenCalled();
    })
});
