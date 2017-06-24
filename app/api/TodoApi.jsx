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
    }
}