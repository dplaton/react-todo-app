var React = require('react');

var Todo = React.createClass({

    render: function () {
        var {id, text, completed} = this.props;
        return (
            <div
                onClick={() => {
                this
                    .props
                    .onToggleTask(id);
            }}>
                <input type="checkbox" ref="completed" checked={completed} defaultChecked/> {text}
            </div>
        )
    }
});

module.exports = Todo;