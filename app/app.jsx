var React = require('react');
var ReactDOM = require('react-dom');

$(document).foundation();   

require('style!css!sass!applicationStyles')

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state ', store.getState());
})

store.dispatch(actions.addTodo('Something'));
store.dispatch(actions.setSearchTerm('test'));
store.dispatch(actions.toggleShowCompleted());

ReactDOM.render(
   <TodoApp />, document.getElementById('app'));