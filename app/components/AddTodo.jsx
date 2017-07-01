import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component{

    onSubmit(event) {
        event.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todo.value;

        if (todoText && todoText.length > 0) {
            this.refs.todo.value = "";
            dispatch(actions.startAddTodo(todoText));
        } else {
            this.refs.todo.focus();
        }
    }

    render() {
        return (
            <div className="container__footer">
            <form ref="form" onSubmit={this.onSubmit.bind(this)}>
                <input type="text" ref="todo" placeholder="Add a task"/>
                <button className="button expanded primary">Add task</button>
            </form>
            </div>
        )
    }
};

export default connect()(AddTodo)