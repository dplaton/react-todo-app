var uuid = require('node-uuid');
var moment = require('moment');

export var searchText = (state = '', action) => {
    switch (action.type) {
        case 'SET_SEARCH_TERM':
            return action.searchTerm
        default:
            return state
    }
}

export var toggleShowCompleted = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state
        default:
            return state
    }
}

export var todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            {
                return [
                    ...state,
                    action.todo
                ];
            }
        case 'UPDATE_TODO':
            {
                return state.map((todo) => {
                    if (todo.id == action.id) {
                        return {
                            ...todo,
                            ...action.updates
                        }
                    } else {
                        return todo;
                    }
                })
            }
        case 'ADD_TODOS':
            {
                return [
                    ...state,
                    ...action.todos
                ]
            }
        // by naming this action LOGOUT we essentially use the same action as the "logout" one
        case 'LOGOUT':
            {
                return [ ]
            }
        default:
            return state
    }
}

export var authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                    uid: action.uid
                }
        case 'LOGOUT':
            {
                return {}
            }
        default:
            return state
    }

}
