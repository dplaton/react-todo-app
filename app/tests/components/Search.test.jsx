var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Search = require('Search');

describe('Search', () => {
    it ('should exist', () => {
        expect(Search).toExist();
    });

    it('should call onSearch with entered input search', () => {
        var spy = expect.createSpy();
        var searchTerm = 'dog';

        var todoSearch = TestUtils.renderIntoDocument(<Search onSearch={spy}/>);

        todoSearch.refs.searchTerm.value = searchTerm;
        TestUtils.Simulate.change(todoSearch.refs.searchTerm);

        expect(spy).toHaveBeenCalledWith(searchTerm,false);

;    });

    it('should call onSearch with proper checked value', () =>  {
        var spy = expect.createSpy();

        var todoSearch = TestUtils.renderIntoDocument(<Search onSearch={spy}/>);

        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.searchTerm);

        expect(spy).toHaveBeenCalledWith('',true);
    });
})