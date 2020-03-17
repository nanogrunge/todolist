import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
class App extends React.Component {
  //dummy data for the state
  state ={
    todos: [
      {id:1, content:'buy some milk'},
      {id:2, content: 'take the dog for a walk'}
    ]
  }
  //function to delete todos
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo =>{
        return todo.id !== id
    });
    this.setState({
      todos
    })
  }
    //function to add new todos
    addTodo = (todo) => {
      todo.id = Math.random();
      let todos =[...this.state.todos, todo];
      this.setState({
        todos
      })
    }
  render(){
    return (
      <div className="App">
        <div className="container">
            <h1 className="center blue-text">Todo's </h1>
            <Todos todos ={this.state.todos} deleteTodo ={this.deleteTodo} />
            <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
   );
 }
}
export default App;
