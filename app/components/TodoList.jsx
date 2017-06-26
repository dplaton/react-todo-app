var React = require('react');
var {connect} = require('react-redux');

var TodoApi = require('TodoApi');
import Todo from 'Todo'

export var TodoList = React.createClass({
    render: function() {
        var {todos, showCompleted, searchTerm} = this.props;
        var renderTodos = () => {
            if (todos.length == 0) {
                return <p className="container__message">Nothing to do!</p>
            }
            return TodoApi.filterTodos(todos,showCompleted, searchTerm).map((todo)=> {
               return <Todo key={todo.id} {...todo}  />
            });
        }
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

export default connect(
    (state) => {
        console.log('State is ', state)
        return state;
    }
)(TodoList);