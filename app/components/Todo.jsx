import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class Todo extends React.Component {

    render() {
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
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
                onClick={() => dispatch(actions.startToggleTodo(id, !completed))}>
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
};

export default connect()(Todo);