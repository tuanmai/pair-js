import React, { Component } from "react";

class TodoRedux extends Component {
  componentDidMount(){
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  render () {
    const { store } = this.props;
    const state = store.getState()

    return (
    <div>
      <h1> Todo List </h1>
      <input ref={node => this.input = node}/>
      <button onClick={() => {
        store.dispatch({type: 'addItem', payload: this.input.value, id: state.todo.length})
        this.input.value = ''
      }}> Submit </button>
      <p>
        Show: {' '}
        <a href='#' onClick={() => store.dispatch({type:'filterItems', filter: 'seeAll'})}> All</a>   {' '} 
        <a href='#' onClick={() => store.dispatch({type:'filterItems', filter: 'seeUncompleted'})}> Uncompleted</a>  {' '}  
      </p>
      <ul> {
        state.todo.filter((item) => state.visibilityFilter.filter_completed ? item.visible : item).map(todo =>
        <li key={todo.id} onClick={() => store.dispatch({type: 'toggleItem', id: todo.id})} style={{textDecoration: todo.visible? 'none' : 'line-through'}}>
          {todo.text}
         </li>
      )}
      </ul>
    </div>
  );
  }
}

export default TodoRedux;