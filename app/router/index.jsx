import React from 'react'
import {Route, IndexRoute, Router, hashHistory} from 'react-router'
import firebase from 'app/firebase/'

import TodoApp from 'TodoApp'
import Login from 'Login'

var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
}

var redirectIfLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/todos');
    }
    next();
}

export default (
     <Router history={hashHistory}>
        <Route path="/" onEnter={redirectIfLoggedIn}>
            <IndexRoute component={Login}/>
            <Route path="/todos" component={TodoApp} onEnter = {requireLogin}/>
        </Route>
        </Router>
)