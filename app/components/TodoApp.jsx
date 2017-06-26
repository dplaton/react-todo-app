var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
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

    componentDidUpdate: function () {
        TodoApi.setTodos(this.state.todos);
    },

    handleAddTodo: function (todo) {
        this.setState({
            todos: [
                ...this.state.todos, {
                    id: uuid(),
                    text: todo,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
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

    render: function () {
        var {todos, showCompleted, searchTerm} = this.state;
        var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchTerm);

        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <Search onSearch={this.handleSearch}/>
                            <TodoList />
                            <AddTodo onAddTodo={this.handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        )}
});

module.exports=TodoApp;