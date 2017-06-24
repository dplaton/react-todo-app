var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');

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
                    id: 1,
                    text: 'Walk the dog'
                }, {
                    id: 2,
                    text: 'Feed the babbby'
                }, {
                    id: 3,
                    text: 'Do some stuff'
                }, {
                    id: 4,
                    text: 'Do some more stuff'
                }
            ]
        }
    },

    handleAddTodo: function (todo) {
        console.log('Todo created: ', todo);
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