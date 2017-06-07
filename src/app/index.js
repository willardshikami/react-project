var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
require('./css/index.css');
import{Router, Route, browserHistory, Link} from 'react-router';


//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require("./about");

var App = createReactClass({
    render: function(){
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        );
    }
});

//create component
var TodoComponent = createReactClass({
    getInitialState: function(){
        return{
            todos: ['clean up', 'eat lunch', 'work on project', 'work harder']
        }
    },

    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                <TodoItem item={item} key={index} onDelete = {this.onDelete}/>
            );
        }.bind(this));
        return(
            <div id="todo-list">
                <Link to={'/about'}>About</Link>
                <p>My Todo List</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    },
//custom functions
onDelete: function(item){
    var updateTodos = this.state.todos.filter(function(val, index){
        return item !== val;
    });
    this.setState({
        todos: updateTodos
    });
},

    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        });
    }
});


//Add component to html page
ReactDOM.render(<App/>,document.getElementById("todo-wrapper"));
