var redux = require('redux');
var {searchText, toggleShowCompleted, todosReducer} = require('reducers');

export var configure = () => {
    var reducer = redux.combineReducers({
        searchText,
        toggleShowCompleted,
        todosReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f=>f
    ));

    return store;
}