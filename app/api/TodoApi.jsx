var $ = require('jQuery');

module.exports = {
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