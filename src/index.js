import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import TodoApp from './TodoApp.jsx';

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <TodoApp />
  </Provider>, document.getElementById('todos')
);
