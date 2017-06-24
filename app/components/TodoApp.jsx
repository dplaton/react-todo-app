var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');
var uuid = require('node-uuid');

var TodoApp = React.createClass({

    getInitialState: function() {
        return {
            searchTerm: '',
            showCompleted: false
        };
    },

    getInitialState: function () {
        return {
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog'
                }, {
                    id: uuid(),
                    text: 'Feed the babbby'
                }, {
                    id: uuid(),
                    text: 'Do some stuff'
                }, {
                    id: uuid(),
                    text: 'Do some more stuff'
                }
            ]
        }
    },

    handleAddTodo: function (todo) {
        this.setState({
            todos:[
                ...this.state.todos,
                {   
                    id: uuid(),
                    text:todo
                }
            ]
        })
    },

    handleSearch: function(searchTerm, showCompleted) {
        this.setState({
            searchTerm: searchTerm.toLowerCase(),
            showCompleted: showCompleted
        });
    },

    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <Search onSearch={this.handleSearch}/>
                <TodoList todos={todos} onAddTodo={this.handleAddTodo}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;