var React = require('react');

var Search = React.createClass({
    
    handleSearch: function() {
        var showCompleted = this.refs.showCompleted.checked;
        var searchTerm = this.refs.searchTerm.value; 
        this.props.onSearch(searchTerm, showCompleted);
    },

    render: function() {
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchTerm" placeholder="Search for tasks" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show completed tasks
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = Search;