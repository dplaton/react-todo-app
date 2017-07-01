import React from 'react';
import  {connect} from 'react-redux';
import * as actions from 'actions';

export class Search extends React.Component {
    render() {
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
                            var action = actions.toggleShowCompleted();
                            console.log('Action is ', action);
                            dispatch(action);
                        }}/>
                        Show completed tasks
                    </label>
                </div>
            </div>
        )
    }
};

export default connect((state)=>{
    return {
        showCompleted: state.showCompleted,
        searchTerm: state.searchTerm
    }
})(Search);