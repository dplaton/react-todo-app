var React = require('react');

var AddTodo = React.createClass({

    onSubmit: function(event) {
        event.preventDefault();
        var todoText = this.refs.todo.value;

        if (todoText && todoText.length > 0) {
            this.refs.todo.value = "";
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todo.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
            <form ref="form" onSubmit={this.onSubmit}>
                <input type="text" ref="todo" placeholder="Add a task"/>
                <button className="button expanded primary">Add task</button>
            </form>
            </div>
        )
    }
});

module.exports = AddTodo;