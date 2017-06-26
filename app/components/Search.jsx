var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var Search = React.createClass({
    
    render: function() {
        var {dispatch, showCompleted, searchTerm} = this.props;
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchTerm" placeholder="Search for tasks" value={searchTerm} onChange={()=>{
                        var searchTerm=this.refs.searchTerm.value;
                        dispatch(actions.setSearchTerm(searchTerm))
                    }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={showCompleted} ref="showCompleted" onChange={()=>{
                            dispatch(actions.toggleShowCompleted());
                        }}/>
                        Show completed tasks
                    </label>
                </div>
            </div>
        )
    }
});

export default connect((state)=>{
    return {
        showCompleted: state.showCompleted,
        searchTerm: state.searchTerm
    }
})(Search);