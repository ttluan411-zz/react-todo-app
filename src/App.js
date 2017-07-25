import React, { Component } from 'react';
import Task from './Task';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      value: '',
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleChange(e){
      this.setState({
        value: e.target.value
      })
    }
  handleSubmit(){
    const value = {task : this.state.value, completed: false}
    if(this.state.value){
    this.setState({
      list: [...this.state.list, value],
      value: ''
    })
    }
  }
  handleComplete(i){

    const list = [...this.state.list]
    const index = list.findIndex((el,id)=> i === id)
    list[index].completed = true;
    this.setState({
      list: list
    })
  }
  handleDelete(i){
    const list = [...this.state.list]
    const index = list.findIndex((el,id)=> i === id)
    list[index].completed = false;
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
  render() {
    const tasks = this.state.list.map( (el,i) =>{
      return <Task 
      completed={el.completed} 
      item={el.task} 
      id={i}
      key={i} 
      delete={this.handleDelete} 
      handleComplete={this.handleComplete}/>
    })
    return (
      <div className="App"> 
        To-do: 
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick = {this.handleSubmit}>Save</button>
        {tasks}
      </div>
    );
  }
}

export default App;
