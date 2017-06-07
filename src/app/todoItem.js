var React = require('react');
var createReactClass = require('create-react-class');
require('./css/todoItem.css');

//create todo item component
var TodoItem = createReactClass({
    render: function(){
        return(
            <li onClick={this.clicked}>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}>x</span>
                </div>
            </li>
        );
    },

//custom functions
clicked:function(){
    console.log("you clicked me")
},

handleDelete: function(){
    this.props.onDelete(this.props.item);
}
});

module.exports = TodoItem;