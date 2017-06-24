var React = require('react');

var Search = React.createClass({
    
    handleSearch: function() {
        var showCompleted = this.refs.showCompleted.checked;
        var searchTerm = this.refs.searchTerm.value; 

        console.log('Show completed ', showCompleted);
        console.log('Search term ', searchTerm);

        this.props.onSearch(searchTerm, showCompleted);
    },

    render: function() {
        return (
            <div>
                <div>
                    <input type="search" ref="searchTerm" placeholder="Search for tasks" onChange={this.handleSaerch}/>
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