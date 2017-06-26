var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {Search} from 'Search'

describe('Search', () => {
    it ('should exist', () => {
        expect(Search).toExist();
    });

    it('should dispatch SET_SEARCH_TEXT on input change', () => {
        var spy = expect.createSpy();
        var searchTerm = 'dog';

        var todoSearch = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);

        todoSearch.refs.searchTerm.value = searchTerm;
        TestUtils.Simulate.change(todoSearch.refs.searchTerm);

        expect(spy).toHaveBeenCalledWith({
            type:'SET_SEARCH_TEXT',
            searchTerm: searchTerm
        });

;    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox is checked', () =>  {
        var spy = expect.createSpy();

        var todoSearch = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);

        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.searchTerm);

        expect(spy).toHaveBeenCalledWith({
            type:'TOGGLE_SHOW_COMPLETED'
        });
    });
})