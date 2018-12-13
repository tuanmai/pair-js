import React, { Component } from "react";

let index = 3;
export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [{
        id: 1,
        value: 'Have breakfirst',
        done: false
      },
      {
        id: 2,
        value: 'Get coffee',
        done: true}],
      input:'', showDone: false}
  }

  addToList = (event) => {
    event.preventDefault();
    const newItem = { id: index, value: this.state.input, done: false }
    index++;
    this.setState({list: [...this.state.list, newItem], input: ''})
  }

  storeInput = (event) =>  {
    this.setState({input: event.target.value})    
  }

  changeDone = (id) => {
    const itemIndex = this.state.list.findIndex((item) => item.id === id)
    const item = this.state.list[itemIndex];
    this.setState({
      list: [
        ...this.state.list.slice(0, itemIndex),
        { ...item, done: !!!item.done },
        ...this.state.list.slice(itemIndex + 1, this.state.list.length)
      ]
    })
  }

  toggleDone = (event) => {
    this.setState({showDone: !!!this.state.showDone})
  }

  render() {
    return (
        <div>
        <h1> Todo List </h1>
          <form> 
            <input value={this.state.input} onChange={this.storeInput}/>
            <button onClick={this.addToList}>Submit</button>
            <br/>
            <input type="checkbox" value={this.state.showDone} onClick={this.toggleDone}/>
            <label>Show Completed Items</label>
            {
              this.state.list.filter((item) => this.state.showDone? item : item.done === false).map((item) => {
                return (
                  <h3 key={item.id} onClick={() => this.changeDone(item.id)} style={ item.done ? { textDecorationLine: 'line-through' } : {}}>
                    { item.done ? 'Done-' + item.value: item.value }
                  </h3> 
                )
              })
            }
          </form>
        </div>
    )
  }
}
