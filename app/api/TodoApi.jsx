var $ = require('jQuery');

module.exports = {
    setTodos: function(todos) {
        if (!$.isArray(todos)) {
            return;
        }
        localStorage.setItem('todos', JSON.stringify(todos));
    },

    getTodos: function() {
        var strTodos = localStorage.getItem('todos');
        var todos = [];
        try {
            todos = JSON.parse(strTodos);
        } catch (e) {
            console.error(e);
        }

        return $.isArray(todos) ? todos: [];
    },

    filterTodos: function(todos, showCompleted, searchTerm) {
        var filteredTodos = todos;

        // filter by "show completed"
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });
       
        // filter by search text
        filteredTodos = filteredTodos.filter((todo) => {
            return searchTerm.length == 0 || todo.text.toLowerCase().indexOf(searchTerm) > -1;
        });

        // sort todos with non-completed first
        filteredTodos.sort((a,b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });
        return filteredTodos;
    }
}