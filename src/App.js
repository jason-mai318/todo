import React, {Component} from 'react'

class TodoList extends Component {
  constructor(){
    super();
    this.state = {
      todos:[],
      current: "",
    };
  }
  
  handleChange = event => {
    this.setState({
      current:event.target.value
    })
    console.log(event.target.value)
  };

  addItem = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos,this.state.current],
      current: ''
    })
    console.log("Successfully added",this.state.current,"to the list!")
  }

  imDone = index =>{
    var temp = [...this.state.todos]
    console.log("line 31:",index)
      temp.splice(index,1)
      this.setState({todos:temp})
  }

  render(){
    const theList = this.state.todos.map((todos, index) => <span key={index} className="listItem"><li>{todos}</li><button onClick={()=>{this.imDone(index)}}>DELETE</button></span>);
    return(
      <div className = 'container'>
      <form>
      <label htmlFor="taskName">Task Name:</label>
      <input onChange = {this.handleChange} name="taskName" type="text" placeholder="Add a task here" value={this.state.current}></input>
      <button type="submit" onClick={this.addItem}>Add to list</button>
      </form>
      <ul>{theList}</ul>
      </div>
    );
  }
}

export default TodoList;