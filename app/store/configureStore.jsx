var redux = require('redux');
var {searchText, toggleShowCompleted, todosReducer} = require('reducers');

export var configure = (initialState = {}) => {
    // for each store property specify which reducer handles it
    var reducer = redux.combineReducers({
        searchText,
        toggleShowCompleted,
        todos:todosReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f=>f
    ));

    return store;
}