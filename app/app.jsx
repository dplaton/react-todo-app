var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

$(document).foundation();

require('style!css!sass!applicationStyles')

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoApi = require('TodoApi');

import './../playground/firebase/index';

store.subscribe(() => {
    var state = store.getState();
    console.log('New state is ', state);
    TodoApi.setTodos(state.todos);
})

var initialTodos = TodoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos));

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>, 
document.getElementById('app'));