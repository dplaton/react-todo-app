var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoApi = require('TodoApi');

store.dispatch(actions.startAddTodos());



// store.subscribe(() => {
//     var state = store.getState();
//     TodoApi.setTodos(state.todos);
// })

// var initialTodos = TodoApi.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

$(document).foundation();
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>, 
document.getElementById('app'));