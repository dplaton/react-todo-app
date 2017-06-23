var React = require('react');
var ReactDOM = require('react-dom');

$(document).foundation();   

require('style!css!sass!applicationStyles')

var TodoApp = require('TodoApp');

ReactDOM.render(
   <TodoApp />, document.getElementById('app'));