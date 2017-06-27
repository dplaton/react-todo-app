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
                    ...state, {
                        id: uuid(),
                        text: action.text,
                        completed: false,
                        createdAt: moment().unix(),
                        completedAt: undefined
                    }
                ];
            }
        case 'TOGGLE_TODO':
            {
                return state.map((todo) => {
                    var nextCompleted = !todo.completed;
                    if (todo.id == action.id) {
                        return {
                            ...todo,
                            completed: nextCompleted,
                            completedAt: nextCompleted
                                ? moment().unix()
                                : undefined
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
        default:
            return state
    }
}
