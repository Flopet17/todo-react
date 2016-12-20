var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            todos: [
                {
                    id: 1,
                    text: "Walk the dog"
                }, {
                    id: 2,
                    text: "Clean the yard"
                }, {
                    id: 3,
                    text: "Go for a walk"
                }, {
                    id: 4,
                    text: "Learn React"
                }
            ]
        }  
    },
    
    handleAddTodo: function(text) {
        var newId = this.state.todos.length + 1;
        var newText = text;
        
        console.log(newId, newText);
        
        var newTodo = {
            id: newId,
            text: newText
        }
        
        this.setState({
            todos: this.state.todos.concat([newTodo])
        });
    },
    
    render: function (){
        var {todos} = this.state;
        
        return (
            <div>
                <h1>Todo App title</h1>
                <TodoList todos={todos} />
                <AddTodo onSubmitHandle={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;