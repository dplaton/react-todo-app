import * as redux from 'redux'
import thunk from 'redux-thunk'

import {searchText, toggleShowCompleted, todosReducer} from 'reducers';

export var configure = (initialState = {}) => {
    // for each store property specify which reducer handles it
    var reducer = redux.combineReducers({
        searchTerm: searchText,
        showCompleted:toggleShowCompleted,
        todos:todosReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f=>f
    ));

    return store;
}