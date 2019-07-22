import React, { Component } from 'react'
import "./App.css";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      current: "",
      temp: "",
      user: "Your",
      edtemp: ""
    };
  }

  handleName = event => {
    this.setState({
      temp: event.target.value
    })
    console.log(event.target.value)
  };

  handleEdit = event => {
    this.setState({
      edtemp: event.target.value
    })
    console.log(event.target.value)
  };

  setEdit = (temp,idx) => {
    console.log("line 31",this.state.edtemp,temp)
    var temp2 = this.state.todos.map((todos, index) => {
      if (idx === index) {
        // return "hi"
        return ( this.state.edtemp)
      }
      else {
        return todos
      }
    });
    this.setState({todos:temp2})
  }

  setName = event => {
    event.preventDefault();
    if (this.state.temp !== "") {
      this.setState({
        user: this.state.temp + '\'s',
        temp: ""
      })
    }
    else {
      this.setState({
        user: 'Your',
        temp: ""
      })
    }
  };

  handleChange = event => {
    this.setState({
      current: event.target.value
    })
    console.log(event.target.value)
  };

  addItem = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.current],
      current: ''
    })
    console.log("Successfully added", this.state.current, "to the list!")
  }

  imDone = (index) => {
    var temp = [...this.state.todos]
    temp.splice(index, 1)
    this.setState({ todos: temp })
  }

  editRequest = (index) => {
    var temp1 = this.state.todos.map((todos, idx) => {
      if (idx === index) {
        return (
          {todos},
          <div>
          <form>
          <label>
          <input id="editbox" name="editme" type="text" placeholder="Enter your edit here" onChange={this.handleEdit}></input>
          </label>
          <button type="button" onClick={()=> {this.setEdit(temp1,idx)}}>Add to list</button></form></div>)
      }
      else {
        return todos
      }
    });
    this.setState({todos:temp1})
  }
  
  render() {
    const theList = this.state.todos.map((todos, index) => <span key={index} className="listItem"><ul><button onClick={() => { this.imDone(index) }}>DELETE</button>{todos}<button onClick={() => { this.editRequest(index) }}>EDIT</button></ul></span>);
    console.log(theList)
    return (
      <div className='container'>
        <div className="navBar">
          <div id="nameText"><b>Set Your Name Here:</b></div>
          <input id="nameInputBox" onChange={this.handleName} name="userName" type="text" placeholder="Enter your name" value={this.state.temp}></input>
          <button type="submit" onClick={this.setName}>Enter</button>
        </div>
        <div className="thelist">
          <h1><u>{this.state.user} To-Do List</u></h1>
          <p><b>{this.state.todos.length} things left to do.</b></p>
          <form>
            <label htmlFor="taskName">Task Name:</label>
            <input onChange={this.handleChange} name="taskName" type="text" placeholder="Add a task here" value={this.state.current}></input>
            <button type="submit" onClick={this.addItem}>Add to list</button>
          </form>
          <ul>{theList}</ul>
        </div>
      </div>
    );
  }
}

export default TodoList;