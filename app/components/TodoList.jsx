
import React from 'react';
import {connect} from 'react-redux';

import TodoApi from 'TodoApi';
import Todo from 'Todo'

export class TodoList extends React.Component {

    render() {
        var {todos, showCompleted, searchTerm} = this.props;
        var renderTodos = () => {
            var filteredTodos = TodoApi.filterTodos(todos,showCompleted, searchTerm);
            if (filteredTodos.length == 0) {
                return <p className="container__message">Nothing to do!</p>
            } 
            
            return filteredTodos.map((todo)=> {
               return <Todo key={todo.id} {...todo}  />
            });
        }
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
};

export default connect(
    (state) => {
        return state;
    }
)(TodoList);