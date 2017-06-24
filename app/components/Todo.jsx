var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var todoClassName = completed
            ? "todo todo-completed"
            : "todo"

        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment
                .unix(timestamp)
                .format('MMM Do YYYY @ HH:mm');
        }

        return (
            <div
                className={todoClassName}
                onClick={() => {
                this
                    .props
                    .onToggleTask(id);
            }}>
                <div>
                    <input type="checkbox" ref="completed" checked={completed} defaultChecked/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
});

module.exports = Todo;