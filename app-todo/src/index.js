import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Component } from "react";
import { createStore, combineReducers } from 'redux';
import TodoRedux from './TodoRedux'

function todo(state = [], action) {
  switch (action.type) {
    case 'addItem':
      return [...state, {
        id: action.id,
        text: action.payload,
        visible: true
      }];
    case 'toggleItem':
      return state.map((state) => {
        return state.id == action.id ? {  ...state, visible: !state.visible }  : state
      })
    default:
      return state
  }
}

function visibilityFilter(state = [], action) {
  switch(action.type) {
    case 'filterItems':
      switch(action.filter) {
        case 'seeUncompleted':
          return { filter_completed: true }
        case 'seeAll':
          return { filter_completed: false }
        default:
          return state
      }
    default:
      return state
  }
}

const todoApp = combineReducers({
  todo,
  visibilityFilter
});

const Render = () => {
  ReactDOM.render(
    <TodoRedux store={createStore(todoApp)} />, document.getElementById('root')
  )
}

Render()

export default Render;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
