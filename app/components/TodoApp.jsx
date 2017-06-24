var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');
var TodoApi = require('TodoApi');

var TodoApp = React.createClass({

    getInitialState: function () {
        return {
            showCompleted: false,
            searchTerm: '',
            todos: TodoApi.getTodos()
        }
    },
    
    componentDidUpdate: function() {
        TodoApi.setTodos(this.state.todos);
    },

    handleAddTodo: function (todo) {
        this.setState({
            todos: [
                ...this.state.todos, {
                    id: uuid(),
                    text: todo,
                    completed: false
                }
            ]
        })
    },

    handleSearch: function (searchTerm, showCompleted) {
        this.setState({
            searchTerm: searchTerm.toLowerCase(),
            showCompleted: showCompleted
        });
    },

    handleToggleTaskStatus: function (todoId) {
        var updatedTodos = this
            .state
            .todos
            .map((todo) => {
                if (todo.id === todoId) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });

        this.setState({todos:updatedTodos})
    },

    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <Search onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggleTask={this.handleToggleTaskStatus}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;