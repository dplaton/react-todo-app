var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, IndexRoute, Router, hashHistory} = require('react-router');

import TodoApp from 'TodoApp';
var actions = require('actions');
var store = require('configureStore').configure();
var TodoApi = require('TodoApi');
import Login from 'Login';

store.dispatch(actions.startAddTodos());

$(document).foundation();
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={Login}/>
            <Route path="/todos" component={TodoApp}/>
        </Route>
        </Router>
    </Provider>, 
document.getElementById('app'));