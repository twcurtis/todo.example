import React from 'react';

const Todo = props => (
  <div className="todo">
    <p className="todo--text">{props.text}</p>
    <span className="todo--close"></span>
  </div>
);

export default Todo;
