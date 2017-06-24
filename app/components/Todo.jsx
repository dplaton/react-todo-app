var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;

        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timestamp = createdAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ HH:mm');
        }

        return (
            <div
                onClick={() => {
                this
                    .props
                    .onToggleTask(id);
            }}>
                <input type="checkbox" ref="completed" checked={completed} defaultChecked/> 
                <p>{text}</p>
                <p> {renderDate()}</p>
            </div>
        )
    }
});

module.exports = Todo;