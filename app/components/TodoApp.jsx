var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos:[{
                id:1,
                text:'Walk the dog'
            },{
                id:2,
                text: 'Feed the babbby'
            }, {
                id:3,
                text: 'Do some stuff'
            },{
                id:4,
                text: 'Do some more stuff'
            }]
        }
    },
    render: function() {
        var {todos} =  this.state;
        return(
            <div>
                <TodoList todos={todos}/>
            </div>
        )
    }
});

module.exports = TodoApp;